import React, {useEffect, useState} from 'react'

const FillInBlankQuestion = ({question}) => {
  const [mergedQuestion, setMergedQuestion] = useState("_____");
  const index = question.PhanHoi.indexOf("@@");
  // useEffect(() => {
  //   const abc ="question"
  //   let blank=""
  //   switch (question.DapAn){
  //     case "A":
  //       blank=question.CauA.replaceAll(/[^ ]/g,"_")
  //           break;
  //     case "B":
  //       blank=question.CauB.replaceAll(/[^ ]/g,"_")
  //           break;
  //     case "C":
  //       blank=question.CauC.replaceAll(/[^ ]/g,"_")
  //           break;
  //     default:
  //       blank=question.CauD.replaceAll(/[^ ]/g,"_")
  //           break;
  //   }
  //
  //   setMergedQuestion(blank)
  // }, [question]);

  return (
    <h2>{question.PhanHoi.slice(0,index)}<span style={{letterSpacing:"0.3rem"}}>{mergedQuestion} </span> { question.PhanHoi.slice(index+2,question.length) }</h2>
  )
}

export default FillInBlankQuestion

