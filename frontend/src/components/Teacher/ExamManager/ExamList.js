import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Alert, Modal, Table} from "react-bootstrap";
import ExamDetail from "./ExamDetail";
import ExamCallendar from "./ExamCallendar";
import {ClipLoader} from "react-spinners";

const ExamList = ({goToExam}) => {
  const dispatch=useDispatch()
  const examList = useSelector((state) => state.examList);
  const {loading, error, exams} = examList;

  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [show, setShow] = useState(false);
  const [examDetails, setExamDetails] = useState({});

  const handleClose=() =>{
    setShow(false)
  }
  const showExmaDetail=(ex)=>{
    setShow(true)
    setExamDetails(ex)
  }
  let temp = [];

  useEffect(() => {
    if (exams != null && exams.length > 0) {
      let endIndex = 10;
      for (let i = 0; i < exams.length; i++) {
        temp.push(exams.slice(i, endIndex));
        i = endIndex;
        endIndex = i + 11;
      }
      setPages(temp);
    }
  }, [exams]);

  return (
    <>
      {
          loading == null || loading || !pages || pages.length === 0 ?
              <div className={"d-flex justify-content-center"}>
              <ClipLoader color={"#2196f3"} size={100} />
              </div>
              :
              error ?
                  <Alert variant={"danger"}>Something wrong happen</Alert>
                  :
                  <>
        <Modal show={show} onHide={handleClose} size={"lg"} >
          <Modal.Header closeButton/>
          <div style={{padding:"1.2rem"}}>
            <ExamCallendar examDetails={examDetails}/>
            <ExamDetail examDetails={examDetails} handleClose={() =>setShow(false)}/>
          </div>
        </Modal>
        <div className={"exam-list"}>
        <Table striped={true} bordered={true}>
        <thead>
        <th>Mã đề</th>
        <th>Ngày thi</th>
        <th>Thời lượng</th>
        <th>Số câu hỏi</th>
        </thead>
        <tbody>
      {pages[currentPage].map((ex) => (
        <tr>
        <td
        className={"text-primary"}
        style={{cursor: "pointer"}}
        onClick={() => showExmaDetail(ex)}
        >
      {ex._id}
        </td>
        <td>{ex.NgayThi ? ex.NgayThi.substring(0, 10) : ""}</td>
        <td>{ex.ThoiLuong ? ex.ThoiLuong : ""}</td>
        <td>{ex.DSCH.length}</td>
        </tr>
        ))}
        </tbody>
        </Table>
      {pages.map((q, index) => (
        <button
        onClick={(e) => setCurrentPage(index)}
        className={`add-exam-table-pagination btn btn-sm mr-2 ${currentPage === index ? "btn-primary" : ""
      }`}
        >
      {index + 1}
        </button>
        ))}
        </div>
                  </>
      }
    </>
  )
}

export default ExamList;
