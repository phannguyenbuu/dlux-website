import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import MenuList from './MenuList';
import UseIsMobile  from './hooks/UseIsMobile';
import { Stack, Box, Button } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const HeaderMenu = ({ menus, logo, menuLeft = 0, color_1 = '#000' }) => 
  {
    // console.log('HeaderMenu',menuLeft);
    const isMobile = UseIsMobile();
  
    return (
  <header
    
    style={{ position: 'fixed',
      top:0,
      zIndex:999,
      display:'flex',
      justifyContent:'center',
      width: '100vw', 
      height:120,
      paddingLeft: isMobile ? parseFloat(menuLeft) : 0,
      backgroundColor:'#050e20',
     }}
  >
    
      <Stack direction="row">
        {logo && logo.image ? <Logo image={logo.image} href = {logo.href}/>: null}
        <MenuList menus={menus} color_1={color_1} />
       
        <Button 
          sx={{fontSize:20, width:180, height:40, borderRadius:3, 
            textTransform: 'none', 
            color: '#fff',
            marginTop:5,
            marginLeft: isMobile ? 10 : 50,
            border:'1px solid #00b3ffff',
            padding: isMobile? '0px 15px': '0px 60px'}}
          onClick={() => window.location.href = '/#login'}>
          Login
        </Button>
      </Stack>
    
  </header>
)};

export default HeaderMenu;
