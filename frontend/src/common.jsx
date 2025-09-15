import React, { useEffect } from 'react';
import HeaderMenu from './components/HeaderMenu';
import FooterWidget from './components/FooterWidget';
import QuoteChat from './components/QuoteChat.jsx';

// import preciseLinks from './json/precise.json';
import quickLinks from './json/quickLinks.json';

const currentPath = window.location.pathname;
const normalizedPath = currentPath.endsWith('/') && currentPath.length > 1 ? currentPath.slice(0, -1) : currentPath;

const socialButtons = [];

export default function LayoutCommon({ children, logo, menuLeft = '0', ...props }) {
  
  const updatedQuickLinks = quickLinks
    ? quickLinks
        .filter(link => link.title !== 'logo')
        .map(link => ({
          ...link,
          href: (normalizedPath === '/' ? '#' : '/') + link.href,
        }))
    : [];

  return (
    <>
      <HeaderMenu 
        menus={updatedQuickLinks} 
        logo={logo}
        menuLeft={menuLeft}
        {...props}
      />

      <main style={{ position: 'relative', paddingTop: 120, marginTop: window.MENU_HEIGHT }}>
        {children}
      </main>

      <QuoteChat title='facebook' top='78vh'/>
      
      <FooterWidget
        color1='#fff'
        color2='#006fafff'
        user={{ first_name: '', last_name: '' }}
        quickLinks={updatedQuickLinks}
        
        socialButtons={socialButtons}
      />
    </>
  );
}
