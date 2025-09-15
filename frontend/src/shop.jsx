import React from 'react';
import ReactDOM from 'react-dom/client';
// import infor from './json/index.json';
import LayoutCommon from './common';
import { Stack, Box, Typography, Button } from '@mui/material';
// import TextPreciseWidget from '../../components/TextPreciseWidget';
// import { HashLink } from 'react-router-hash-link';
import ProductGallery from './components/dlux/ProductGallery';
import { generateFakeProducts } from './components/dlux/Faker';

window.TITLE = 'Shop';

export default function Shop() {
  const products = generateFakeProducts();

<ProductGallery data={products} />

  return (
  <React.StrictMode>
      
        <Stack id="term" spacing={10} sx={{padding:20}}>
          <Typography sx={{fontSize: 24, fontFamily:'Poppins', color:'#fff'}}>SHOP</Typography>
          <ProductGallery data={products}/>
        </Stack>
      
    </React.StrictMode>
  );
}

