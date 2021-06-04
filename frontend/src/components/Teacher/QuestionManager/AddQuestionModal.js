import React from 'react'
import {Form, Modal} from "react-bootstrap";

const AddQuestionModal = ({show,handleClose}) => {
    const onSubmitHandler = (e)=>{

    }
  return (
    <Modal show={show}
           onHide={handleClose}
           size={"modal-sm modal-lg"}
           className={"add-question-modal"}
           overflow={"visible"}>
      <Modal.Header closeButton>
          <Modal.Title>Thêm câu hỏi</Modal.Title>
      </Modal.Header>
        <Modal.Body>
            <Form id={"add-question-form"} onSubmit={(e) => onSubmitHandler(e)}>
            </Form>
        </Modal.Body>
    </Modal>
  )
}

export default AddQuestionModal

