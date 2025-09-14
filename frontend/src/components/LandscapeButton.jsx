import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import MenuList from './MenuList';
import UseIsMobile  from './hooks/UseIsMobile';

const LandscapeButton = ({ title, url }) => {
    const isMobile = UseIsMobile();

  return (
    <button
      style={{ position: 'relative', width: 300, marginTop: isMobile ? 0 : 50, textTransform: 'uppercase' }}
      onClick={() => window.location.href = url}
    >
      {title}
    </button>
  );
};

export default LandscapeButton;
