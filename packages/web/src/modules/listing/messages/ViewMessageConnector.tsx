import * as React from "react";
import { ViewMessages } from "@airbnb/controller";
import { RouteComponentProps } from "react-router-dom";
<<<<<<< HEAD
import { ViewMessages } from "@airbnb/controller";
=======
import { InputBar } from "./InputBar";
>>>>>>> 36_ApolloCreateMessages

export class ViewListingConnector extends React.PureComponent<
  RouteComponentProps<{ listingId: string }>
> {
  render() {
    const {
      match: {
        params: { listingId }
      }
    } = this.props;
    return (
      <ViewMessages listingId={listingId}>
        {({ loading, messages }) => {
          if (loading) {
            return <div>...loading</div>;
          }

          return (
            <div>
              {messages.map((m, i) => (
                <div key={`${i}-lm`}>{m.text}</div>
              ))}
<<<<<<< HEAD
=======
              <InputBar listingId={listingId} />
>>>>>>> 36_ApolloCreateMessages
            </div>
          );
        }}
      </ViewMessages>
    );
  }
}
