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
    const {
      history,
      location: { state }
    } = this.props;
    if (state && state.next) {
      return history.push(state.next);
    }
    history.push("/");
    });

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
