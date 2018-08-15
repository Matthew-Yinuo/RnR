import * as React from "react";
import { LoginView } from "./view/LoginView";
import { LoginController } from "@airbnb/controller";
import { RouteComponentProps } from "react-router-dom";

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class LoginConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/confirm/homepage", {
      message: "this is the login page"
    });
  };

  render() {
    return (
      <LoginController>
        {({ submit }: { submit: any }) => (
          <LoginView onFinish={this.onFinish} submit={submit} />
        )}
      </LoginController>
    );
  }
}
