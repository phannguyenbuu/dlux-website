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

window.TITLE = 'EcoMove - Contact';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <LayoutCommon quickLinks = {quickLinks}>
                <div style={{ marginTop: 120 }}>
                    <BannerImageWidget image='/images/eco(10).jpg'
                                    image_offset_y='-100px'
                                    height='400px'
                                    title='LIÊN HỆ ĐẶT XE'
                                    content='Cần đi ngay hoặc đặt trước?'
                    />

                    <ContactWidget bannerData = {{
                        'image1':'',
                        'image2':'https://images.unsplash.com/photo-1577260382275-88739b8ba8a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        'title':'Liên Hệ',
                        'subTitle':'Gọi 1900 xxx xxx để được tư vấn và sắp xếp xe trong vài phút',
                        'description': 'Hoặc nhấn "Đặt Vé Ngay", EcoMove sẽ liên hệ lại ngay',
                        'inputs':`-Họ và tên
                        |Điện thoại
                        |-Số lượng vé
                        |Số lượng trẻ em < 6 tuổi
                        |Địa chỉ đón
                        |Địa chỉ trả
                        |-Ngày đi
                        |Giờ đi`,
                        'imageClass':'image-dark-2',
                        'button':'Đặt Vé Ngay',
                        'buttonUrl':'/contact',
                    }} />

                </div>
            </LayoutCommon>
        </React.StrictMode>
    );
}