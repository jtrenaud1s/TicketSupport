import axios from "axios";
import React, { createContext, useState } from "react";
import { Redirect, useHistory } from "react-router";

import {
  IRegisterInput,
  ILoginInput,
  User,
  UserJWTPayload,
} from "../types/InputTypes";

import jwt_decode from "jwt-decode";

interface IAuthContext {
  currentUser: User | null;
  credential: string;

  register: (user: IRegisterInput) => void;
  login: (user: ILoginInput) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [credential, setCredential] = useState("");
  const history = useHistory();

  const register = async (user: IRegisterInput) => {
    console.log("Attempting to register new account");
    const res = await axios.post("http://localhost:5000/auth/register", user);
    console.log(res);
    console.log(res.data);
    history.push("/login");
  };

  const login = async (credentials: ILoginInput) => {
    console.log("Attempting login");
    let response = await axios.post(
      "http://localhost:5000/auth/login",
      credentials
    );

    const access_token = response.data.access_token;
    setCredential(access_token);

    const dec: UserJWTPayload = jwt_decode(access_token);

    response = await axios.get("http://localhost:5000/user/" + dec.sub);
    setCurrentUser(response.data as User);
  };

  const logout = () => {
    setCredential("");
  };

  const isLoggedIn = () => credential != "";

  const value = { credential, currentUser, register, login, logout, isLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
