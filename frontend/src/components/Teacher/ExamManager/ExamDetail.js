import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {createExamAction, examAction} from "../../../actions/ExamActions";
import AddExamForm from "./AddExamForm";
import AddExamQuestionList from "./AddExamQuestionList";
import AddExamSubjectList from "./AddExamSubjectList";
import {Button, Form, Table} from "react-bootstrap";

const ExamDetail = ({examDetails,handleClose}) => {
    console.log(examDetails)
  // const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(0);
  // const [pages, setPages] = useState([]);
  //
  //
  // const highlightCurrentPage = (e, index) => {
  //   setCurrentPage(index);
  // };
  //
  // const temp=[]
  // useEffect(() => {
  //   if (questions != null && questions.length > 0) {
  //     let endIndex = 10;
  //     for (let i = 0; i < questions.length; i++) {
  //       temp.push(questions.slice(i, endIndex));
  //       i = endIndex;
  //       endIndex = i + 11;
  //     }
  //     setPages(temp);
  //   }
  // }, [questions]);
  //
  // if (questions == null || pages.length === 0) {
  //   return null;
  // }

  return (
      <>
        {/*<div className="add-exam-question-list">*/}
        {/*  <Table striped bordered hover>*/}
        {/*    <thead>*/}
        {/*    <th>ID</th>*/}
        {/*    <th>Phần hỏi</th>*/}
        {/*    <th>Phân loại</th>*/}
        {/*    </thead>*/}
        {/*    <tbody>*/}
        {/*    {pages[currentPage].map((q, index) => (*/}
        {/*        <tr key={`tr-${currentPage}${index}`}>*/}
        {/*          <td>{q._id}</td>*/}
        {/*          <td>{q.PhanHoi}</td>*/}
        {/*          <td>*/}
        {/*            {q.PhanLoai === 0*/}
        {/*                ? "Dễ"*/}
        {/*                : q.PhanLoai === 1*/}
        {/*                    ? "Trung bình"*/}
        {/*                    : q.PhanLoai === 2*/}
        {/*                        ? "Khó"*/}
        {/*                        : ""}*/}
        {/*          </td>*/}
        {/*        </tr>*/}
        {/*    ))}*/}
        {/*    </tbody>*/}
        {/*  </Table>*/}
        {/*  <div className={"d-flex justify-content-between"}>*/}
        {/*    <div>*/}
        {/*      {pages.map((q, index) => (*/}
        {/*          <button*/}
        {/*              onClick={(e) => highlightCurrentPage(e, index)}*/}
        {/*              className={`add-exam-table-pagination btn btn-sm mr-2 ${currentPage === index ? "btn-primary" : ""*/}
        {/*              }`}*/}
        {/*          >*/}
        {/*            {index + 1}*/}
        {/*          </button>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </>
  );
};

export default ExamDetail;
