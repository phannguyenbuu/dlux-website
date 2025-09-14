import React from 'react';
import ReactDOM from 'react-dom/client';
import Slick from './components/Slick';
import SvgGalleryWidget from './components/SvgGalleryWidget';
import LayoutWidgetBase from './components/LayoutWidgetBase';
import LayoutWidgetLeft from './components/LayoutWidgetLeft';
import YouTubeVideoWidget from './components/YouTubeVideoWidget';
import NavTabWidget from './components/NavTabWidget';
import PriceWidget from './components/PriceWidget';
import BlogWidget from './components/BlogWidget';
import LayoutCommon from './common';
import './components/Component.css';
import LandscapeButton from './components/LandscapeButton';
// import NavTabWidget from './components/NavTabWidget';
// import PriceWidget from './components/PriceWidget';
import GalleryWidget from './components/GalleryWidget';
import AbstractBackground from './components/dlux/AbstractBackground';
import { Stack, Box, Typography, Button } from '@mui/material';

import infor from './json/index.json';
import quickLinks from './json/quickLinks.json';
import sampleData  from './json/sample.json';

import ContactWidget from './components/ContactWidget';
import SinglePanel, {BigPanel, FamousGiveawayPanel, WinnerPanel} from './components/dlux/SinglePanel';
import PartnerPanel from './components/dlux/PartnerPanel';
import AboutUsBackground from './components/dlux/AboutUsBackground';
import ScrollablePanels from './components/dlux/ScrollablePanels';
// import UseIsMobile from './components/hooks/UseIsMobile';


const mLeft = 50;

const isMobile = () => {
  return window.screen.width < 768;
}

export default function Homepage() {
  return (
      <>

        <AbstractBackground/>

        <Stack direction='row' spacing={5} justifyContent="center" alignItems="center" 
          sx={{marginTop:20}}>
          {[0,1,2].map((i) => 
          <SinglePanel title={infor.services[i].title} 
                      content={infor.services[i].description} 
                      img={infor.services[i].imageUrl}
                      imgHeight={450}/>
          )}
        </Stack>
        <Stack direction='row' spacing={5}
          justifyContent="center" alignItems="center" 
          sx={{marginTop:20}}
          >
          {[3,4,5].map((i) => 
          <SinglePanel title={infor.services[i].title} 
                      content={infor.services[i].description} 
                      img={infor.services[i].imageUrl}
                      imgHeight={450}/>
          )}
        </Stack>

        <Box sx={{width:'99vw', overflow:'hidden', height:800}}>
          <Typography sx={{marginLeft: mLeft, fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
                        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                        marginTop: 30,
                        fontWeight:700, color: '#fff'}}>OUR PARTNERS & DISCOUNTS</Typography>
          
          
            <PartnerPanel />

            <Box sx={{transform:'translateY(-220px)'}}>
              <PartnerPanel startAnimationTime={5}/>
            </Box>
          
        </Box>
        
        <Typography sx={{marginLeft: mLeft, fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
                        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                        fontWeight:700, color: '#fff'}}>ABOUT US</Typography>
        <AboutUsBackground/>

        <Box sx={{width:'99vw', overflow:'hidden', height:450}}>
          <Typography sx={{marginLeft:20, fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
                        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                        marginTop: 10,
                        fontWeight:700, color: '#fff'}}>FEATURED ON</Typography>

          <Stack direction='row' spacing={5}
            justifyContent="center" alignItems="center" 
            marginTop={0}
            >
            {infor.features.map((el) => 
              <SinglePanel title={el.title} 
                        content={el.description} 
                        img={el.imageUrl}
                        imgTop={0}
                        imgHeight={250}/>
            )}
          </Stack>
        </Box>
          
        <Box>
          <Typography sx={{marginLeft: mLeft, fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
                        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                        marginTop: 0,
                        fontWeight:700, color: '#fff'}}>HOW IT WORKS</Typography>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Stack direction='row' spacing={1}>
              {infor.howItWorks.map((el, idx) => 
                <BigPanel title={el.title} content={el.content}
                  images={[`/images/howItWorks/phone0${idx + 1}.png`]}/>)}
            </Stack>
          </Box>
        </Box>

        <Typography sx={{marginLeft: mLeft, fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
                        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                        marginTop: 10,
                        fontWeight:700, color: '#fff'}}>THE FAMOUS D-LUX GIVEAWAY</Typography>

        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <FamousGiveawayPanel/>
        </Box>

        <Typography sx={{marginLeft: mLeft, fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
                        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                        marginTop: 10,
                        fontWeight:700, color: '#fff'}}>PREVIOUS WINNERS</Typography>

        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <Stack direction="row" spacing={1}>
            {infor.winners.map((el) => <WinnerPanel {...el}/>)}
          </Stack>
        </Box>


        <Typography sx={{marginLeft: mLeft, fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
                        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                        marginTop: 10,
                        fontWeight:700, color: '#fff'}}>EXCLUSIVE SAVINGS</Typography>

        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <YouTubeVideoWidget videoId="eODJH76tvLs"/>
        </Box>





        <Typography sx={{marginLeft: mLeft, fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
                        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                        marginTop: 10,
                        fontWeight:700, color: '#fff'}}>MEMBERSHIP PRIVILEGES</Typography>


        <Stack direction='row' spacing={5} justifyContent="center" alignItems="center" 
          sx={{marginTop:10}}>
          {[0,1].map((i) => 
          <SinglePanel title={infor.membership[i].title} 
                      content={infor.membership[i].description} 
                      img={infor.membership[i].imageUrl}
                      width="40vw"
                      imgHeight={450}
                      />
          )}
        </Stack>
        <Stack direction='row' spacing={5}
          justifyContent="center" alignItems="center" 
          sx={{marginTop:15}}
          >
          {[2,3].map((i) => 
          <SinglePanel title={infor.membership[i].title} 
                      content={infor.membership[i].description} 
                      img={infor.membership[i].imageUrl}
                      width="40vw"
                      imgHeight={450}
                      />
          )}
        </Stack> 


        <Typography sx={{marginLeft: mLeft, fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
                        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                        marginTop: 10,
                        fontWeight:700, color: '#fff'}}>MEMBERSHIP PRIVILEGES</Typography>

        <ScrollablePanels infor={infor}/>


          <Typography sx={{marginLeft: mLeft, fontSize:40, fontFamily:'Poppins', fontStyle:'italic', 
                        textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                        marginTop: 20,
                        fontWeight:700, color: '#fff'}}>{infor.contact.title}</Typography>
          

          <ContactWidget bannerData = {{
              'image1':'',
              'image2':'',
              'title':'',
              'description': '',
              'inputs':`Full Name
              |Nickname
              |Address
              |Phone Number
              |Desciption to Admin`,
              'imageClass':'image-dark-1',
              'button':'Đặt Hàng Ngay',
              'buttonUrl':'/contact',
          }}>
            <Typography sx={{color:'#fff', fontFamily:'Inter', fontSize: 12, 
                marginLeft: 10, padding:2, width: isMobile() ? ' 90vw': 800, textDecoration:"italic"}}>
              {infor.contact.description}
            </Typography>
          </ContactWidget>

    </>
  );
}





