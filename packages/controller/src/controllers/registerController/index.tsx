import gql from "graphql-tag";
import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";

interface Props {
  children: (
    data: { submit: (values: any) => Promise<null> }
  ) => JSX.Element | null;
}

class RC extends React.PureComponent<ChildMutateProps<Props, any, any>> {
  submit = async (values: any) => {
    console.log(values);
    this.props.mutate({
      variables: values
    });
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const registerUserMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController: any = graphql(registerUserMutation)(RC);
