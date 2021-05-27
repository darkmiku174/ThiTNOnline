import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionListBySubjectAction } from "../../../actions/QuestionActions";

const AddExamSubjectList = () => {
  const dispatch = useDispatch();
  const { loading, error, subjectDetailList } = useSelector(
    (state) => state.subjectDetailList
  );
  console.log(subjectDetailList);

  const getQuestionList = (value) => {
    console.log(value);
    dispatch(getQuestionListBySubjectAction(value));
  };

  useEffect(() => {
    if (subjectDetailList != null) {
      dispatch(getQuestionListBySubjectAction(subjectDetailList[0].MonHoc._id));
    }
  }, [dispatch]);

  if (subjectDetailList == null) {
    return null;
  }
  return (
    <>
      <div className="add-exam-subject-list">
        <Form.Control
          as={"select"}
          custom={true}
          onChange={(e) => getQuestionList(e.target.value)}
        >
          {subjectDetailList.map((sd) => (
            <option value={sd.MonHoc._id}>{sd.MonHoc.TenMH}</option>
          ))}
        </Form.Control>
      </div>
    </>
  );
};

export default AddExamSubjectList;
