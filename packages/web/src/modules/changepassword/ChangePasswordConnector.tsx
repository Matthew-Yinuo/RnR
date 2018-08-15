import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordView } from "./view/ChangePasswordView";
import { ChangePasswordController } from "@airbnb/controller";

export class ChangePasswordConnector extends React.PureComponent<
  RouteComponentProps<{
    key: string;
  }>
> {
  submit = async (values: any) => {
    console.log(values);
    return null;
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
            // tslint:disable-next-line:jsx-no-lambda
            submit={async ({ newPassword }) =>
              submit({
                key,
                newPassword
              })
            }
          />
        )}
      </ChangePasswordController>
    );
  }
}
