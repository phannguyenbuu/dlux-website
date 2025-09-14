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

  // Lấy đối tượng logo từ quickLinks


  
  // const logoLink = quickLinks
  //   ? quickLinks.find(link => link.title === 'logo')
  //   : null;

    // console.log(quickLinks, logoLink);



  return (
    <>
      {/* <DjangoListen /> */}

      <HeaderMenu 
        menus={updatedQuickLinks} 
        logo={logo}
        menuLeft={menuLeft}
        {...props}
      />

      {/* Nội dung từng trang được inject ở đây */}
      <main style={{ position: 'relative', paddingTop: 120, marginTop: window.MENU_HEIGHT }}>
        {children}
      </main>

      <QuoteChat title='facebook' top='78vh'/>
      
      <FooterWidget
        color1='#fff'
        color2='#006fafff'
        user={{ first_name: '📞 0909 769 289', last_name: 'Đường XT 24, Ho Chi Minh City, Vietnam' }}
        quickLinks={updatedQuickLinks}
        
        socialButtons={socialButtons}
      />
    </>
  );
}
