import React, {useState, useEffect} from 'react'
import {Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExamCallendar = ({examDetails}) => {
  const [startDate, setStartDate] = useState(new Date())
  const [startTime, setStartTime] = useState(new Date())
  const [duration, setDuration] = useState(0)
    let time = new Date().getMilliseconds()

    useEffect(() => {
        if(examDetails.NgayThi){
            setStartDate(new Date(examDetails.NgayThi))
        }
        if(examDetails.ThoiLuong){
            setDuration(examDetails.ThoiLuong)
        }
        if(examDetails.ThoiGian){
            const hour = parseInt(examDetails.ThoiGian.split(":")[0])
            const minutes = parseInt(examDetails.ThoiGian.split(":")[1])
            time = (hour*60+minutes)*60000
            setStartTime(new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),hour,minutes))
        }
    }, [examDetails]);

  return (
    <Form className="add-exam-form border p-3 mb-3" style={{borderRadius:"0.3rem"}}>
        <div className={"d-flex"} style={{gridGap:"0.6rem"}}>
      <Form.Group className={"w-50 mb-4"}>
        <Form.Label>Mã đề</Form.Label>
        <Form.Control value={examDetails._id} type={"input"} readOnly/>
      </Form.Group>
        <Form.Group className={"w-50"}>
            <Form.Label>Tên môn học</Form.Label>
            <Form.Control value={examDetails.CTMH.MonHoc.TenMH} readOnly/>
        </Form.Group>
        </div>
        <div className={"d-flex"} style={{gridGap:"0.6rem"}}>
      <Form.Group className={"w-50 mb-4"}>
        <p className={"mb-2"}>Ngày thi</p>
        <DatePicker id={"add-exam-datetimepicker"}
          selected={startDate}
                    readOnly
        />

      </Form.Group>
      <Form.Group className={"w-50"}>
        <p className={"mb-2"}>Thời gian bắt đầu</p>
        <DatePicker
          selected={startTime}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          readOnly
        />
      </Form.Group>
        </div>
      <Form.Group className={"w-25"}>
        <Form.Label>Thời lượng</Form.Label>
        <Form.Control type={"text"} value={`${duration}'`} readOnly/>
      </Form.Group>
    </Form>
  )
}

export default ExamCallendar
