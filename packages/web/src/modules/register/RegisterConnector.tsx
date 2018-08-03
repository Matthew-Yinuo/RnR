import * as React from "react";
import { RegisterView } from "./view/RegisterView";
import { RegisterController } from "@airbnb/controller";

// container -> view
// container -> connector -> view
// controller -> connector -> view
export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
