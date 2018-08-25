import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthRoute } from "@airbnb/controller";
import { RegisterConnector } from "../modules/register/RegisterConnector";
import { LoginConnector } from "../modules/login/LoginConnector";
import { ConfirmationPage } from "../modules/ConfirmationPage";
import { ForgotPasswordConnector } from "../modules/forgotpassword/ForgotPasswordConnector";
import { ChangePasswordConnector } from "../modules/changepassword/ChangePasswordConnector";
import { CreateListingConnector } from "../modules/listing/create/CreateListingConnector";
import { FindListingsConnector } from "../modules/listing/find/FindListingsConnector";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/register" component={RegisterConnector} />
      <Route exact={true} path="/login" component={LoginConnector} />
      <Route
        exact={true}
        path="/forgotpassword"
        component={ForgotPasswordConnector}
      />
      <Route
        exact={true}
        path="/change-password/:key"
        component={ChangePasswordConnector}
      />
      <Route path="/confirm" component={ConfirmationPage} />
      <Route path="/listings" component={FindListingsConnector} />
      <AuthRoute path="/create-listing" component={CreateListingConnector} />
    </Switch>
  </BrowserRouter>
);
