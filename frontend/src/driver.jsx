import React from 'react';
import ReactDOM from 'react-dom/client';
import DjangoListen from '../../components/DjangoListen';
import Slick from '../../components/Slick';
import SvgGalleryWidget from '../../components/SvgGalleryWidget';
import LayoutWidgetBase from '../../components/LayoutWidgetBase';
import YouTubeVideoWidget from '../../components/YouTubeVideoWidget';
import NavTabWidget from '../../components/NavTabWidget';
import PriceWidget from '../../components/PriceWidget';
import ContactWidget from '../../components/ContactWidget';
import LayoutCommon from './common';
import BannerImageWidget from '../../components/BannerImageWidget';
import quickLinks from './json/quickLinks.json';

window.TITLE = 'EcoMove - Driver';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <LayoutCommon quickLinks = {quickLinks} menuLeft='60'>
                 <BannerImageWidget image='/images/eco(10).jpg'
                                    image_offset_y='-100px'
                                    height='400px'
                                    title='TUYỂN TÀI XẾ'
                                    content='ĐĂNG KÝ LÀM TÀI XẾ ECOMOVE'
                    />

                    <ContactWidget bannerData = {{
        'image1':'/images/eco(6).jpg',
        'image2':'https://images.unsplash.com/photo-1632353407967-44d73046044d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'title':'Trung Tâm Tài Xế',
        'subTitle':'Vui lòng cung cấp các thông tin',
        'description': 'ĐĂNG KÝ LÀM TÀI XẾ ECOMOVE',
        'inputs':`-Họ và tên
        |Căn cước
        |-Ngày tháng năm sinh
        |Quê quán
        |-Bằng lái
        |Mã bằng lái`,
        'imageClass':'image-dark',
        'button':'Gửi Thông Tin'
      }} />
                
            </LayoutCommon>
        </React.StrictMode>
    );
}