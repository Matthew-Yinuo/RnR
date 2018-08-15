import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

export class ConfirmationPage extends React.PureComponent<
  RouteComponentProps<{}>
> {
  render() {
    const {
      location: { state }
    } = this.props;
    console.log(this.props);
    return <h1>{state.message}</h1>;
  }
}
