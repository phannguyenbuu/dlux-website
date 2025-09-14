import React, { useState, useRef, useEffect } from "react";

export default function SpinnerClock({ size = 150, onChange }) {
  const [angle, setAngle] = useState(0); // Góc tính theo độ 0-360
  const knobRef = useRef(null);
  const dragging = useRef(false);

  // Hàm tính góc từ toạ độ chuột so với tâm knob
  const getAngleFromPoint = (x, y, centerX, centerY) => {
    const dx = x - centerX;
    const dy = y - centerY;
    let rad = Math.atan2(dy, dx); // radian
    let deg = rad * (180 / Math.PI); // đổi sang độ
    deg = deg < 0 ? deg + 360 : deg; // chuẩn hóa góc từ 0-360 độ
    return deg;
  };

  const handleMouseDown = (e) => {
    dragging.current = true;
    e.preventDefault();
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const rect = knobRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const newAngle = getAngleFromPoint(e.clientX, e.clientY, centerX, centerY);
    setAngle(newAngle);
    if (onChange) onChange(newAngle);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Tính vị trí kim (độ dài, góc)
  const needleLength = size * 0.4;
  // Góc xoay kim (trừ 90 độ để trùng trục dọc)
  const rotation = angle - 90;

  return (
    <svg
      ref={knobRef}
      width={size}
      height={size}
      style={{ userSelect: "none", cursor: "pointer" }}
      onMouseDown={handleMouseDown}
    >
      {/* Vòng tròn nền */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={(size / 2) * 0.9}
        stroke="grey"
        strokeWidth="5"
        fill="#f0f0f0"
      />
      {/* Kim */}
      <line
        x1={size / 2}
        y1={size / 2}
        x2={size / 2 + needleLength * Math.cos((rotation * Math.PI) / 180)}
        y2={size / 2 + needleLength * Math.sin((rotation * Math.PI) / 180)}
        stroke="grey"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Gốc kim */}
      <circle cx={size / 2} cy={size / 2} r="8" fill="grey" />
    </svg>
  );
}
