import React, {useEffect} from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {subjectListAction} from '../../../actions/SubjectActions'
import {getQuestionListBySubjectAction} from "../../../actions/QuestionActions";
import {CREATE_EXAM_RESET} from '../../../constants/ExamConstants'

const AddExamSubjectList = () => {
  const dispatch = useDispatch();
  const {loading, error, subjectDetailList} = useSelector(
    (state) => state.subjectDetailList
  );

  const {loading: subjectLoading, error: subjectError, subjects} = useSelector(state => state.subjectList)

  const getQuestionList = (value) => {
    dispatch({type: "ADD_TEMP_EXAM", payload: {DSCH: []}})
    dispatch(getQuestionListBySubjectAction(value));
  };

  const changeClassHandler = () => {
    dispatch({type: "ADD_TEMP_EXAM", payload: {DSCH: []}})
  }

  useEffect(() => {
    if (subjectDetailList != null) {
      dispatch(getQuestionListBySubjectAction(subjectDetailList[0].MonHoc._id));
      dispatch(subjectListAction())
    }

  }, [dispatch]);

  if (subjectDetailList == null || subjects == null) {
    return null;
  }
  return (
    <>
      <div className="add-exam-subject-list mb-4 w-50" style={{marginRight: "1.2rem"}}>
        <Form.Group>
          <Form.Label className="form-label" htmlFor={"subject-select"}>Môn học</Form.Label>
          <Form.Control
            id={"subject-select"}
            as={"select"}
            custom={true}
            onChange={(e) => getQuestionList(e.target.value)}
          >
            {subjects.map((sj) => (
              <option value={sj._id} key={sj._id}>{sj.TenMH}</option>
            ))}
          </Form.Control>
          <Form.Group>
          </Form.Group>
          <Form.Label className="form-label" htmlFor={"subject-details-select"}>Lớp học</Form.Label>
          <Form.Control
            id={"subject-details-select"}
            as={"select"} custom={true}
            onChange={e => changeClassHandler(e.target.value)}>
            {subjectDetailList.map((sd => (<option value={sd._id} key={sd._id}>{sd._id}</option>
            )))}
          </Form.Control>
        </Form.Group>
      </div>
    </>
  );
};

export default AddExamSubjectList;
