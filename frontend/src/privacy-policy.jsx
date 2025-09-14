import React from 'react';
import ReactDOM from 'react-dom/client';
import infor from './json/index.json';
import LayoutCommon from './common';
import { Stack, Box, Typography, Button } from '@mui/material';
// import TextPreciseWidget from '../../components/TextPreciseWidget';
import { HashLink } from 'react-router-hash-link';

window.TITLE = 'Privacy Policy';

export default function PrivacyPolicy() {
  return (
  <React.StrictMode>
      
        <Stack id="term" spacing={10} sx={{padding:20}}>
          <Typography sx={{fontSize: 24, fontFamily:'Poppins', color:'#fff'}}>{infor.precise[0].title}</Typography>
          <Typography sx={{ color: '#fff' }}>
            {infor.precise[0].content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </Stack>
      
    </React.StrictMode>
  );
}

