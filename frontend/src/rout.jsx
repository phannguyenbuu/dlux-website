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

window.TITLE = 'EcoMove - Route';

const desc = `Tần suất: 20+ lượt/ngày
      |Khung giờ linh hoạt: 05:00 – 22:00
      |Loại xe: 4 chỗ, 7 chỗ, có điều hòa
      |Giá vé: Chỉ Từ 120.000đ/người
      |Hình thức đặt: Gọi hotline / Gửi thông tin online
      |Thời gian di chuyển: Khoảng 1 giờ 30 phút
      |Miễn phí thay đổi giờ
      |Có ưu đãi nhóm 3 người trở lên`

const routes = [
  {
    title: 'HÀ NỘI - VĨNH PHÚC',
    widget: <PriceWidget image="https://images.unsplash.com/photo-1730201078353-d2ad6cb2d6d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Thông tin tuyến: 60 KM"
                        description={desc}
                        button="Đặt Xe Ngay"
                        />
  },
  {
    title: 'VĨNH PHÚC - HÀ NỘI',
    widget: <PriceWidget image="https://images.unsplash.com/photo-1643163593053-e2aa4c06d59d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Thông tin tuyến: 60 KM"
                        description={desc}
                        button="Đặt Xe Ngay"
                        />
  },
  {
    title: 'CÁC TUYẾN KHÁC',
    widget: <PriceWidget image="https://images.unsplash.com/photo-1578874619862-55fc955ad118?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Các tuyến khác"
                        description='Đang cập nhật'
                        button="Liên Hệ"
                        />

    
  },
];

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <LayoutCommon>
                
                    <BannerImageWidget image='/images/eco(10).jpg'
                                    image_offset_y='-100px'
                                    height='400px'
                                    title='TUYẾN ĐƯỜNG'
                                    content='Tuyến phổ biến mỗi ngày'
                    />
                             
                
                    <NavTabWidget navdata={routes} />
                
                
            </LayoutCommon>
        </React.StrictMode>
    );
}