import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import { withCreateListing, WithCreateListingProps } from "@airbnb/controller";
import { ListingFormValues, ListingForm } from "../shared/listingForm";

class RC extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListingProps
> {
  submit = async (
    values: ListingFormValues,
    { setSubmitting }: FormikActions<ListingFormValues>
  ) => {
    await this.props.createListing(values);
    setSubmitting(false);
  };

  render() {
    return <ListingForm submit={this.submit} />;
  }
}

export const CreateListingConnector = withCreateListing(RC);
