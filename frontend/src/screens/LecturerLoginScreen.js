import React, {useState, useEffect} from "react";
import {Form, Button, Alert, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {lecturerLoginAction} from "../actions/LecturerActions";

const LecturerLoginScreen = ({history}) => {
  const dispatch = useDispatch();
  const {loading, error, lecturerInfo} = useSelector(
    (state) => state.lecturerLogin
  );

  const [cmnd, setCMND] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(lecturerLoginAction({cmnd, password}));
  };

  useEffect(() =>{
    if(loading===false && lecturerInfo!=null){
      history.push("/giangvien")
    }
  },[lecturerInfo])

  if(lecturerInfo !==null && lecturerInfo){
    history.push("/giangvien")
  }

  return (
      <>
        {error && <Alert variant={"danger"} className={"mt-4"}>
          Sai cmnd hoặc mật khẩu
        </Alert> }
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
          </>
  );
};

export default LecturerLoginScreen;
