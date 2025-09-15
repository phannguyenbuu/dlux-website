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
import TitlePanel, {CenterBox} from './components/dlux/TitlePanel';
import ContactForm from './components/dlux/ContactForm';
import CommentDialog,{PictureDialog} from './components/dlux/CommentDialog';
// import UseIsMobile from './components/hooks/UseIsMobile';




const isMobile = () => {
  return window.screen.width < 768;
}

export default function Homepage() {
  return (
      <>
        <AbstractBackground/>

        <Stack direction='row' spacing={5} justifyContent="center" alignItems="center" sx={{marginTop:20}}>
          {[0,1,2].map((i) => <SinglePanel {...infor.services[i]}/>)}
        </Stack>

        <Stack direction='row' spacing={5} justifyContent="center" alignItems="center" sx={{marginTop:20}}>
          {[3,4,5].map((i) => <SinglePanel {...infor.services[i]}/>)}
        </Stack>

        <Box sx={{width:'99vw', overflow:'hidden', height:500}}>
          <TitlePanel title="OUR PARTNERS & DISCOUNTS"/>
          <PartnerPanel />

          <Box sx={{transform:'translateY(-220px)'}}>
            <PartnerPanel startAnimationTime={5}/>
          </Box>
        </Box>
        
        <TitlePanel title="ABOUT US"/>
        <AboutUsBackground/>

        <Box sx={{width:'99vw', overflow:'hidden', height:450}}>
          <TitlePanel title="FEATURED ON"/>

          <Stack direction='row' spacing={5} justifyContent="center" alignItems="center" marginTop={0}>
            {infor.features.map((el) => <SinglePanel {...el}/>
            )}
          </Stack>
        </Box>
          
        <Box>
          <TitlePanel title="HOW IT WORKS"/>

          <CenterBox direction="row" gap={1}>
              {infor.howItWorks.map((el, idx) => 
                <BigPanel {...el} images={[`/images/howItWorks/phone0${idx + 1}.png`]}/>)}
            
          </CenterBox>
        </Box>

        <TitlePanel title="THE FAMOUS D-LUX GIVEAWAY"/>

        <CenterBox>
          <FamousGiveawayPanel/>
        </CenterBox>

        <TitlePanel title="PREVIOUS WINNERS"/>

        <CenterBox direction="row" gap={1}>
            {infor.winners.map((el) => <WinnerPanel {...el}/>)}
        </CenterBox>

        <TitlePanel title="EXCLUSIVE SAVINGS"/>

        <CenterBox>
          <YouTubeVideoWidget videoId="eODJH76tvLs"/>
        </CenterBox>

        <TitlePanel title="MEMBERSHIP PRIVILEGES"/>

        <CenterBox direction='row' gap={5} top={15}>
          {[0,1].map((i) => <SinglePanel {...infor.membership[i]}/>)}
        </CenterBox>

        <CenterBox direction='row' gap={5} top={15}>
          {[2,3].map((i) => <SinglePanel {...infor.membership[i]}/>)}
        </CenterBox>

        <TitlePanel title="MEMBERSHIP PRIVILEGES"/>
        <ScrollablePanels infor={infor}/>

        <TitlePanel title={infor.contact.title}/>

        <CenterBox id="contact">
          <ContactForm/>
        </CenterBox>

    </>
  );
}





