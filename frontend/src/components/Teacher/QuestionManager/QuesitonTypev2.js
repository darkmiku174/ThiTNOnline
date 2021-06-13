import React from 'react'
import {Form} from "react-bootstrap"
import BasicQuestion from "./BasicQuestion";
import FillInBlankQuestion from "./FillInBlankQuestion";

const QuesitonTypev2 = ({questionType,phanHoi, dapAn, cauA, cauB, cauC, cauD, dsDapAn, onChangeHandler}) => {
  console.log(cauA)
  return (
    <Form.Group className={"left-form parent-group"}>
        {
            questionType === 0
               ? <BasicQuestion phanHoi={phanHoi} dapAn={dapAn}  dsDapAn={dsDapAn} onChangeHandler={onChangeHandler}/>
               : <FillInBlankQuestion phanHoi={phanHoi} dapAn={dapAn} cauA={cauA} cauB={cauB} cauC={cauC} cauD={cauD} dsDapAn={dsDapAn} onChangeHandler={onChangeHandler}/>
        }
    </Form.Group>
  )
}

export default QuesitonTypev2

