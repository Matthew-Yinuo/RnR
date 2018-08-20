import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Mutation: {
    deleteListing: async (_, { id }, { session }) => {
      // if (!session.userId) {
      //   throw new Error("not authed");
      // }

      const listing = await Listing.findOne({
        where: { id }
      });

      if (!listing) {
        throw new Error("Does not exist");
      }

      if (session.userId !== listing.userId) {
        console.log(
          `this user ${
            session.userId
          } is trying to delete another user's listing`
        );
        throw new Error("not authed");
      }

      await Listing.remove(listing);

      return true;
    }
  }
};
