export interface IUser {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  role: string;
}

export const placeholder: IUser = {
  uid: "placeholder",
  email: "placeholder@me.com",
  firstName: "John",
  lastName: "Doe",
  role: "Placeholder"
}
