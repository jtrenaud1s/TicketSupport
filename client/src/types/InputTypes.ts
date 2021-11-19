export interface ILoginInput {
  email: string;
  password: string;
}

export interface IRegisterInput extends ILoginInput {
  firstName: string;
  lastName: string;
}

export interface UserJWTPayload {
  email: string;
  sub: number;
  iat: number;
  exp: number;
}

export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  createdDate?: Date;
  updatedDate?: Date;
};
