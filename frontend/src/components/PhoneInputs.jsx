import React, { useState } from "react";

const PhoneInputs = ({ hint }) => {
  // State lưu danh sách phone inputs, khởi đầu 1 input rỗng
  const [phones, setPhones] = useState([""]);

  // Thêm input mới
  const addInput = () => {
    setPhones([...phones, ""]);
  };

  // Xóa input tại vị trí index nếu còn nhiều hơn 1 input
  const removeInput = (index) => {
    if (phones.length === 1) {
      alert(`Phải có ít nhất 1 ${hint}!`);
      return;
    }
    setPhones(phones.filter((_, i) => i !== index));
  };

  // Cập nhật giá trị input tại index
  const updateInput = (index, value) => {
    const newPhones = [...phones];
    newPhones[index] = value;
    setPhones(newPhones);
  };

  // CSS inline, bạn có thể chuyển sang file CSS riêng nếu thích
  const buttonStyle = {
    maxWidth: 30,
    height: 30,
    background: "#747474",
    border: "none",
    cursor: "pointer",
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    fontSize: 10,
    fontWeight: 700,
    color: "#fff",
  };

  return (
    <div id="phone-container" style={{ maxWidth: 400 }}>
      {/* Tiêu đề và nút + */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 8,
          gap: 8,
        }}
      >
        <label htmlFor="contact_info" style={{ flex: 1 }}>
          {hint}
        </label>
        <button
          type="button"
          style={{ ...buttonStyle, flex: 1 }}
          onClick={addInput}
          aria-label="Thêm số điện thoại"
        >
          <i className="fa-solid fa-plus" style={iconStyle}></i>
        </button>
      </div>

      {/* Danh sách input */}
      <div
        id="phone-inputs"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginBottom: 8,
        }}
      >
        {phones.map((phone, index) => (
          <div
            key={index}
            className="phone-input-wrapper"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              type="text"
              name={`contact_info_${index + 1}`}
              placeholder={`${hint} ${index + 1}`}
              value={phone}
              required
              style={{ flex: 1, paddingRight: 30 }}
              onChange={(e) => updateInput(index, e.target.value)}
            />
            <button
              type="button"
              className="btn-remove phone-plus-minus-button"
              style={{ ...buttonStyle, marginLeft: 4, width: 25, height: 25 }}
              onClick={() => removeInput(index)}
              aria-label={`Xóa ${hint} số ${index + 1}`}
            >
              <i className="fa-solid fa-minus" style={iconStyle}></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneInputs;

