import React, {useState, useEffect} from "react";
import {Form, Button, Alert,Col,Row} from "react-bootstrap";
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
        </Col>
      </Row>
      </Form>
    </div>
  </>
  );
};

export default LecturerLoginScreen;
