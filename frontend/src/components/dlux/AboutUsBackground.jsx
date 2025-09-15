import React, {useState, useEffect} from 'react';
import { Stack, Box, Button, Typography } from '@mui/material';
import infor from '../../json/index.json';
import UseIsMobile from '../hooks/UseIsMobile';
import { StyledButton } from './TitlePanel';
import ScrollablePanels from './ScrollablePanels';

export const StarObj = () => (
  <svg viewBox="0 0 43 43" focusable="false" width={20} height = {20}><path d="M20.3941 0.664182C20.6441 -0.217575 22.2092 -0.22286 22.4651 0.657188C23.6338 4.67588 25.8008 10.616 29.0778 13.8708C32.3547 17.1257 38.3093 19.2526 42.3358 20.3941C43.2176 20.6441 43.2229 22.2092 42.3428 22.4651C38.3241 23.6338 32.384 25.8008 29.1292 29.0778C25.8743 32.3547 23.7474 38.3093 22.6059 42.3358C22.3559 43.2176 20.7908 43.2229 20.5349 42.3428C19.3662 38.3241 17.1992 32.384 13.9222 29.1292C10.6453 25.8743 4.69068 23.7474 0.664181 22.6059C-0.217576 22.3559 -0.22286 20.7908 0.657188 20.5349C4.67588 19.3662 10.616 17.1992 13.8708 13.9222C17.1257 10.6453 19.2526 4.69068 20.3941 0.664182Z" fill="url(#paint0_linear_1547_41491)"></path><defs><linearGradient id="paint0_linear_1547_41491" x1="24.2887" y1="0" x2="24.2887" y2="43" gradientUnits="userSpaceOnUse"><stop stop-color="#2ABDFD"></stop><stop offset="1" stop-color="#0497FD"></stop></linearGradient></defs></svg>
);


const AboutUsBackground = ({data=infor}) => 
{
    const isMobile = UseIsMobile();

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
  <Box position="relative" width="99vw" height='86vh' top={0}
    sx = {{ background: 'url("/images/panelBK_001.svg")',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      overflow:'hidden'
     }}>
    
    
    
    <img alt="phone"
      src="/images/about_us.png"
      style={{position:'relative', width: isMobile ? '100vw':'60vw', 
        marginLeft: isMobile ?  0 : '35vw',
        marginTop: 100 }}
    />
    
    
    
    <Box sx={{position:'absolute', left: isMobile?20:200, top:100, width: '100vw'}}>
      
        <Stack direction="row" spacing={0} sx={{marginBottom: 5}}>
          {data.aboutus.indexes.map((el) => 
            <Stack>
              <Typography sx={{fontSize:50, width: 300, fontFamily:'Poppins', fontStyle:'italic', 
                textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                fontWeight:700, color: '#fff'}}>
                  <div dangerouslySetInnerHTML={{ __html: el.title }}/>
              </Typography>
              <Typography sx={{fontSize:12, width: 300, color:"#fff",
                  textTransform:'uppercase',
                  }}>{el.content}</Typography>
            </Stack>
          )}
        </Stack>
        

        {data.aboutus.contents.map((el) => 
        <Stack direction="row" spacing={1}>
          <StarObj/>
          <Typography sx={{fontFamily:'Inter', fontSize:16, width: 500, color:"#fff"}}>
            {el}
          </Typography>
        </Stack>)}

        

    
      <StyledButton title={data.aboutus.button} hash="contact"/>
  

    </Box>
  </Box>
  );
}

export default AboutUsBackground;
