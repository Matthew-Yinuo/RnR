import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordView } from "./view/ChangePasswordView";
import { ChangePasswordController } from "@airbnb/controller";

export class ChangePasswordConnector extends React.PureComponent<
  RouteComponentProps<{ key: string }>
> {
  onFinish = () => {
    this.props.history.push("/login");
  };

  render() {
    const {
      match: {
        params: { key }
      }
    } = this.props;
    console.log(key);
    return (
      <ChangePasswordController>
        {({ submit }: { submit: any }) => (
          <ChangePasswordView
            onFinish={this.onFinish}
            key={key}
            token={key}
            submit={submit}
          />
        )}
      </ChangePasswordController>
    );
  }
}
