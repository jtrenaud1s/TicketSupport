import axios from "axios";
import React, { createContext, useState } from "react";

interface IAuthContext {
  register: (email: string, password: string) => void
  login: (email: string, password: string) => void;
  logout: () => void;
  currentUser: any;
  isLoggedIn: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const register = (email: string, password: string) => {
    console.log("Attempting to register new account");
    axios.post("http://localhost:5000/auth/register", {
      firstName: "NoName",
      lastName: "NoName",
      email: email,
      password: password,
    });
  };

  const login = (email: string, password: string) => {
    console.log("Attempting login");
    axios
      .post("http://localhost:5000/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setCurrentUser(res.data);
      });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const isLoggedIn = () => currentUser != null;

  const value = { register, login, logout, currentUser, isLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
