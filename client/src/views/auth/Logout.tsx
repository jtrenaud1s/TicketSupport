import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CenterContainer from "../../components/CenterContainer";
import Layout from "../../layout/Layout";

const LogoutPage = () => {
  const history = useHistory();

  const Logout = () => {
    console.log("Do the logout thingy")
  };

  return (
    <Layout>
    <CenterContainer>
      <Card className="p-4 d-flex flex-column align-items-center justify-content-between">
        <h1>Logout</h1>
        <hr className="w-25"/>
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
    </Layout>
  );
};

export default LogoutPage;