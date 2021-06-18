import React, { useState, useEffect } from "react";
import {Form, Button, Alert, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { studentLoginAction } from "../actions/StudentActions";

const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [cmnd, setCMND] = useState();
  const [password, setPassword] = useState();

  const { loading, error, studentInfo } = useSelector(
    (state) => state.studentLogin
  );
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(studentLoginAction({ cmnd, password }));
  };
  useEffect(() => {
    if (studentInfo != null) {
      history.push("/exams");
    }
  });
  return (
      <div>
        {error ? <Alert variant={"danger"} className={"mt-4"}>
    Sai cmnd hoặc mật khẩu
  </Alert>:""}
      <div className="login-container" style={{width:'85%'}}>

        <Form className="login-form" onSubmit={submitHandler} style={{boxShadow:'0 10px 8px 0 rgba(0, 0, 0, 0.2)',padding:'0',borderRadius:'15px'}}>
        <Row className="decorate" style={{display:'flex'}}>
          {/*Col 1*/}
          <Col md={8} style={{borderRadius:'15px 0px 0px 15px',backgroundImage:"url(https://png.pngtree.com/thumb_back/fh260/back_pic/02/66/55/50578b1ecd8c4ae.jpg)"}}>
          <div style={{backgroundColor:'white',borderRadius:'15px'}}>
          </div>
          </Col>
          {/*Col 2*/}
          <Col md={4} style={{padding:'2rem'}}>
            <h3 style={{textAlign:'center',fontWeight:'bold'}}>Đăng nhập</h3>
            <Form.Group controlId="cmnd">
              <Form.Label style={{ fontWeight:'bold',fontSize:'14px'}}>Chứng minh nhân dân :</Form.Label>
              <Form.Control
                style={{
                  border:'3px solid #64defa',
                  borderRadius:'5px',
                  paddingLeft:'0.5rem'}}
                type="text"
                placeholder="Nhập CMND"
                onChange={(e) => setCMND(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ fontWeight:'bold'}}>Mật khẩu :</Form.Label>
              <Form.Control
                style={{border:'3px solid #64defa',borderRadius:'5px',paddingLeft:'0.5rem'}}
                type="password"
                placeholder="Nhập mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="login-ultities">
              <Form.Check type="checkbox" label="Nhớ tài khoản" style={{marginLeft:'1.4rem'}}/>
              <div>
                <Link to="/resetpassword">Quên mật khẩu ?</Link>
              </div>
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-block">
              Submit
            </Button>
          </Col>
        </Row>
        </Form>
      </div>
      </div>
  );
};

export default LoginScreen;
