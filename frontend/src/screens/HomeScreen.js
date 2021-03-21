import React from "react";
import BaiThi from "../components/BaiThi";
import dsBaiThi from "../examSample.js";
import dsHocSinh from "../studentSample.js";
import { Container, Card } from "react-bootstrap";

const HomeScreen = () => {
  const hocsinh = dsHocSinh.find((hocsinh) => hocsinh.id === "1");
  return (
    <div className="stHome">
      <div className="left-column">
        <div className="row">
          {dsBaiThi.map((baithi) => (
            <BaiThi baithi={baithi} />
          ))}
        </div>
      </div>
      <div className="right-column">
        <div className="row">
          <Card className="student-exam-infor" style={{ boxShadow: "none" }}>
            <Card.Img
              src="/images/user.png"
              style={{ width: "150px", margin: "auto" }}
              className="text-center"
            />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>{hocsinh.name}</Card.Title>
              <Card.Text>SBD: {hocsinh.sbd}</Card.Text>
              <Card.Text>Lớp: {hocsinh.class}</Card.Text>
            </Card.Body>
            <div className="break"></div>
            <Card.Text>
              Số bài thi đã hoàn thành: {hocsinh.testComplete}
            </Card.Text>
            <Card.Text>Vắng: {hocsinh.testNotComplete}</Card.Text>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
