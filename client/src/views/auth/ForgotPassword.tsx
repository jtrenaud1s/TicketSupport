import React, { useState } from "react";
import { Button, FormControl, FormGroup } from "react-bootstrap";
import Box from "../../components/Box";
import CenterContainer from "../../components/CenterContainer";

const ForgotPasswordPage = () => {
  const [sending, setSending] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const resetPasswordRequest = () => {
    if (error !== "") setError("");

    setSending(true);
  };

  return (
    <CenterContainer>
      <div className="d-flex flex-column w-25">
        <Box title="Reset Password">
            <p>Please enter your email.</p>

            <FormGroup className="w-100">
              <FormControl type="email" name="email" id="email" className="mb-2" placeholder="Email Address" onChange={(event) => setEmail(event.target.value)} value={email} />
            </FormGroup>

            <Button className="w-100" disabled={sending} onClick={() => resetPasswordRequest()}>Send Reset Link</Button>
            <span>{error}</span>
        </Box>
      </div>
    </CenterContainer>
  );
};

export default ForgotPasswordPage;
