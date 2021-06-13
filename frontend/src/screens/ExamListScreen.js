import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import BaiThi from "../components/BaiThi";
import {Container, Row, Col, Card, Alert} from "react-bootstrap";
import { getExamListByStudentAction } from "../actions/ExamActions";

const ExamListScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, exams } = useSelector(
    (state) => state.examListByStudent
  );
  const [temp,setTemp] = useState([])
    if(temp.length>0){
        localStorage.setItem("temp",JSON.stringify(temp))
    }else{
        localStorage.removeItem("submittion")
    }

    const {studentInfo} = useSelector(state => state.studentLogin)

    let o=[]
    useEffect(() => {
      if(studentInfo && loading == null){
        dispatch(getExamListByStudentAction());
      }

      if(exams){
        exams.forEach(function(ex){
            const hour = ex.ThoiGian.split(":")[0]
            const minutes = ex.ThoiGian.split(":")[1]
            const currentHour = new Date().getHours()
            const currentMinutes = new Date().getMinutes()
            const currentTime = currentHour*60+currentMinutes
            const time = parseInt( hour )*60+parseInt( minutes )
            if(currentTime - time <= ex.ThoiLuong && currentTime -time >=0){
                o.unshift({ ...ex,active:1 })
            }else{
                o.push({ ...ex,active:0 })
            }
        })
          console.log(exams)
          console.log(o)
          setTemp(o)
      }
  }, [dispatch,exams]);

  return (
    <Container className="normal-container" fluid>
      {!studentInfo ?
          <Alert variant={"danger"} className={"mt-4"}>
            Vui lòng đăng nhập để làm bài kiểm tra
          </Alert>
         :
      <Row className="parent-row">
        <Col className="left child-col">
          <Row className="exam-list child-row">
            {
              !exams || exams.length === 0 ?
                  <Alert variant={"warning"}>
                    Hôm nay không có bài thi
                  </Alert>
                  :
              temp.map((ex) => {
              if(ex.active===1){
                return <BaiThi ex={ex} />
              }
              return <BaiThi ex={ex} disabled/>
            })}
          </Row>
        </Col>
        <Col className="right child-col">
          <Row className="child-row">
            <Card
              className="student-exam-infor"
              style={{
                boxShadow: "none",
                width: "100%",
              }}
            >
              <Card.Img
                src="/images/user.png"
                style={{ width: "150px", margin: "auto" }}
                className="text-center"
              />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>{studentInfo.HoTen}</Card.Title>
                <Card.Text>SBD: {studentInfo._id}</Card.Text>
              </Card.Body>
              {/*<div className="break"></div>*/}
              {/*<Card.Text>*/}
              {/*  Số bài thi đã hoàn thành: {hocsinh.testComplete}*/}
              {/*</Card.Text>*/}
              {/*<Card.Text>Vắng: {hocsinh.testNotComplete}</Card.Text>*/}
            </Card>
          </Row>
        </Col>
      </Row>
      }
    </Container>
  );
};

export default ExamListScreen;
