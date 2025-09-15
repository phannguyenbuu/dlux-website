import React from 'react';
import ReactDOM from 'react-dom/client';
// import infor from './json/index.json';
import LayoutCommon from './common';
import { Stack, Box, Typography, Button } from '@mui/material';
// import TextPreciseWidget from '../../components/TextPreciseWidget';
// import { HashLink } from 'react-router-hash-link';
import ProductGallery from './components/dlux/ProductGallery';
import { generateFakeProducts } from './components/dlux/Faker';
import TitlePanel from './components/dlux/TitlePanel';
import infor from './json/shop.json';

window.TITLE = 'Shop';

export default function Shop() {
  const products = generateFakeProducts(100);

  return (
  <React.StrictMode>
      <TitlePanel title="SHOP"/>
        <Stack id="term" spacing={10} sx={{padding:20}}>
          <ProductGallery images={infor.images} data={products}/>
        </Stack>
      
    </React.StrictMode>
  );
}

