import { BorderAllRounded } from "@mui/icons-material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DateTimePicker.css';

const DateTimePicker = ({...props}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (date) => {
    setStartDate(date);
    setIsOpen(false); // đóng picker sau khi chọn
  };

  return (
    <div className="datetime-picker-container"  style={{width: 'calc(100% - 20px)', display:'flex', flexDirection:'row'}}>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        showTimeSelect
        dateFormat="Pp"
        open={isOpen}
        timeIntervals={5}
        onClickOutside={() => setIsOpen(false)}
        style={{fontSize: 16, height: 30,  borderRadius: 5}}
      />
      <button style={{...props.buttonStyle, zIndex: 99, maxWidth:60, marginLeft: 50}} onClick={() => setIsOpen(!isOpen)}>
        ...
      </button>
    </div>
  );
};

export default DateTimePicker;
