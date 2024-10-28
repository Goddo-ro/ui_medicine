import { IUser } from '@/shared/user/user';

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

export interface IData {
  readonly email: string;
  readonly password: string;
}
