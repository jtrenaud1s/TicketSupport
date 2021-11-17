import { Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./views/auth/Login";
import RegisterPage from "./views/auth/Register";
import HomePage from "./views/Home";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" exact={true} render={HomePage} />
        <Route path="/login" exact={true} render={LoginPage} />
        <Route path="/register" exact={true} render={RegisterPage} />
      </Switch>
    </AuthProvider>
  );
};

export default Application;
