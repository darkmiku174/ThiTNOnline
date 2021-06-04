import React from 'react'
import {useSelector} from "react-redux";

const TotalQuestion = () => {
    const {tempExam} = useSelector((state) => state.tempExam);
  return (
    <div className="total-question border rounded mb-4 p-3 w-50" >
      <div>
          <div className={"d-flex"}>
            <p>Tổng câu hỏi:  </p>{" "}
            <p>{tempExam ? tempExam.DSCH.length:0}</p>
          </div>
      </div>
    </div>
  )
}

export default TotalQuestion

