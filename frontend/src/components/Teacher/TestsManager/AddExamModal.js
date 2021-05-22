import React, {useEffect} from 'react'
import {Modal} from "react-bootstrap";
import AddExamForm from "./AddExamForm";
import {listQuestion} from "../../../actions/QuestionActions";
import {useDispatch} from "react-redux";
import AddExamQuestionList from "./AddExamQuestionList";

const AddExamModal = ({show,handleClose}) => {
    {/*useDispatch is a hook from react-redux which reference to dispatch function in redux store*/}
    {/*Use this whenever you want to trigger an action*/}
    const dispatch = useDispatch()

    {/*useEffect run after this component and it's childrens being render include the childrens's useEffect*/}
    {/*useEffect run everytime the second parameter changed which will then re-render component*/}
    useEffect(() => {
        {/*Go to file AddExamQuestionList to see how I use useSelector()*/}
        {/*Go to file QuestionActions to know what is happening when I dispatch this action*/}
        dispatch(listQuestion());
        {/*return .... => code in return will run first on the next render if it occur*/}
    }, [dispatch]);

  return (
      <>
        <Modal show={show} onHide={handleClose} className="add-exam-modal" size={"lg"}>
            <Modal.Header closeButton={handleClose}>
                <Modal.Title>Thêm đề thi</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddExamForm />
                <AddExamQuestionList/>
            </Modal.Body>
        </Modal>
      </>
  )
}

export default AddExamModal
