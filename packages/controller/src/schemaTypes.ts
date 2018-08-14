

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUserMutation
// ====================================================

export interface LoginUserMutation_login_errors {
  path: string;
  message: string;
}

export interface LoginUserMutation_login {
  errors: LoginUserMutation_login_errors[] | null;
  sessionId: string | null;
}

export interface LoginUserMutation {
  login: LoginUserMutation_login;
}

export interface LoginUserMutationVariables {
  email: string;
  password: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterUserMutation
// ====================================================

export interface RegisterUserMutation_register {
  path: string;
  message: string;
}

export interface RegisterUserMutation {
  register: RegisterUserMutation_register[] | null;
}

export interface RegisterUserMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================