import React, {useEffect, useState} from "react";
import {Container, Col, Row, Button, Form, Modal, Alert} from "react-bootstrap";
import DateTimePicker from "../GlobalComponents/DateTimePicker";
import {useDispatch, useSelector} from "react-redux";
import {lecturerLoginAction, lecturerLogoutAction, updateLecturerInfo} from "../../actions/LecturerActions";
import {UPDATE_LECTURER_INFO_RESET} from "../../constants/LecturerConstants";

const TeacherAccount = () => {
  const dispatch=useDispatch()
  const {loading:loginLoading,lecturerInfo} = useSelector(state =>state.lecturerLogin)
  const {loading,error,message} = useSelector(state => state.updateLecturerInfo)
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [cmnd, setCmnd] = useState("");
  const [gender, setGender] = useState(1)
  const [birthday, setBirthday] = useState({});
  const [password, setPassword] = useState("");

  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const submitHandler=(e)=>{
    e.preventDefault()
      setShowConfirmPass(true)
  }
  const confirmPassHandler=(e)=>{
    e.preventDefault()
    dispatch(updateLecturerInfo({CMND:cmnd,HoTen:fullName,NgaySinh:lecturerInfo.NgaySinh,GioiTinh:gender,Password:password}))
    setShowConfirmPass(false)
  }
  useEffect(() => {
    if(lecturerInfo){
      setId(lecturerInfo._id)
        setFullName(lecturerInfo.HoTen)
      setCmnd(lecturerInfo.CMND)
      setGender(lecturerInfo.GioiTinh)
      setBirthday({
        day:new Date(lecturerInfo.NgaySinh).getDate(),
        month:new Date(lecturerInfo.NgaySinh).getMonth(),
        year:new Date(lecturerInfo.NgaySinh).getFullYear()
      })
    }
    if(message==="Updated profile"){
      dispatch({type:UPDATE_LECTURER_INFO_RESET})
      dispatch(lecturerLoginAction({cmnd,password}))
    }
  }, [lecturerInfo,message]);

  return (
      <>
        <Modal show={showConfirmPass} onHide={() => setShowConfirmPass(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Nhập mật khẩu</Modal.Title>
            </Modal.Header>
          <Modal.Body id={"confirm-pass-form"}>
            <Form onSubmit={confirmPassHandler}>
              <Form.Group controlId={"confirm-pass-controlid"}>
                <Form.Control type="password" placeholder={"Nhập mật khẩu"} onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
                <Button type={"submit"}>Xác nhận</Button>
            </Form>
          </Modal.Body>
        </Modal>
        {!loginLoading &&
    <Container>
      {error &&
          <Alert variant={"danger"}>{error}</Alert>
      }
      {
        message &&
            <Alert variant={"success"}>{message.message}</Alert>
      }
      <Row>
        <Col
          className="w-25"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/images/user.png" style={{width: "90%"}} />
          <Button style={{marginTop: "0.7rem"}}>Đổi ảnh</Button>
        </Col>
        <Col className="w-75">
          <h2>Thông tin giảng viên</h2>
          <div className="break"/>
          <Form onSubmit={submitHandler} id={"profile-form"}>
            <Form.Group className="account-form-group" controlId="formID">
              <Form.Label>Mã giảng viên:</Form.Label>
              <Form.Control value={id} readOnly={true}/>
            </Form.Group>
            <Form.Group className="account-form-group" controlId="formID">
              <Form.Label>Họ tên:</Form.Label>
              <Form.Control value={fullName} onChange={(e)  => setFullName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="account-form-group" controlId="formID">
              <Form.Label>CMND:</Form.Label>
              <Form.Control value={cmnd} onChange={e => setCmnd(e.target.value)}/>
            </Form.Group>
            <Form.Group className="account-form-group">
              <Form.Label>Giới tính:</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="Nam"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onChange={()  => setGender(1)}
                  checked={gender === 1 && "checked"}
                />
                <Form.Check
                  type="radio"
                  label="Nữ"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  onChange={()  => setGender(0)}
                  checked={gender === 0 && "checked"}
                />
              </Col>
            </Form.Group>
            <Form.Group className="account-form-group">
              <Form.Label>Ngày sinh:</Form.Label>
              <DateTimePicker initialDay={new Date(lecturerInfo.NgaySinh).getDate()}
                              initialMonth={new Date(lecturerInfo.NgaySinh).getMonth()}
                              initialYear={new Date(lecturerInfo.NgaySinh).getFullYear()}/>
            </Form.Group>
          </Form>
          <Button type={"submit"} form={"profile-form"} style={{marginTop: "0.7rem"}}>Cập nhật</Button>
        </Col>
      </Row>
    </Container>
        }
      </>
  );
};

export default TeacherAccount;
