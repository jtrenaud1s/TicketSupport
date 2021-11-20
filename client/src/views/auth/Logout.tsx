import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CenterContainer from "../../components/CenterContainer";
import AuthContext from "../../contexts/AuthContext";

const LogoutPage = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const Logout = () => {
    authContext.logout();
  };

  return (

      <CenterContainer>
        <Card className="p-4 d-flex flex-column align-items-center justify-content-between">
          <h1>Logout</h1>
          <hr className="w-25" />
          <p>Are you sure you want to logout?</p>
          <Button className="w-100 mb-2" onClick={() => Logout()}>
            Logout
          </Button>
          <Button
            className="w-100"
            variant="default"
            onClick={() => history.goBack()}>
            Cancel
          </Button>
        </Card>
      </CenterContainer>

  );
};

export default LogoutPage;
