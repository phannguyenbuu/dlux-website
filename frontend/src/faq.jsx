import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import infor from './json/faq.json';
import LayoutCommon from './common';
import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// import TextPreciseWidget from '../../components/TextPreciseWidget';
// import { HashLink } from 'react-router-hash-link';
import { StarObj } from './components/dlux/AboutUsBackground';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

window.TITLE = 'FAQ';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Stack spacing={2} sx={{ padding: 10 }}>
      {infor.map((el, index) => (
        <Accordion key={index} sx={{ backgroundColor: '#0e1633', color: '#fff', borderRadius: 2 }}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon sx={{ color: '#00bbff' }}/>} 
            aria-controls={`panel${index}-content`} 
            id={`panel${index}-header`}
            sx={{ '& .MuiAccordionSummary-content': { alignItems: 'center' } }}
          >
            <StarObj />
            <Typography sx={{ ml: 2, fontSize: 24, fontWeight: 'bold' }}>{el.ask}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{el.ans}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}