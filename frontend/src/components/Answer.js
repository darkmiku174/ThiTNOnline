import React from "react";
import { InputGroup, Form, FormControl } from "react-bootstrap";

const Answer = ({ answer }) => {
  const an = `${answer.name}: ${answer.answer}`;
  console.log(an);
  return (
    <div className="answer" style={{ margin: "1.2rem 0", width: "100%" }}>
      <InputGroup>
        <InputGroup.Prepend
          style={{
            width: "5%",
            height: "40px",
            display: "flex",
            backgroundColor: "#e9ecef",
            justifyContent: "center",
          }}
        >
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        </InputGroup.Prepend>
        <div
          style={{
            height: "40px",
            padding: "10px",
            border: "1px solid #e9ecef",
            width: "95%",
          }}
        >
          <p>{an}</p>
        </div>
      </InputGroup>
    </div>
  );
};

export default Answer;
