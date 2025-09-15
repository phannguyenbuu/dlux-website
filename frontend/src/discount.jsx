import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import infor from './json/discountProduct.json';
import sideinfor from './json/discount.json';
import LayoutCommon from './common';
import { Stack, Box, Typography, Button } from '@mui/material';
// import TextPreciseWidget from '../../components/TextPreciseWidget';
// import { HashLink } from 'react-router-hash-link';
import ProductGallery from './components/dlux/ProductGallery';
import { generateFakeProducts } from './components/dlux/Faker';
import TitlePanel, { CenterBox } from './components/dlux/TitlePanel';
import SideProductBar from './components/dlux/SideProductBar';

window.TITLE = 'Shop';

export default function Discount() {
  const [products, setProducts] = useState(infor);
  console.log('Products', products);

  return (
  <React.StrictMode>
      <TitlePanel title="DISCOUNTS"/>
      <CenterBox>
        <Stack direction="row" spacing={10} sx={{padding:20, maxWidth: '100vw', justifyContent: 'flex-start'}}>
          <SideProductBar data={sideinfor} products={infor} setProducts={setProducts}/>
          <ProductGallery data={products}/>
        </Stack>
      </CenterBox>
    </React.StrictMode>
  );
}

