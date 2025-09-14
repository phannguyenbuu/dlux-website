import React from 'react';
import { Stack, Box, Button, Typography } from '@mui/material';
import infor from '../../json/index.json';
const AbstractBackground = () => (
  <Box position="relative" width="100vw" height='86vh' top={0} marginTop={0}
    sx = {{ background: 'url("images/firstpage.png")',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      marginTop: 0,
     }}>
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="724"
      height="756"
      viewBox="0 0 724 756"
      fill="none"
      sx = {{position:'absolute'}}
    >
      <path
        d="M223.06 517.89C216.464 533.71 200.292 539.719 191.06 529.379C172.063 508.105 181.447 420.524 194.324 416.404C207.011 412.344 236.83 484.878 223.06 517.89Z"
        stroke="white"
        strokeOpacity="0.05"
        strokeMiterlimit="10"
      />
      <path
        d="M265.314 478.689C277.921 442.553 188.166 381.875 166.976 406.921C153.946 422.32 155.575 459.599 159.857 489.998C163.876 518.537 180.311 559.315 207.606 569.376C222.096 574.703 242.74 571.505 249.97 560.223C255.564 551.491 253.047 539.704 253.978 537.103C248.857 524.707 246.866 522.888 245.665 513.011C244.094 500.101 261.848 488.627 265.314 478.689Z"
        stroke="white"
        strokeOpacity="0.05"
        strokeMiterlimit="10"
      />
    </svg>
    
    <img
      alt="phone"
      src="/static/media/main-screen.1f2e7a2c8df05ce0ef6c.png"
      className="chakra-image css-1thmmmo"
    />
    
    <img
      alt="glow"
      src="/static/media/main-prizes.1740ff184b25715e0506.png"
      className="chakra-image css-7bf8x2"
    />
    
    <Box sx={{position:'absolute', left:150, top:100}}>
    
      <Typography sx={{fontSize:60, fontFamily:'Poppins', fontStyle:'italic', 
        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
        fontWeight:700, color: '#fff'}}>AUSTRALIA`S</Typography>
      <Typography sx={{fontSize:90, marginTop: -5, marginLeft: -2, fontFamily:'Poppins', 
        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
        fontStyle:'italic', fontWeight:700, color: '#20b3fd'}}>BEST</Typography>
      <Typography p={1} sx={{paddingLeft:3, paddingRight:5,fontSize:60, marginTop: -2, 
        marginLeft: -2, fontFamily:'Poppins', borderRadius:5,
        width:'fit-content', backgroundColor:"#fff", fontStyle:'italic', 
        
        fontWeight:700, color: '#20b3fd'}}>REWARDS CLUB</Typography>
      <Typography sx={{fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
        fontWeight:700, color: '#fff'}}>& SHOPPING TOOL</Typography>
    
    <Typography sx={{fontSize:18, marginTop: 5, width: 500, color:"#fff",
      textShadow: '0 0 10px rgba(0, 0, 0, 1)'
    }}>
      {infor.home.content}
    </Typography>

    
    <Button type="button" sx={{width: 280, height: 60, borderRadius: 5, 
      fontSize: 20, marginTop: 5,
      color: '#fff', textTransform: 'none',
      boxShadow: '0 0 15px 5px rgba(165, 219, 255, 0.6)',
      background: 'linear-gradient(0deg, #65ceffff 0%, #00a6ffff 30%,#00a6ffff 70%, #65ceffff 100%)'}}>
      Join Now
    </Button>
  

    </Box>
  </Box>
);

export default AbstractBackground;
