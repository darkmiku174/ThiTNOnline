import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {postSubmittionAction} from "../actions/SubmittionActions";
import {withRouter} from 'react-router-dom'

const Timer = ({history}) => {
  const exam = JSON.parse(localStorage.getItem("exam"));
  const index = exam[0].ThoiGian.indexOf(":");
  const hour = parseInt(exam[0].ThoiGian.substring(0, index));
  const minutes = parseInt(exam[0].ThoiGian.substring(index + 1));
  const submitTime =
    hour * 3600 + minutes * 60 + parseInt(exam[0].ThoiLuong) * 60;
  const convertTimeToString = (time) => {
    const hour = Math.floor(time / 3600) >= 1 ? Math.floor(time / 3600) : "00";
    const minutes =
      Math.floor(time / 60) >= 10
        ? Math.floor(time / 60) - hour * 60
        : `0${Math.floor(time / 60) - hour * 60}`;
    const second =
      time - (minutes * 60 + hour * 3600) >= 10 ? time - (minutes * 60 + hour * 3600) : `0${time - (minutes * 60 + hour * 3600)}`;
    return hour + ":" + minutes + ":" + second;
  };
  const dispatch = useDispatch();
  const currentTime =
    new Date().getHours() * 3600 +
    new Date().getMinutes() * 60 +
    new Date().getSeconds();
  const [time, setTime] = useState(submitTime - currentTime);
  useEffect(() => {
    setTimeout(() => {
      if (currentTime >= submitTime && currentTime <= submitTime + 1) {
        dispatch(postSubmittionAction());
        history.push("/exams");
        return null;
      }
      setTime(convertTimeToString(submitTime - currentTime));
    }, 1000);
  }, [time]);

  if (!exam) {
    return null
  }
  return (
    <div className="timer" style={{fontSize: "2rem"}}>
      {time}
    </div>
  );
};

export default withRouter(Timer);
