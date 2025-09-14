import React, { useState, useEffect } from 'react';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import { Stack, Box } from '@mui/material';

import 'rc-menu/assets/index.css';
import './Component.css';
import UseIsMobile from './hooks/UseIsMobile';

const HamburgerIcon = ({ onClick, open }) => (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      style={{
        position:'relative',
        fontSize: 24,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-block',
        left: '-50vw',
        top: 30,
        padding: 8,
        width: 50,
      }}
    >
      {open ? '✕' : '☰'}
    </button>
);

function MenuList({ menus }) {
  const isMobile = UseIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const handleMenuClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false); // ẩn menu khi chọn item trên mobile
    }
  };

  function getHref(href){
    // console.log('HREF',window.location.href 
    //            , window.location.href.split('/').filter(Boolean));

    return window.location.href 
          && (!href.includes('rout'))
          && (!href.includes('introduce'))
                && window.location.href.split('/').filter(Boolean).length === 4
                      ? href.replace('#', '')
                      : href;
  }

  return (
    <nav>
      {/* Hamburger icon chỉ hiện trên mobile */}
      {isMobile && <HamburgerIcon onClick={toggleMobileMenu} open={mobileMenuOpen} />}

      {/* Menu */}
      {( !isMobile || (isMobile && mobileMenuOpen) ) && (
        <Menu
          mode={isMobile ? 'inline' : 'horizontal'}
          style={{
            cursor: 'pointer',
            marginTop: 30,
            maxWidth: isMobile ? '100%' : 680,
            maxHeight: isMobile ? '100vh' : 60,
            border: 'none',
            whiteSpace: 'nowrap',
            backgroundColor: isMobile ? '#050e20' : 'transparent',
            background: isMobile ?'url("images/panelBK_001.svg")':'none',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
     
            position: isMobile ? 'absolute' : 'static',
            top: isMobile ? 50 : 'auto',
            left: 0,
            right: 0,
            zIndex: 999,
            boxShadow: isMobile ? '0 2px 10px rgba(0,0,0,0.15)' : 'none',
          }}
          triggerSubMenuAction={isMobile ? 'click' : 'hover'}
          onClick={handleMenuClick} // thêm xử lý đóng menu khi click
        >
          {menus.map(({ title, href, choices }, index) =>
            choices && choices.length > 0 ? (
              <SubMenu key={`submenu-${index}`} title={title}>
                {choices.map(({ text, href: choiceHref }, cIndex) => (
                  <MenuItem key={`submenu-item-${cIndex}`}>
                    {choiceHref ? (
                      <a href={choiceHref} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {text}
                      </a>
                    ) : (
                      text
                    )}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem key={`menuitem-${index}`}>
                <a href={getHref(href)}
                  style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'inherit' }}>
                  {title}
                </a>
              </MenuItem>
            )
          )}
        </Menu>
      )}
    </nav>
  );
}

export default MenuList;
