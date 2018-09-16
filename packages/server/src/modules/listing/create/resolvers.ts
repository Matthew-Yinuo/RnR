import { processUpload } from "../shared/processUpload";
import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { listingCacheKey } from "../../../constants";

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (
      _,
      { input: { picture, ...data } },
      { session, redis }
    ) => {
      // isAuthenticated(session);
      const pictureUrl = await processUpload(picture);

      const listing = await Listing.create({
        ...data,
        pictureUrl,
        userId: session.userId
      }).save();

      redis.lpush(listingCacheKey, JSON.stringify(listing));

      return true;
    }
  }
};
