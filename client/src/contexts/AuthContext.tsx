import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import {
  IRegisterInput,
  ILoginInput,
  User,
  UserJWTPayload,
} from "../types/InputTypes";

import jwt_decode from "jwt-decode";
import API from "../services/api";

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

  useEffect(() => {
    console.log("page refresh get access token")
    API.refreshClient
      .get("http://localhost:5000/auth/refresh")
      .then(async (response) => {
        setToken(response.data.access_token);
        const dec: UserJWTPayload = jwt_decode(response.data.access_token);
        let res = await axios.get("http://localhost:5000/user/" + dec.sub);
        setCurrentUser(res.data as User);
      })
      .catch(() => {
        setToken("");
        history.push("/login");
      });

    // eslint-disable-next-line
  }, []);

  API.createRefreshInterceptor(setCredential, history);

  const setToken = (token: string) => {
    setCredential(token);
    API.setToken(token);
  };

  const register = async (user: IRegisterInput) => {
    await API.client.post("http://localhost:5000/auth/register", user);
    history.push("/login");
  };

  const login = async (credentials: ILoginInput) => {
    let response = await API.client.post(
      "http://localhost:5000/auth/login",
      credentials
    );

    setToken(response.data.access_token);
    const dec: UserJWTPayload = jwt_decode(response.data.access_token);
    response = await axios.get("http://localhost:5000/user/" + dec.sub);
    setCurrentUser(response.data as User);
  };

  const logout = () => {
    setToken("");
    setCurrentUser(null);
    history.push("/login")
  };

  const isLoggedIn = () => credential !== "";

  const value = {
    credential,
    currentUser,
    register,
    login,
    logout,
    isLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
