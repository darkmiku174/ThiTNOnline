import React from "react";
import { Form, Button } from "react-bootstrap";

const ResetPasswordScreen = () => {
  return (
    <div className="login-container">
      <Form className="login-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Submit your email to reset password
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ResetPasswordScreen;
