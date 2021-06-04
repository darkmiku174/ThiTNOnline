import React, { useState, useEffect } from "react";
import {Form, Button, Alert} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { studentLoginAction } from "../actions/StudentActions";

const LoginScreen = ({ history }) => {
  const isLogin = JSON.parse(localStorage.getItem("studentInfo"));
  if (isLogin) {
    history.push("/exams");
  }
  const dispatch = useDispatch();
  const [cmnd, setCMND] = useState();
  const [password, setPassword] = useState();

  const { loading, error, student } = useSelector(
    (state) => state.studentLogin
  );
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(studentLoginAction({ cmnd, password }));
  };
  useEffect(() => {
    console.log(student);
    if (student != null) {
      history.push("/exams");
    }
  });
  return (
      <>
        {error ? <Alert variant={"danger"} className={"mt-4"}>
    Sai cmnd hoặc mật khẩu
  </Alert>:""}
    <div className="login-container">

      <Form className="login-form" onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Chứng minh nhân dân</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập cmnd"
            onChange={(e) => setCMND(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
      </>
  );
};

export default LoginScreen;
