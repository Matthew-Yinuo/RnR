import * as React from "react";
import { RegisterController } from "@airbnb/controller";
import { RegisterView } from "./view/RegisterView";

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }: { submit: any }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
