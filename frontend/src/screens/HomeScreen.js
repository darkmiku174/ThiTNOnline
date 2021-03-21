import React from "react";
import BaiThi from "../components/BaiThi";
import dsBaiThi from "../sample.js";
import { Container } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div className="stHome">
      <Container className="left-column">
        {dsBaiThi.map((baithi) => (
          <BaiThi baithi={baithi} />
        ))}
      </Container>
      <Container className="right-column">
        <div>Hello world</div>
      </Container>
    </div>
  );
};

export default HomeScreen;
