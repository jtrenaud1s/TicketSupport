import { Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./views/auth/Login";
import LogoutPage from "./views/auth/Logout";
import RegisterPage from "./views/auth/Register";
import HomePage from "./views/Home";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  
  return (
    <AuthProvider>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/logout" component={LogoutPage} />
      </Switch>
    </AuthProvider>
  );
};

export default Application;
