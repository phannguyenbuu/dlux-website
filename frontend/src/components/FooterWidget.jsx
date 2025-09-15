import React from 'react';
import UseIsMobile from './hooks/UseIsMobile';
import Logo from './Logo';
import { Stack, Box, Typography, Button } from '@mui/material';
import infor from "../json/index.json";
import { Link } from 'react-router-dom';
import '../css/style.css';
import menus from '../json/menus.json';

const socialButtons = [
  { title: 'Facebook', href: 'https://facebook.com' },
  { title: 'X', href: 'https://twitter.com' },
  { title: 'Whatsapp', href: 'https://wa.me/' },
  { title: 'Instagram', href: 'https://instagram.com' },
  { title: 'Telegram', href: 'https://telegram.me' },
];

const SocialButtons = () => {
  const isMobile = UseIsMobile();

  if (!Array.isArray(socialButtons)) return null;

  return socialButtons.map((button, idx) => (
    <a
      key={idx}
      href={button.href || `#${button.title}`}
      target="_blank"
      rel="noopener noreferrer"
      title={button.title}
      style={{
        color: 'white',
        margin: '0 8px',
        fontSize: isMobile ? 18 : 24,
        textDecoration: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Sử dụng font-awesome biểu tượng, cần import font-awesome vào dự án */}
      <i className={`fab fa-${button.title.toLowerCase()}`} style={{ width: 30, height: 30 }}></i>
    </a>
  ));
};





const FooterWidget = ({ color2, quickLinks}) => {
  const isMobile = UseIsMobile();
  
  return (
    <>
    
    <footer id="contact" style={{ display:'flex', 
    flexDirection: isMobile ? 'column':'row',
    
    justifyContent:'center', alignContent:'center', padding: 50,
         backgroundColor: color2, padding: '30px 20px', color: 'white', marginTop:window.SECTION_MARGIN_TOP,
          textAlign: 'center' }}>
      
        <Stack spacing={25} direction="row">
        <Logo image="/images/logo.png"/>
        
          
            <Stack spacing={2}>
              
              {menus.map(({ title, href, choices }, idx) => 
                <Button
                  key={idx}
                  title={`→${title}`}
                  sx={{ color: 'white', textAlign: 'left',  
                    fontSize: 12, 
                    textDecoration: 'none' }}
                >
                    {title}
                  
                </Button>
              )}
            </Stack>
          
        

         
          <Stack spacing={4}>
            <Link to="/terms-of-service" className="link-hover">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="link-hover">Privacy Policy</Link>
            <Link to="/faq" className="link-hover">FAQ</Link>
          </Stack>
           

      
        <Box sx={{ marginTop: 5, padding: 1, 
          marginLeft: isMobile ? 50 : 250,
           display:'flex', gap:0, height:40, width: 140 }}>
          <SocialButtons />
        </Box>


       </Stack>
        
      
    </footer>

    <div style={{ fontSize: 14, background:'#313131', padding: 20, color: "#fff" }}>Copyright All Right Reserved 2025</div>
    </>
  );
};

export default FooterWidget;
