import React from 'react';
import YouTubeVideoWidget from './components/YouTubeVideoWidget';
import AbstractBackground from './components/dlux/AbstractBackground';
import { Stack, Box, Typography, Button, Grid } from '@mui/material';

import infor from './json/giveaway.json';
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
      <TitlePanel title="UPCOMING"/>
      <Stack p={10} direction="row" spacing={5}>
        <FamousGiveawayPanel data={infor.upcomings[0]}/>
        <FamousGiveawayPanel data={infor.upcomings[1]} />
      </Stack>

      <Stack p={10} direction="row" spacing={5}>
        <FamousGiveawayPanel data={infor.upcomings[2]}/>
        <FamousGiveawayPanel data={infor.upcomings[3]} />
      </Stack>

      <TitlePanel title="WINNERS"/>
      <CenterBox direction="row" gap={1}>
        <Grid container spacing={2} width="100%"  p={5}>
          {infor.winners.map((el, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <WinnerPanel {...el} />
            </Grid>
          ))}
        </Grid>
      </CenterBox>

      <TitlePanel title="DAILY"/>
      <ScrollablePanels data={infor}/>
    </>
  );
}
