import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import Layout from "../layout/Layout";

const HomePage: React.FC = () => {
  const authContext = useContext(AuthContext)
  return (
    <Layout title="Dashboard">
      <p>Home Page</p>
      test
      <pre>{JSON.stringify(authContext.currentUser)}</pre>
    </Layout>
  );
};

export default HomePage;
