import { TextField, Button, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { CenterBox, StyledButton, FlareEffect } from "./TitlePanel";
import CommentDialog,{ConfirmDialog} from "./CommentDialog";
import Autocomplete from '@mui/material/Autocomplete';
import nations from "../../json/nation.json";

const ContactForm = ({mode="contact"}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (event, newValue) => {
  setSelectedCountry(newValue);
  setFormData(prev => ({
    ...prev,
    country: newValue ? newValue.name : '',
  }));
};

  const [formData, setFormData] = useState({
    fullName: "",
    nickname: "",
    address: "",
    phoneNumber: "",
    description: "",
    country: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    e.preventDefault();

    // Kiểm tra các trường quan trọng
    if (!formData.fullName.trim()) {
      setStatus("Please enter your full name.");
      return false;
    }

    if (!formData.phoneNumber.trim()) {
      setStatus("Please enter your phone number.");
      return false;
    }

    setStatus(null);
    console.log("Form submitted:", formData);

    setFormData({
      fullName: "",
      nickname: "",
      address: "",
      email: "",
      phoneNumber: "",
      description: "",
      country: "", // Nếu có
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
          borderColor: "#000",
          backgroundColor: "#061c32ff",
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
      <FlareEffect top={-30}/>
      
      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
        fullWidth
        {...commonTextFieldProps}
      />

      {mode === "contact" &&
      <TextField
        label="Nickname"
        name="nickname"
        value={formData.nickname}
        onChange={handleChange}
        fullWidth
        {...commonTextFieldProps}
      />}

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

      {mode === "partner" && <>
        <TextField label="Business Name" name="business" value={formData.business} 
          onChange={handleChange} fullWidth {...commonTextFieldProps} />
        <TextField label="Your website" name="website" value={formData.website} 
          onChange={handleChange} fullWidth {...commonTextFieldProps} />
        
      </>}

      <Autocomplete
        options={nations}
        getOptionLabel={(option) => `${option.name} (${option.dial_code})`}
        value={selectedCountry}
        onChange={handleCountryChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select a country"
            fullWidth
            InputLabelProps={{
              style: { color: "white", borderRadius: 10 },
            }}
            InputProps={{
              ...params.InputProps,
              style: { color: "white", borderRadius: 10 },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "none",
                  backgroundColor: "#061c32ff",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
        )}
        sx={{ mt: 2 }}
      />

      <TextField
        label="Description"
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
