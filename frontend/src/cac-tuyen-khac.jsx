import React from 'react';
import ReactDOM from 'react-dom/client';
import LayoutCommon from './common';
import BannerImageWidget from '../../components/BannerImageWidget';
import quickLinks from './json/quickLinks.json';

window.TITLE = 'EcoMove - Route';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <LayoutCommon quickLinks = {quickLinks}>
                
                    <BannerImageWidget image='/images/eco(10).jpg'
                                    image_offset_y='-100px'
                                    height='400px'
                                    title='CÁC TUYẾN KHÁC'
                                    content='Đang cập nhật'
                    />
                             
                
                
            </LayoutCommon>
        </React.StrictMode>
    );
}