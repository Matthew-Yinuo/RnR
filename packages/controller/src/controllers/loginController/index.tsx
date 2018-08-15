import gql from "graphql-tag";
import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import {
  LoginUserMutation,
  LoginUserMutationVariables
} from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";

interface Props {
  onSessionId?: (sessionId: string) => void;
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
      data: {
        login: { errors, sessionId }
      }
    } = await this.props.mutate({
      variables: values
    });
    console.log("response: ", errors, sessionId);

    if (errors) {
      // show errors
      // [{path: 'email': message: 'inval...'}]
      // {email: 'invalid....'}
      return normalizeErrors(errors);
    }

    if (sessionId && this.props.onSessionId) {
      this.props.onSessionId(sessionId);
    }

    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const loginUserMutation = gql`
  mutation LoginUserMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        path
        message
      }
      sessionId
    }
  }
`;

export const LoginController: any = graphql<
  Props,
  LoginUserMutation,
  LoginUserMutationVariables
>(loginUserMutation)(RC);
