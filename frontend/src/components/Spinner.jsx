import React, { useState, useRef } from "react";

function NumberSpinner({ value, onChange }) {
  const handleChange = (e) => {
    let val = Number(e.target.value);
    if (val < 1) val = 1;
    if (val > 100) val = 100;
    onChange(val);
  };

  return (
    <input
      type="number"
      min={1}
      max={100}
      value={value}
      onChange={handleChange}
      style={{ width: 80, textAlign: "center" }}
    />
  );
}