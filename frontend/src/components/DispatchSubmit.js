import React, {useEffect} from "react";
import {postSubmittionAction} from "../actions/SubmittionActions";

const DispatchSubmit = ({exam}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const index = exam[0].ThoiGian.indexOf(":");
      const hour = parseInt(exam[0].ThoiGian.substring(0, index));
      const minutes = parseInt(exam[0].ThoiGian.substring(index + 1));
      const submitTime = hour * 60 + minutes + parseInt(exam[0].ThoiLuong);
      const currentTime =
        parseInt(new Date().getHours()) * 60 +
        parseInt(new Date().getMinutes());
      if (submitTime > currentTime && currentTime < submitTime + 1) {

      }
    });
  }, [input]);
  return <div></div>;
};

export default DispatchSubmit;
