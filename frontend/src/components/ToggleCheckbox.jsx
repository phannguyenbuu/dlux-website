import React, { useState } from 'react';

const ToggleCheckbox = ({ title, option_0 = "", option_1 = "" }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div
      style={{
        paddingLeft: 20,
        display: "inline-block",
        whiteSpace: "nowrap",
        position: "relative",
        width: 110,
        height: 24,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        style={{
          opacity: 0,
          width: 110,   // Bằng hoặc lớn hơn vùng chứa
          height: 24,
          position: "absolute",
          top: 0,
          left: 0,
          cursor: "pointer",
          margin: 0,
          zIndex: 2,
        }}
      />
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: checked ? "#4caf50" : "#ccc",
          borderRadius: 24,
          transition: "0.4s",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
          color: "white",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        <span
          style={{
            marginLeft: 20,
            opacity: checked ? 0 : 1,
            transition: "opacity 0.4s",
          }}
        >
          {option_0}
        </span>
        <span
          style={{
            opacity: checked ? 1 : 0,
            transform: checked ? 'translateX(-50px)' : 'translateX(0)',
            transition: 'opacity 0.4s, transform 0.4s',
            display: 'inline-block', // để transform có hiệu lực đúng
          }}
        >
          {option_1}
        </span>
      </span>
      <span
        style={{
          position: "absolute",
          height: 18,
          width: 18,
          left: checked ? 90 : 4,
          bottom: 3,
          backgroundColor: "white",
          borderRadius: "50%",
          transition: "left 0.4s",
          zIndex: 1,
        }}
      />
      <span
        style={{
          position: "relative",
          marginLeft: 10,
          userSelect: "none",
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default ToggleCheckbox;
