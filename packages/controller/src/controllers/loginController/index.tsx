import gql from "graphql-tag";
import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import {
  LoginUserMutation,
  LoginUserMutationVariables
} from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";

interface Props {
  children: (
    data: {
      submit: (
        values: LoginUserMutationVariables
      ) => Promise<{
        [key: string]: string;
      } | null>;
    }
  ) => JSX.Element | null;
}

class RC extends React.PureComponent<
  ChildMutateProps<Props, LoginUserMutation, LoginUserMutationVariables>
> {
  submit = async (values: LoginUserMutationVariables) => {
    console.log(values);
    const {
      data: { login }
    } = await this.props.mutate({
      variables: values
    });

    if (login) {
      // show errors here
      return normalizeErrors(login);
    }
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const loginUserMutation = gql`
  mutation LoginUserMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const LoginController: any = graphql<
  Props,
  LoginUserMutation,
  LoginUserMutationVariables
>(loginUserMutation)(RC);
