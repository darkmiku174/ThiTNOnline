import React, {useState} from 'react'
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import DateTimePicker from "../../GlobalComponents/DateTimePicker";
import "react-datepicker/dist/react-datepicker.css";

const AddExamForm = () => {
    const [startDate,setStartDate] = useState(new Date())
  return (
    <Form className="add-exam-form">
      <Form.Group className={"w-25 mb-4"}>
          <Form.Label>Mã đề</Form.Label>
          <Form.Control type={"input"}/>
      </Form.Group>
        <Form.Group className={"mb-4"}>
            <p className={"mb-2"}>Ngày thi</p>
            <DatePicker id={"add-exam-datetimepicker"} selected={startDate} onChange={date => setStartDate(date)} />
        </Form.Group>
        <Form.Group className={"w-25"}>
            <Form.Label>Thời lượng</Form.Label>
            <Form.Control as={"select"} custom={true}>
                <option value={15}>15'</option>
                <option value={35}>30'</option>
                <option value={45}>45'</option>
                <option value={60}>60'</option>
                <option value={75}>75'</option>
                <option value={90}>90'</option>
            </Form.Control>
        </Form.Group>
    </Form>
  )
}

export default AddExamForm

