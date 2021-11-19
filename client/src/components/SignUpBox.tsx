import React, { useContext, useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Box from "./Box";

const SignUpBox = () => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const authContext = useContext(AuthContext);

  const signUpWithEmailAndPassword = () => {
    if (error !== "") setError("");
    setRegistering(true);
    authContext.register({email, firstName, lastName, password});
    setRegistering(false);
  };

  return (
    <div className="d-flex flex-column w-25">
      <Box title="Sign Up">
        <FormGroup className="w-100">
          <FormLabel>First Name</FormLabel>
          <FormControl
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="mb-2"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </FormGroup>
        <FormGroup className="w-100">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="mb-2"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </FormGroup>
        <FormGroup className="w-100">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            name="email"
            id="email"
            className="mb-2"
            placeholder="you@school.edu"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </FormGroup>

        <FormGroup className="w-100">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            name="password"
            id="password"
            placeholder="..."
            className="mb-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>

        <FormGroup className="w-100">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            type="password"
            name="confirm"
            id="confirm"
            className="mb-2"
            placeholder="Confirm Password"
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}
          />
        </FormGroup>

        <Button
          className="w-100"
          disabled={registering}
          onClick={() => signUpWithEmailAndPassword()}
        >
          Sign Up
        </Button>
      </Box>
      <small>
        <p className="mt-4 text-center">
          Already a member? <Link to="/login">Login!</Link>
        </p>
      </small>
    </div>
  );
};

export default SignUpBox;
