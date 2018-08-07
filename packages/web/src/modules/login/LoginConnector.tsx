import * as React from "react";
import { LoginView } from "./view/LoginView";
import { LoginController } from "@airbnb/controller";

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class LoginConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };
  render() {
    return (
      <LoginController>
        {({ submit }: { submit: any }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
