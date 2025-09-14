import React from 'react';
import LayoutWidgetBase from '../../components/LayoutWidgetBase';
import ContactWidget from '../../components/ContactWidget';
import PriceWidget from '../../components/PriceWidget';
import LayoutCommon from './common';
import BannerImageWidget from '../../components/BannerImageWidget';
import quickLinks from './json/quickLinks.json';


function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')           // tách dấu tiếng Việt
    .replace(/[\u0300-\u036f]/g, '') // bỏ dấu
    .replace(/\s+/g, '-')       // thay khoảng trắng thành dấu -
    .replace(/[^\w\-]+/g, '')   // loại bỏ ký tự đặc biệt
    .replace(/\-\-+/g, '-')     // thay nhiều dấu - thành 1 dấu -
    .replace(/^-+/, '')         // xóa dấu - ở đầu
    .replace(/-+$/, '');        // xóa dấu - ở cuối
}


const desc = `Tần suất: 20+ lượt/ngày
      |Khung giờ linh hoạt: 05:00 – 22:00
      |Loại xe: 4 chỗ, 7 chỗ, có điều hòa
      |Giá vé: Chỉ Từ 120.000đ/người
      |Hình thức đặt: Gọi hotline / Gửi thông tin online
      |Thời gian di chuyển: Khoảng 1 giờ 30 phút
      |Miễn phí thay đổi giờ
      |Có ưu đãi nhóm 3 người trở lên`;

const routes = [
  {
    title: 'HÀ NỘI - VĨNH PHÚC',
    widget: (
      <PriceWidget
        image="https://images.unsplash.com/photo-1730201078353-d2ad6cb2d6d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Thông tin tuyến: 60 KM"
        description={desc}
        button="Đặt Xe Ngay"
      />
    ),
  },
  {
    title: 'VĨNH PHÚC - HÀ NỘI',
    widget: (
      <PriceWidget
        image="https://images.unsplash.com/photo-1643163593053-e2aa4c06d59d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Thông tin tuyến: 60 KM"
        description={desc}
        button="Đặt Xe Ngay"
      />
    ),
  },
  {
    title: 'CÁC TUYẾN KHÁC',
    widget: (
      <PriceWidget
        image="https://images.unsplash.com/photo-1578874619862-55fc955ad118?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Các tuyến khác"
        description="Đang cập nhật"
        button="Liên Hệ"
      />
    ),
  },
];

function RoutePage({images}) {
  return (
    <>
    
    <style>
        {`
        #ecomove-vinh-phuc-ha-noi h1, #ecomove-ha-noi-vinh-phuc h1 ,
        
        {
          margin-top: 250px !important;
          text-transform: uppercase !important;
        }

        @media screen and (max-width: 1000px) {
          #ecomove-vinh-phuc-ha-noi h1, #ecomove-ha-noi-vinh-phuc h1 
          {
            margin-top: 250px !important;
            font-size: 20px !important;
            width: 80vw;
          }

          p
          {
           width: 80vw !important;
           text-align:center;
          }
        }
        `}
    </style>

      <LayoutCommon quickLinks={quickLinks} menuLeft='220'>
        <BannerImageWidget
          image="/images/eco(10).jpg"
          image_offset_y="-100px"
          height="400px"
          title={"TUYẾN " + window.TITLE}
          content="Tuyến phổ biến mỗi ngày"
        />

        
      <div id = {slugify(window.TITLE)}>

        <LayoutWidgetBase  color1 = "#51be78" color2 = "#373733"

          bannerData = {{ 
            "image1":images[0],
            "image2":images[1],
            "title":"Khung giờ linh hoạt: 05:00 – 22:00",
            'subTitle':'Toàn bộ các xã phường',
            'description': `Bồ Đề, Cự Khối, Đức Giang, Gia Thụy, Giang Biên, Long Biên, Ngọc Lâm, Ngọc Thụy, Phúc Đồng, Phúc Lợi, Sài Đồng, Thạch Bàn, Thượng Thanh, Việt Hưng,...
            |Vĩnh Phúc, Tích Sơn, Hội Hợp, Đồng Tâm, Vĩnh Yên, Hùng Vương, Phúc Yên, Đồng Xuân, Hai Bà Trưng, Nam Viêm, Phúc Thắng, Tiền Châu, Xuân Hòa.`,

            'imageClass':'image-dark',
          }}
        />

        <LayoutWidgetBase bannerData = {{
            'image1':'',
            "image2":images[2],
            'title':'Loại xe: 4 chỗ, 7 chỗ',
            'description':`Toyota Yaris Cross 2023 (Euro 6)
|Volkswagen Polo 2022 (Euro 6)
|Nissan Sentra 2025 (Euro 6)
|Mazda CX-5 2020 (Euro 5)
|Hyundai Tucson 2022 (Euro 6)
|Kia Seltos 2020 (Euro 5)`,
            'subTitle':'Các dòng xe phát thải thấp',
            'imageClass':'image-dark-1',
          }} />

        <LayoutWidgetBase bannerData = {{
            "image1":images[3],
            "image2":images[4],
            "title":"Giá vé: Chỉ Từ 120.000đ/người",
            'description':`Giá mở cửa trung bình từ 24.000 - 30.000 đồng cho vài km đầu, với giá cước trung bình từ 7.500 - 15.000 đồng/km tùy hãng và khu vực.
|Ví dụ, một chặng 60 km, taxi thường có giá khoảng 450.000 - 900.000 đồng (tính sơ bộ theo giá 7.500 - 15.000 đồng/km), chưa kể phí chờ.
|Taxi 7 chỗ như Vinasun có giá mở cửa 12.000 đồng/0.5 km, sau đó khoảng 20.000 đồng/km đến 18.000 đồng/km cho quãng dài.
|Như vậy, giá đi taxi cho cùng đoạn đường có thể từ 500.000 đồng trở lên, cao hơn nhiều lần vé EcoMove.`,
            'imageClass':'image-dark',
          }} />

         <LayoutWidgetBase bannerData = {{
            'image1':images[5],
            "image2":images[6],
            'title':'Hình thức đặt vé',
            'description': 'Miễn phí thay đổi giờ|Thời gian di chuyển: Khoảng 1 giờ 30 phút|Có ưu đãi nhóm 3 người trở lên',
            'subTitle':'Gọi hotline / Gửi thông tin online',
            'imageClass':'image-dark-1',
          }} />
      </div>

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
      </LayoutCommon>

      
    </>
  );
}

export default RoutePage;