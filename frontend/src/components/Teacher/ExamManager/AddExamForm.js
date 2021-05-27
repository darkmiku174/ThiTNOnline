import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import Time from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddExamForm = () => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState(new Date().toLocaleTimeString())
  const [duration, setDuration] = useState(15)
  const {tempExam} = useSelector(state => state.tempExam)

  useEffect(() => {
    dispatch({
      type: "ADD_TEMP_EXAM",
      payload: {
        NgayThi: startDate.toISOString(),
        ThoiGian: startTime,
        ThoiLuong: duration
      }
    })
  }, [startDate, startTime])

  return (
    <Form className="add-exam-form">
      <Form.Group className={"w-25 mb-4"}>
        <Form.Label>Mã đề</Form.Label>
        <Form.Control type={"input"} />
      </Form.Group>
      <Form.Group className={"mb-4"}>
        <p className={"mb-2"}>Ngày thi</p>
        <DatePicker id={"add-exam-datetimepicker"}
          selected={startDate}
          onChange={date => setStartDate(date)} />

      </Form.Group>
      <Form.Group>
        <p className={"mb-2"}>Thời gian bắt đầu</p>
        <DatePicker
          selected={startDate}
          onChange={date => setStartTime(date.toLocaleTimeString())}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </Form.Group>
      <Form.Group className={"w-25"}>
        <Form.Label>Thời lượng</Form.Label>
        <Form.Control as={"select"} custom={true} onChange={e => setDuration(e.target.value)}>
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
