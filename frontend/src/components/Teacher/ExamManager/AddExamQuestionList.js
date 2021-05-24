import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import {Button,Form, Table} from "react-bootstrap";

const AddExamQuestionList = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  {/*Fetch questionList from store(in file store.js) by useSelector*/}
  {/*If you fetch anything from store using useSelector, the component where useSelector is called will render everytime
   the value you fetch changed, because it's state after all, just global*/}
  {/*questionList is questionListReducer, questionListReducer is a function return an object base on action that we
  dispatch*/}
  {/*We've dispatch listQuestion from AddExamModal, so questionListReducer returned an object already*/}
  const questionList = useSelector(state => state.questionList)

  {/*Search destructuring in js to understand this syntax*/}
  {/*I might also use {...object} or [...array], which is also call destructuring*/}
  {/*Base on what we return in questionListReducer, some of these might be "undefined" or null, use "==null" to check if
  something is "undefined" or null*/}
  const {loading, error, questions} = questionList;
    const highlightCurrentPage=(e,index) =>{
      setCurrentPage(index)
    }

  let temp =[]
    useEffect(() =>{
      if(questions.length >0){
        const isMatch = questions.filter(q => q.MaMH === "MH00000001")
        console.log(isMatch)
        let endIndex=10;
        for (let i = 0; i<isMatch.length;i++){
          temp.push(isMatch.slice(i,endIndex))
          i=endIndex;
          endIndex=i+11;
        }
        setPages(temp)
      }
    },[questions])

  {/*if questions is undefined or null so we don't need to do anything else, just return to stop wasted rendering*/}
  if (questions == null || pages.length === 0) {
    return null;
  }

  return (
    <>
      <div className="add-exam-question-list" >
        <Table striped bordered hover>
          <thead>
            <th />
            <th>ID</th>
            <th>Phần hỏi</th>
            <th>Phân loại</th>
          </thead>
          <tbody>
            {
              pages[currentPage].map(q => q.MaMH === "MH00000001" ?
                <tr>
                  <td><Form.Check inline /></td>
                  <td>{q.MaCH}</td>
                  <td>{q.PhanHoi}</td>
                  <td>{q.PhanLoai === 0 ? "Dễ" : q.PhanLoai === 1 ? "Trung bình" : q.PhanLoai === 2 ? "Khó" : ""}</td>
                </tr> : ""
              )
            }
          </tbody>
        </Table>
          <div className={"d-flex justify-content-between"}>
            <div>
        {pages.map((q,index) =>
            <button onClick={e => highlightCurrentPage(e,index)}
                    className={`add-exam-table-pagination btn btn-sm mr-2 ${currentPage === index ? "btn-primary" :""}`}>
              { index+1 }
            </button>)}
            </div>
        <Button className={"ml-4 mb-4"}>Tạo đề thi</Button>
          </div>
      </div>
    </>
  )
}

export default AddExamQuestionList
