import React, { useState } from "react";
import CenterContainer from "../../components/CenterContainer";
import { Form } from "react-bootstrap";
import Box from "../../components/Box";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error] = useState<string>("");

  return (
    <CenterContainer>
      <Box title="Reset Password">
        <p>Valid password reset code obtained from queryString</p>
        <p>Please enter a strong password.</p>

        <Form.Group>
          <Form.Control type="password" name="password" id="password" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} value={password} />
        </Form.Group>

        <Form.Group>
          <Form.Control type="password" name="confirm" id="confirm" placeholder="Confirm Password" onChange={(event) => setConfirm(event.target.value)} value={confirm} />
        </Form.Group>

        <button>
          Reset Password
        </button>
        
        <span>{error}</span>
      </Box>
    </CenterContainer>
  );
};

export default ResetPasswordPage;
