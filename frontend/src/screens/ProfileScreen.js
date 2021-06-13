import React, {useEffect} from "react";
import students from "../studentSample";
import {Container, Col, Row, Form, Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getStudentSubmittionAction} from "../actions/SubmittionActions";

const ProfileScreen = () => {
  const dispatch=useDispatch()
  const {loading,error,studentInfo} = useSelector(state=>state.studentLogin)
    const {loading:submittionLoading,error:submittionError,submittions} = useSelector(state => state.studentSubmittions)
    console.log(submittions)
    useEffect(() => {
        dispatch(getStudentSubmittionAction())
    }, []);

  return (
    <Container className="normal-container" fluid>
      <Row className="parent-row">
        <Col className="right child-col">
          <Row
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#2196f3",
              border: "none",
              borderRadius: "0.625rem 0 0 0.625rem",
              height: "100%",
            }}
            className="child-row"
          >
            <div style={{ width: "150px"}}>
              <img src={studentInfo.AnhDaiDien} style={{ width: "100%", borderRadius:"50%" }} />
            </div>
            <Button variant="light" style={{ marginTop: "1.2rem" }}>
              Đổi ảnh
            </Button>
            <div className="infor" style={{ marginTop: "2.7rem" }}>
              <p>MSSV: {studentInfo._id}</p>
                <p>CMND:{studentInfo.CMND}</p>
              <p>Họ & Tên: {studentInfo.HoTen}</p>
              <p>Giới tính: {studentInfo.GioiTinh}</p>
              <p>Ngày sinh: {new Date(studentInfo.NgaySinh).toLocaleDateString()}</p>
            </div>
          </Row>
        </Col>
        <Col
          className="left child-col"
          style={{
            backgroundColor: "white",
            borderRadius: "0rem 0.625rem 0.625rem 0",
          }}
        >
          <Row
            style={{
              display: "fex",
              flexDirection: "column",
              borderRadius: "0 0.625rem 0.625rem 0",
              height: "100%",
            }}
            className="child-row"
          >
            <div>
                <div className={"mb-2"} style={{fontSize:"1.2rem",fontWeight:"500"}}>Các bài thi đã hoàn thành</div>
                {submittions && submittions.map(s =>
                    <Card>
                        <Card.Body>
                            <Card.Title>{s.De.CTMH.MonHoc.TenMH}</Card.Title>
                            <div>
                                <Card.Text>Tổng số câu hỏi: {s.De.DSCH.length}</Card.Text>
                                <Card.Text>Số câu hoàn thành: {s.DapAnSV.length}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
