import React, { useState, useEffect } from 'react';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import { Stack, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'rc-menu/assets/index.css';
import './Component.css';
import UseIsMobile from './hooks/UseIsMobile';
import { Link } from 'react-router-dom';
import '../css/style.css';
import menus from '../json/menus.json';

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

function MenuList() {
  const isMobile = UseIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const handleMenuClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false); // ẩn menu khi chọn item trên mobile
    }
  };

  const navigate = useNavigate();
  const handleClick = (href) => {

    console.log('Href', href);
    navigate(href.startsWith('/') ? href : '/' + href);
  };

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
            mt: 30,
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
              <MenuItem onClick={() => handleClick(href)}
                  style={{ textTransform: 'uppercase', textDecoration: 'none', color: 'inherit' }}>
                  {title}
              </MenuItem>
          )}

        </Menu>
      )}
    </nav>
  );
}

export default MenuList;
