import React from 'react';
import UseIsMobile from './hooks/UseIsMobile';
import { Stack, Box, Typography, Button } from '@mui/material';

const Logo = ({image, href}) => {
  const isMobile = UseIsMobile();
  // console.log('Logo',image, href);
  return (
    <Box ml={2}>
      <a id="myLink" href={href}>
        <img
          src={process.env.PUBLIC_URL + image}
          alt="logo"
          width={200}
          style={{
            marginTop: isMobile ? 30 : 30,
            marginLeft: isMobile ? 0 : 120,
            position: 'relative',
          }}
        />
      </a>
    </Box>
  );
};

export default Logo;
