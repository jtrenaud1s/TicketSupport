import { Route, Switch } from "react-router-dom";
import HomePage from "./views/Home";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <Switch>
      <Route path="/" exact={true} render={HomePage} />
    </Switch>
  );
};

export default Application;
