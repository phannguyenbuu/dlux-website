import React from 'react';
import YouTubeVideoWidget from './components/YouTubeVideoWidget';
import AbstractBackground from './components/dlux/AbstractBackground';
import { Stack, Box, Typography, Button } from '@mui/material';

import SinglePanel, {BigPanel, FamousGiveawayPanel, WinnerPanel} from './components/dlux/SinglePanel';
import PartnerPanel from './components/dlux/PartnerPanel';
import AboutUsBackground from './components/dlux/AboutUsBackground';
import ScrollablePanels from './components/dlux/ScrollablePanels';
import TitlePanel, {CenterBox, StyledButton} from './components/dlux/TitlePanel';
import ContactForm from './components/dlux/ContactForm';
import { FlareEffect } from './components/dlux/TitlePanel';

import PartnerBackground from './components/dlux/PartnerBackground';
import infor from "./json/partner.json";

const isMobile = () => {
  return window.screen.innerWidth < 768;
}

export default function Partner() {
  return (
    <>
      <PartnerBackground />
      <CenterBox top={20}>
        <SinglePanel {...infor.give} p={15}/>
      </CenterBox>





      <TitlePanel title="THE PLATFORM"/>
      <AboutUsBackground data={infor}/>

      <TitlePanel title="FAMOUS GIVEAWAY WINNERS"/>
      <CenterBox>
        <Typography color="rgba(0, 166, 255, 0.51)" textAlign="center" width={600} maxWidth="80vw">
          {infor.winner}
        </Typography>
      </CenterBox>
      <CenterBox id="contact" top={5}>
        <ScrollablePanels data={infor}>
          <FlareEffect top={-60}/>
        </ScrollablePanels>
      </CenterBox>

      
      <TitlePanel title="BECOME A RELIABLE PARTNER"/>
      <CenterBox>
        <Typography color="rgba(0, 166, 255, 0.51)" textAlign="center" width={600} maxWidth="80vw">
          {infor.contact}
        </Typography>
      </CenterBox>
      
      <CenterBox id="contact" top={0}>
        <ContactForm mode="partner" />
      </CenterBox>

      
    </>
  );
}
