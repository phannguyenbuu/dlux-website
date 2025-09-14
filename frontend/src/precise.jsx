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

const blogs = [{title:'CHÍNH SÁCH',date:'22/7/2025', 
    content:`Triển khai chính sách thu nhập cao, thưởng rõ ràng, 
    |chế độ đãi ngộ toàn diện như đảm bảo thu nhập 
    |tối thiểu 600.000 đồng/ngày trong 60 ngày đầu,
    |hỗ trợ 24/7 cùng môi trường làm việc chuyên nghiệp
    |Chính sách linh động cho tài xế, cho phép hoạt động dịch vụ riêng lẻ 
    |thay vì phải đăng ký gói dịch vụ, đồng thời có chương trình hỗ trợ thuê 
    |hoặc mua xe điện từ đối tác`},
            {title:'Title 2',date:'22/7/2025', content:'Content2'},
            {title:'Title 3',date:'22/7/2025', content:'Content3'},
            {title:'Title 5',date:'22/7/2025', content:'Content4'}
            ];


window.TITLE = 'EcoMove - Blog';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <LayoutCommon quickLinks = {quickLinks}>
                
                    <BannerImageWidget image='/images/eco(10).jpg'
                                    image_offset_y='-100px'
                                    height='400px'
                                    title='CHÍNH SÁCH'
                                    content='CHÍNH SÁCH ĐỐI VỚI KHÁCH HÀNG VÀ TÀI XẾ'
                    />

                    <YouTubeVideoWidget videoId = "x5U8YI017P0"/>

                    <div className='homepage-container' id="precise">
                            <style>
        {`
        

            #precise li {
                border: none !important;
            }

            


        `}
        </style>
                        <SvgGalleryWidget rows='2' show_button='' images={[
                        {
                            src: "https://images.unsplash.com/photo-1473655587843-eda8944061e8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            caption: "Các công ty được đề xuất hoặc triển khai chương trình an sinh xã hội phù hợp với, đặc tính việc làm và thu nhập, đặc biệt với nhóm tài xế xe công nghệ để đảm bảo quyền lợi trong bối cảnh phát triển nhanh chóng của ngành",
                        },
                        {
                            src: "https://images.unsplash.com/photo-1617285962341-73ee07b22ea2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                            caption: "Ưu tiên phát triển công nghệ xanh và đội xe điện cùng hệ thống trạm sạc nhanh và bảo trì chuyên biệt nhằm giảm chi phí hoạt động và ô nhiễm môi trường,Ứng dụng trí tuệ nhân tạo (AI) để nâng cao trải nghiệm người dùng và hỗ trợ tài xế cũng như đối tác nhà hàng",
                        },
                        
                    ]}/>
                    </div>


                    <LayoutWidgetBase  color1 = "#51be78" color2 = "#373733"
            bannerData = {{ 
            "image1":"",
            "image2":"https://images.unsplash.com/photo-1554731617-8eafa9975365?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title":blogs[0].title,
            "subTitle": blogs[0].date,
            "description": blogs[0].content,
            "applyLink":"/blog",
            'imageClass':'image-dark-2',
            "button": "Xem thêm",
            "buttonUrl": "/blog" }}
        />

                   

            </LayoutCommon>
        </React.StrictMode>
    );
}