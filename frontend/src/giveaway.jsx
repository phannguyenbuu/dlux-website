import React from 'react';
import YouTubeVideoWidget from './components/YouTubeVideoWidget';
import AbstractBackground from './components/dlux/AbstractBackground';
import { Stack, Box, Typography, Button } from '@mui/material';

import infor from './json/index.json';
import SinglePanel, {BigPanel, FamousGiveawayPanel, WinnerPanel} from './components/dlux/SinglePanel';
import PartnerPanel from './components/dlux/PartnerPanel';
import AboutUsBackground from './components/dlux/AboutUsBackground';
import ScrollablePanels from './components/dlux/ScrollablePanels';
import TitlePanel, {CenterBox, StyledButton} from './components/dlux/TitlePanel';
import ContactForm from './components/dlux/ContactForm';
import { FlareEffect } from './components/dlux/TitlePanel';

const isMobile = () => {
  return window.screen.innerWidth < 768;
}

export default function GiveAway() {
  return (
    <>
      <AbstractBackground />

      <Stack direction="row" spacing={5} justifyContent="center" alignItems="center" sx={{ marginTop: 20 }}>
        {[0, 1, 2].map((i) => (
          <SinglePanel key={i} {...infor.services[i]} />
        ))}
        <FlareEffect top={100}/>
      </Stack>

      <Stack direction="row" spacing={5} justifyContent="center" alignItems="center" sx={{ marginTop: 20 }}>
        {[3, 4, 5].map((i) => (
          <SinglePanel key={i} {...infor.services[i]} />
        ))}
      </Stack>

      <Box sx={{ width: '99vw', overflow: 'hidden', height: 500 }}>
        <TitlePanel title="OUR PARTNERS & DISCOUNTS" />
        <PartnerPanel />

        <Box sx={{ transform: 'translateY(-220px)' }}>
          <PartnerPanel startAnimationTime={5} />
        </Box>
        <CenterBox>
          <StyledButton title="See All Discounts" sx={{position:'absolute', mt:-155}}/>
        </CenterBox>
      </Box>

      <TitlePanel title="ABOUT US" />
      <AboutUsBackground />

      <Box sx={{ width: '99vw', overflow: 'hidden', height: 450 }}>
        <TitlePanel title="FEATURED ON" />

        <Stack direction="row" spacing={5} justifyContent="center" alignItems="center" marginTop={0}>
          {infor.features.map((el, index) => (
            <SinglePanel key={index} {...el} />
          ))}
        </Stack>
      </Box>

      <Box>
        <TitlePanel title="HOW IT WORKS" />

        <CenterBox direction="row" gap={1}>
          {infor.howItWorks.map((el, idx) => (
            <BigPanel key={idx} {...el} images={[`/images/howItWorks/phone0${idx + 1}.png`]} />
          ))}
        </CenterBox>
      </Box>

      <TitlePanel title="THE FAMOUS D-LUX GIVEAWAY" />

      <CenterBox>
        <FamousGiveawayPanel />
      </CenterBox>

      <TitlePanel title="PREVIOUS WINNERS" />

      <CenterBox direction="row" gap={1}>
        {infor.winners.map((el, idx) => (
          <WinnerPanel key={idx} {...el} />
        ))}
      </CenterBox>

      <TitlePanel title="EXCLUSIVE SAVINGS" />

      <CenterBox>
        <YouTubeVideoWidget videoId="eODJH76tvLs" />
      </CenterBox>

      <TitlePanel title="MEMBERSHIP PRIVILEGES" />

      <CenterBox direction="row" gap={5} top={15}>
        {[0, 1].map((i) => (
          <SinglePanel key={i} {...infor.membership[i]} />
        ))}
        <FlareEffect top={50} />
      </CenterBox>

      <CenterBox direction="row" gap={5} top={15}>
        {[2, 3].map((i) => (
          <SinglePanel key={i} {...infor.membership[i]} />
        ))}
      </CenterBox>

      <TitlePanel title="CLIENTS REVIEW" />
      <ScrollablePanels infor={infor}>
        <FlareEffect top={-60}/>
      </ScrollablePanels>

      <TitlePanel title={infor.contact.title} />

      <CenterBox id="contact">
        <ContactForm />
      </CenterBox>
    </>
  );
}
