import { IUser } from '@/shared/user/user';

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
