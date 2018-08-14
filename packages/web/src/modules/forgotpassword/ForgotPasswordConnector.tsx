import * as React from "react";
import { ForgotPasswordView } from "./view/ForgotPasswordView";
import { ForgotPasswordController } from "@airbnb/controller";

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class ForgotPasswordConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };
  render() {
    return (
      <ForgotPasswordController>
        {({ submit }: { submit: any }) => (
          <ForgotPasswordView submit={submit} />
        )}
      </ForgotPasswordController>
    );
  }
}
