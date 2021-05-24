import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import {Form, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import ExamDetail from "./ExamDetail";

const ExamList = () => {
  const examList = useSelector(state => state.examList)
  const {loading, error, exams} = examList

  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [mode, setMode] = useState(0);
  const [detail, setDetail] = useState("");
  let temp=[]

  const goToDetail =(id) =>{
    setMode(1)
    setDetail(id);
  }

  useEffect(() =>{
    if(exams != null && exams.length > 0){
      let endIndex =10;
        for (let i =0; i<exams.length;i++){
          temp.push(exams.slice(i,endIndex))
          i=endIndex;
          endIndex=i+11
        }
        setPages(temp)
        console.log(temp)
    }
  },[exams])

  if (exams == null || pages.length===0) return null

  return (
      <>
        {mode === 0?
    <div className={"exam-list"}>
      <Table striped={true} bordered={true}>
        <thead>
          {/*<th/>*/}
          <th>Mã đề</th>
          <th>Câu hỏi</th>
          <th>Thời lượng</th>
          <th>Số câu hỏi</th>
        </thead>
        <tbody>
          {pages[currentPage].map(ex =>
            <tr>
              <td className={"text-primary"}
                  style={{cursor:"pointer"}}
                  onClick={e => goToDetail(ex._id)}>{ex.MaDe}</td>
              <td>{ex.NgayGioThi}</td>
              <td>{ex.ThoiLuong}</td>
              <td/>
            </tr>
          )}
        </tbody>
      </Table>

      {pages.map((q,index) =>
          <button onClick={e => setCurrentPage(index)}
                  className={`add-exam-table-pagination btn btn-sm mr-2 ${currentPage === index ? "btn-primary" :""}`}>
            { index+1 }
          </button>)}
    </div>
        : <ExamDetail id={detail}/>}
      </>
  )
}

export default ExamList

