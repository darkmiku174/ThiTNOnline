import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddQuestion = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" className="add-question">
      <Modal.Header closeButton>
        <Modal.Title>Add Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            style={{ backgroundColor: "#FAFAFA" }}
            className="question"
          >
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the question here"
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Answser A</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the question here"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the question here"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the question here"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the question here"
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ padding: "0.7rem 10rem" }}>
        <Button className="btn btn-block">Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddQuestion;
