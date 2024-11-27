import { IUser } from '@/shared/types/user';

export interface IAuthState {
  readonly isAuth: boolean;
  readonly isLoading: boolean;
}

export interface IIsLoggedIn {
  readonly message: string;
  readonly uid: string;
}

export interface ILogin {
  readonly message: string;
  readonly userCredential: {
    user: IUser;
  };
}

export interface IRegister {
  readonly message: string;
}

export interface IAuthData {
  readonly email: string;
  readonly password: string;
}
