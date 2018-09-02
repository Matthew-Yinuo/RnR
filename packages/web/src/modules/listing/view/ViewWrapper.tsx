import * as React from "react";
import { withViewListing, WithViewListing } from "@airbnb/controller";

interface Props {
  children: (data: WithViewListing) => JSX.Element | null;
}

class RC extends React.PureComponent<Props & WithViewListing> {
  render() {
    const { children, loading, listing } = this.props;
    return children({ loading, listing });
  }
}

export const ViewWrapper = withViewListing(RC as any);
