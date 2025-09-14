import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Tabs, Tab, FormControl,FormControlLabel, Radio, InputLabel, Select, MenuItem, FormLabel, RadioGroup} from '@mui/material';
const buttonStyle = {};

export function RobotNav({ tabLabels, tabIndex, handleTabChange, children, width=300 }) {
  return (
    <Box sx={{ backgroundColor:"#fff", width: width, padding: 3, border: '1px solid #d1d1d1',borderRadius: 2 }}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        {tabLabels.map((label, index) => (
          <Tab sx={buttonStyle} key={index} label={label} />
        ))}
      </Tabs>

      {/* Nội dung theo tab */}
      <Box sx={{ marginTop: 3 }}>
        {Array.isArray(children) && children.length > 0
          ? children[tabIndex]
          : null}
      </Box>
    </Box>
  );
}

export function RobotVNav({ tabLabels, tabIndex, handleTabChange, children }) {
  return (
    <Box sx={{ backgroundColor:"#fff", width: 425, display:'flex' ,
      zIndex:99,  gap:1, padding: 3, border: '1px solid #d1d1d1',borderRadius: 2 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: 105 }}
      >
        {tabLabels.map((label, index) => (
          <Tab sx={{color:CLRS[index], minHeight: 60, height: 60, ...buttonStyle}} 
            icon={<MyIcon color={CLRS[index]} />} key={index} label={label}/>
        ))}
      </Tabs>

      {/* Nội dung theo tab */}
      <Box sx={{ marginTop: 3 }}>
        {Array.isArray(children) && children.length > 0
          ? children[tabIndex]
          : null}
      </Box>
    </Box>
  );
}

export const CLRS = ["#1EAAFF", "#EA6DE8", "#698CEB", "#6ECBFD", "#2FC9A9",
  "#66CC52","#F49138","#F78C6C","#E25C34","#FFBF00","#FF999A","#1EAAFF"
]

const MyIcon = ({ color = "#1EAAFF" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_699_1741)">
      <path
        d="M2 8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V8Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12H10M8 10V14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 11V11.01"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13V13.01"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_699_1741">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);