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
    return (
      <div>
        <h1>
          {state.message ? state.message : "It looks like you need to login!"}{" "}
        </h1>
        <a href="/login">Click here to login</a>
      </div>
    );
  }
}
