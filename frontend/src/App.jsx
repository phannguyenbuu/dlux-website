import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutCommon from './common';
import HomePage from './home'; // chuyển nội dung index.jsx sang đây
import TermsOfService from './terms-of-service'; // trang điều khoản
import PrivacyPolicy from './privacy-policy';
import FAQ from './faq';
import Shop from './shop';
import GiveAway from './giveaway';
import Partner from './partner';
import About from './about';
import Discount from './discount';

function App() {
  return (
    <LayoutCommon menuLeft='60' color='#313131' logo={{ image: '/images/logo_horz.png', href: '/' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/giveaway" element={<GiveAway />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/about" element={<About />} />
        <Route path="/discount" element={<Discount />} />
      </Routes>
    </LayoutCommon>
  );
}

export default App;
