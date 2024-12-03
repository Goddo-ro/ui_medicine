export interface User {
  readonly uid: string;
  readonly email: string;
}

export interface AuthState {
  readonly isAuth: boolean;
  readonly isLoading: boolean;
}

export interface Login {
  readonly message: string;
  readonly userCredential: {
    user: User;
  };
}

export interface Register {
  readonly message: string;
}

export interface AuthData {
  readonly email: string;
  readonly password: string;
}
