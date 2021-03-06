import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Box from "./Box";


const LoginBox: React.FC = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  return (
    <div className="d-flex flex-column w-25">
      <Box title="Login">
        <span>{error}</span>

        <Form.Group className="w-100">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" id="email" className="mb-2" placeholder="you@school.edu" onChange={(event) => setEmail(event.target.value)} value={email} />
        </Form.Group>

        <Form.Group className="w-100">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" id="password" className="form-control mb-2" placeholder="..." onChange={(event) => setPassword(event.target.value)} value={password} />
        </Form.Group>

        <Button variant="primary" className="form-control" disabled={true}>Login</Button>

      </Box>
      
      <small>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/register">Register here.</Link>
        </p>
        <p className="text-center">
          <Link to="/forget">Forget your password?</Link>
        </p>
      </small>
    </div>
  );
};

export default LoginBox;