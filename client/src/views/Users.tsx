import { Spinner, Tab, Tabs } from "react-bootstrap";
import UserList from "../components/UserList";
import { placeholder } from "../interfaces/IUser";
import Layout from "../layout/Layout";

const UsersPage = () => {
  // Temporary variables until the api is set up
  const loading = false;
  const users: any = [placeholder];

  return (
    <Layout title="User Management">
      {loading && <Spinner animation="border" variant="dark" />}
      <Tabs defaultActiveKey="users">
        <Tab eventKey="users" title="Active Members">
          <UserList users={users} role="administrators" />
        </Tab>
        <Tab eventKey="administrators" title="Potential New Members">
          <UserList users={users} role="pnm" />
        </Tab>
      </Tabs>
    </Layout>
  );
};

export default UsersPage;
