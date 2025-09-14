import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Component.css';
import UseIsMobile from "./hooks/UseIsMobile";


export default function Slick({ slides }) {
  const isMobile = UseIsMobile();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,   // hiển thị nút prev/next
    responsive: [
      {
        breakpoint: 768,  // dưới 480px (điện thoại nhỏ)
        settings: {
          arrows: false,
          dots: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div
  style={{
    position: 'relative',
    maxWidth: '100vw',
    margin: isMobile ? '0px auto' : '120px auto',
  }}
>

      
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} style={{ position: 'relative',  }}>
            <div style={{
              left:0, 
              top:0,
              height: 800, 
              overflow: 'hidden', 
              display: 'flex',      // thêm flex container
              justifyContent: 'flex-end',  // căn sang phải theo trục chính (ngang)
              alignItems: 'center'  // căn giữa theo dọc nếu cần
            }}>
                <img 
                    src={slide.imageUrl} 
                    alt={slide.title} 
                    style={{ left:0, top:0, width: "auto", height: "100%", marginTop: `${slide.top}px`, objectFit: "cover" }}
                />
            </div>
            
            <h3 style={{ color: '#fff', position: 'relative', 
                fontSize: isMobile ? 18 : 40, 
                fontWeight: 700, 
                top: isMobile ? -250 : -200, 
                left: isMobile ? 20: 100, 
                textTransform:'uppercase' }}>
                    {slide.title}
            </h3>

            <p style={{ color: '#fff', position: 'relative', 
              fontSize: isMobile ? 12 : 20, 
              fontWeight: 300, 
              top: isMobile ? -250 : -200, 
              left: isMobile ? 20 : 100,
              textTransform:'uppercase'
             }}>
                {slide.description}
            </p>
            
          </div>
        ))}
      </Slider>
    </div>
  );
}
