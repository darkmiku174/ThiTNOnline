import React from "react";
import { Link } from "react-router-dom";
import { Card, ProgressBar } from "react-bootstrap";

const BaiThi = ({ ex }) => {
  return (
    <Card className="card-exam" style={{ margin: "1.2rem 0" }}>
      <Card.Body>
        <Link to={`/exams/${ex._id}`}>
          <Card.Title>{ex.CTMH.MonHoc.TenMH}</Card.Title>
        </Link>
        <div className="infor">
          <Card.Text>Thời gian bắt đầu: {ex.ThoiGian}</Card.Text>
          <Card.Text>Ngày: {ex.NgayThi}</Card.Text>
          <Card.Text>Thời lượng: {ex.ThoiLuong}</Card.Text>
        </div>
        <div className="break" />
        <ProgressBar now={60} />
      </Card.Body>
    </Card>
  );
};

export default BaiThi;
