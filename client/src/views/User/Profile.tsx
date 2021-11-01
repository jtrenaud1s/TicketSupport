import React, { useContext, useState } from "react";
import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import Loadscreen from "../../components/Loadscreen";
import ChangePassword from "../../components/PasswordChanger";
import { placeholder } from "../../interfaces/IUser";
import Layout from "../../layout/Layout";

const ProfilePage = () => {

  const user = placeholder
  const loading = false;
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  return (
    <Layout title="User Profile">
      { loading && <Loadscreen/>}
      <Tabs defaultActiveKey="profile" id="profile-tabs-main" className="mb-3">
        <Tab eventKey="profile" title="My Profile">
          <h3>My Profile</h3>
          <Form>
            <Row>

              <Col sm={12} md={2}>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Phil" value={firstName} onChange={(e) => {setFirstName(e.target.value);}} />
                </Form.Group>
              </Col>

              <Col sm={12} md={2}>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Born" value={lastName} onChange={(e) => { setLastName(e.target.value); }} />
                </Form.Group>
              </Col>

              <Col sm={12} md={6}>
                <Form.Group>
                  <Form.Label>Profile Picture</Form.Label>
                  <p>Not Implemented</p>
                </Form.Group>
              </Col>
              
            </Row>

          </Form>
        </Tab>
        <Tab eventKey="contact" title="Contact Info"></Tab>
        <Tab eventKey="password" title="Change Password">
          <ChangePassword />
        </Tab>
      </Tabs>
    </Layout>
  );
};

export default ProfilePage;