import React, {useState, useEffect} from "react";
import {Form, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {lecturerLoginAction} from "../actions/LecturerActions";

const LoginScreen = ({history}) => {
  const isLogin = JSON.parse(localStorage.getItem("lecturerInfo"));
  if (isLogin) {
    history.push("/giangvien");
  }
  const dispatch = useDispatch();
  const [cmnd, setCMND] = useState("");
  const [password, setPassword] = useState("");
  const {loading, error, lecturer} = useSelector(
    (state) => state.lecturerLogin
  );

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(lecturerLoginAction({cmnd, password}));
  };

  useEffect(() => {
    if (lecturer != null) {
      history.push("/giangvien");
    }
  });

  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>chứng minh nhân dân</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
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
  );
};

export default LoginScreen;
