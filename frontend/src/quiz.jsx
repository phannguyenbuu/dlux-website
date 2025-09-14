import React, { useState, useEffect, useRef  } from 'react';
import ReactDOM from 'react-dom/client';

import LayoutCommon from './common';

import BannerImageWidget from '../../components/BannerImageWidget';
import BlogWrapper from '../../components/BlogWrapper';

import quiz from './json/quiz.json';
import './css/quiz.css';

window.TITLE = 'EcoMove - Blog';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
        <LayoutCommon menuLeft='60'>
            <BannerImageWidget image='/images/eco(10).jpg'
                    image_offset_y='-100px'
                    height='400px'
                    title='HỎI ĐÁP'
                    content='Giải Đáp mọi thắc mắc nhé!'
            />
            <BlogWrapper blogs={quiz} item_height={180}/>
        </LayoutCommon>
    </React.StrictMode>
  );
}


