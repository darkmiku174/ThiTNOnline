import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Form, Table} from "react-bootstrap";

const ExamList = ({goToExam}) => {
  const examList = useSelector((state) => state.examList);
  const {loading, error, exams} = examList;
  console.log(exams);

  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
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

  if (exams == null || pages.length === 0) return null;

  return (
    <>
      <div className={"exam-list"}>
        <Table striped={true} bordered={true}>
          <thead>
            {/*<th/>*/}
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
                  onClick={(e) => goToExam(ex)}
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
  );
};

export default ExamList;
