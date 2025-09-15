import { TextField, Button, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { CenterBox, StyledButton } from "./TitlePanel";
import CommentDialog,{ConfirmDialog} from "./CommentDialog";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    nickname: "",
    address: "",
    phoneNumber: "",
    description: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // e.preventDefault();

    // Kiểm tra các trường quan trọng
    if (!formData.fullName.trim()) {
      setStatus("Please enter your full name.");
      return false;
    }

    if (!formData.phoneNumber.trim()) {
      setStatus("Please enter your phone number.");
      return false;
    }

    // Nếu cần, bạn có thể thêm các validate khác, ví dụ validate định dạng số điện thoại, ...

    setStatus(null);
    console.log("Form submitted:", formData);
    // setStatus("Form submitted successfully!");
    setFormData({
      fullName: "",
      nickname: "",
      address: "",
      email: "",
      phoneNumber: "",
      description: "",
    });

    return true;
  };


  const commonTextFieldProps = {
    InputLabelProps: {
      style: { color: "white",borderRadius: 10 },
    },
    InputProps: {
      style: { color: "white",borderRadius: 10 },
    },
    sx: {
      
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#747474",
        },
        "&:hover fieldset": {
          borderColor: "white",
        },
        "&.Mui-focused fieldset": {
          borderColor: "white",
        },
      },
    },
  };
  
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 800,
        mx: "auto",
        mb: 10,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
      }}
    >
      
      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
        fullWidth
        {...commonTextFieldProps}
      />

      <TextField
        label="Nickname"
        name="nickname"
        value={formData.nickname}
        onChange={handleChange}
        fullWidth
        {...commonTextFieldProps}
      />

      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        {...commonTextFieldProps}
      />

      <TextField
        label="Phone Number"
        name="phoneNumber"
        type="tel"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        fullWidth
        {...commonTextFieldProps}
      />

      
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
        {...commonTextFieldProps}
      />

      <TextField
        label="Description to Admin"
        name="description"
        value={formData.description}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        {...commonTextFieldProps}
      />
      <CenterBox>
        {status && (
          <Typography variant="body2" color="success.main" align="center">
            {status}
          </Typography>
        )}

        <StyledButton title="Submit Now" DialogComponent ={ConfirmDialog} 
          onClick={() => handleSubmit()}
          dialogProps={{title:"Thank you!", 
            img:"/images/reception.png",
          content:"Admin will contact you soon"}}/>
      </CenterBox>

      
    </Box>
  );
};

export default ContactForm;
