import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postSubmittionAction } from "../actions/SubmittionActions";

const exam = JSON.parse(localStorage.getItem("exam"));
const index = exam[0].ThoiGian.indexOf(":");
const hour = parseInt(exam[0].ThoiGian.substring(0, index));
const minutes = parseInt(exam[0].ThoiGian.substring(index + 1));
const submitTime =
  hour * 3600 + minutes * 60 + parseInt(exam[0].ThoiLuong) * 60;
const convertTimeToString = (time) => {
  const hour = time / 3600 >= 1 ? time / 3600 : "00";
  const minutes =
    Math.floor(time / 60) >= 10
      ? Math.floor(time / 60)
      : `0${Math.floor(time / 60)}`;
  const second =
    time - minutes * 60 >= 10 ? time - minutes * 60 : `0${time - minutes * 60}`;
  return hour + ":" + minutes + ":" + second;
};

const Timer = () => {
  const dispatch = useDispatch();
  const currentTime =
    new Date().getHours() * 3600 +
    new Date().getMinutes() * 60 +
    new Date().getSeconds();
  const [time, setTime] = useState(submitTime - currentTime);
  useEffect(() => {
    setTimeout(() => {
      console.log("timeout");
      if (currentTime >= submitTime && currentTime <= submitTime + 1) {
        dispatch(postSubmittionAction());
        return null;
      }
      setTime(convertTimeToString(submitTime - currentTime));
    }, 1000);
  }, [time]);

  return (
    <div className="timer" style={{ fontSize: "2rem" }}>
      {time}
    </div>
  );
};

export default Timer;
