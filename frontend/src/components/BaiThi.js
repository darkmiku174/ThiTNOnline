import React from "react";
import {Link} from "react-router-dom";
import {Card, ProgressBar} from "react-bootstrap";

const BaiThi = ({baithi}) => {
  return (
    <Card className="card-exam" style={{margin: "1.2rem 0"}}>
      <Card.Body>
        <Link to={`/exams/details/60a105b83d2d3d5f9cdec4f1`}>
          <Card.Title>{baithi.name}</Card.Title>
        </Link>
        <div className="infor">
          <Card.Text>Thời gian bắt đầu: {baithi.start}</Card.Text>
          <Card.Text>Ngày: {baithi.date}</Card.Text>
          <Card.Text>Thời lượng: {baithi.time}</Card.Text>
        </div>
        <div className="break"></div>
        <ProgressBar now={60} />
      </Card.Body>
    </Card>
  );
};

export default BaiThi;
