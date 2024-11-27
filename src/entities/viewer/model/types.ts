import { User } from '@/shared/types/user';

export interface AuthState {
  readonly isAuth: boolean;
  readonly isLoading: boolean;
}

export interface IsLoggedIn {
  readonly message: string;
  readonly uid: string;
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
