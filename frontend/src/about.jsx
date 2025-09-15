import React from 'react';
import YouTubeVideoWidget from './components/YouTubeVideoWidget';
import PageAbBackground from './components/dlux/PageAbBackground';
import { Stack, Box, Typography, Button } from '@mui/material';

import SinglePanel, {BigPanel, FamousGiveawayPanel, WinnerPanel} from './components/dlux/SinglePanel';
import PartnerPanel from './components/dlux/PartnerPanel';
import AboutUsBackground from './components/dlux/AboutUsBackground';
import ScrollablePanels from './components/dlux/ScrollablePanels';
import TitlePanel, {CenterBox, StyledButton} from './components/dlux/TitlePanel';
import ContactForm from './components/dlux/ContactForm';
import { FlareEffect } from './components/dlux/TitlePanel';
import infor from "./json/about.json";

const isMobile = () => {
  return window.screen.innerWidth < 768;
}

export default function About() {
  return (
    <>
      <PageAbBackground />

      <TitlePanel title="ABOUT US"/>
      <AboutUsBackground data={infor}/>

      <CenterBox>
        <Typography sx={{ fontSize:24, fontFamily:'Poppins', fontStyle:'italic', 
                                textShadow: '0 0 5px rgba(0, 0, 0, 1)',
                                maxWidth: "80vw",
                                textAlign: 'center',
                                mt: 10,
                                fontWeight:700, color: '#fff'}}>
                                "{infor.quote.content}"
        </Typography>
      </CenterBox>

      <TitlePanel title={infor.quote.founder}/>
      <TitlePanel title="CLIENTS REVIEW" />
      <ScrollablePanels data={infor}>
        <FlareEffect top={-60}/>
      </ScrollablePanels>
    </>
  );
}
