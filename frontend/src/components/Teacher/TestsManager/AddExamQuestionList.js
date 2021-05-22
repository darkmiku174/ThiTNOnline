import React from 'react'
import {useSelector} from "react-redux";

const AddExamQuestionList = () => {
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

  {/*if questions is undefined or null so we don't need to do anything else, just return to stop wasted rendering*/}
  if (questions == null) {
    return;
  }

  return (
    <>
      <div className="add-exam-question-list">
        <table>
          <thead>
            <th>ID</th>
          </thead>
          <tbody>
            {
              questions.map(q =>
                <tr>
                  <td>{q.MaCH}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AddExamQuestionList

