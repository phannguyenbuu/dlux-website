import React, { useState, useEffect, useRef  } from 'react';
import ReactDOM from 'react-dom/client';

import LayoutCommon from './common';

import BannerImageWidget from '../../components/BannerImageWidget';
import UseIsMobile from '../../components/hooks/UseIsMobile';
import BlogWrapper from '../../components/BlogWrapper';
import quickLinks from './json/quickLinks.json';
import blogs from './json/blog.json';
// import preciseLinks from './json/precise.json';

window.TITLE = 'EcoMove - Blog';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
        
        <LayoutCommon quickLinks={quickLinks} menuLeft='60'>
            <BannerImageWidget
                image='/images/eco(10).jpg'
                image_offset_y='-100px'
                height='400px'
                title='BLOG'
                content='Tin tức mỗi ngày'
            />
            <BlogWrapper blogs={blogs}/>
        </LayoutCommon>
    </React.StrictMode>
  );
}
