import React, { useContext } from "react";
import { Redirect } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Layout from "../layout/Layout";

const HomePage: React.FC = () => {
  const authContext = useContext(AuthContext)
  console.log(authContext.isLoggedIn());

  if (!authContext.isLoggedIn()) return <Redirect to="/login" />

  return (
    <Layout title="Dashboard">
      <p>Home Page</p>
      <pre>{JSON.stringify(authContext.currentUser)}</pre>
    </Layout>
  );
};

export default HomePage;
