import * as React from "react";
import { ForgotPasswordView } from "./view/ForgotPasswordView";
import { ForgotPasswordController } from "@airbnb/controller";
import { RouteComponentProps } from "react-router-dom";

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class ForgotPasswordConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/confirm/password-reset", {
      message: "check email to finish password reset"
    });
  };

  render() {
    return (
      <ForgotPasswordController>
        {({ submit }: { submit: any }) => (
          <ForgotPasswordView onFinish={this.onFinish} submit={submit} />
        )}
      </ForgotPasswordController>
    );
  }
}
