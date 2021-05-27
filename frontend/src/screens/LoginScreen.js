import React from "react";
import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const LoginScreen = ({history}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/exams");
  };
  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox" className="login-ultities">
          <Form.Check type="checkbox" label="Remember me" />
          <div>
            <Link to="/resetpassword">Forgot password</Link>
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" className="btn btn-block">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginScreen;
