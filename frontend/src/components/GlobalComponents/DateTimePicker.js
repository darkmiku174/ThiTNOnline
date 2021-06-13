import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const arr = (month, year) => {
  return new Array(31)
    .fill("")
    .map((v, i) => new Date(year, month - 1, i + 1))
    .filter((v) => v.getMonth() === month - 1);
};

const DateTimePicker = ({getISODate,initialDay,initialMonth,initialYear}) => {
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [month, setMonth] = useState(initialMonth? initialMonth : new Date().getMonth());
  const yearList = [];
  const [year, setYear] = useState(initialYear ? initialYear : new Date().getFullYear());
  for (var i = 1950; i <= new Date().getFullYear(); i++) {
    yearList.push(i);
  }

  const [days, setDays] = useState(arr(month, year));
  const [selectedDate, setSelectedDate] = useState(initialDay ? initialDay : new Date().getDate());

  return (
    <div className="datetimepicker">
      <Form.Control
        as="select"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      >
        {days.map((x, i) => (
          <option key={i} value={i}>
            {i + 1}
          </option>
        ))}
      </Form.Control>
      <Form.Control
        as="select"
        value={month}
        onChange={(e) => {
          setMonth(e.target.value);
          setDays(arr(e.target.value, year));
        }}
      >
        {monthList.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </Form.Control>
      <Form.Control
        as="select"
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
          setDays(arr(month, e.target.value));
        }}
      >
        {yearList.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </Form.Control>
    </div>
  );
};

export default DateTimePicker;
