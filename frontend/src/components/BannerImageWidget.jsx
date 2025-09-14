import React from "react";
import './Component.css';
import UseIsMobile from "./hooks/UseIsMobile";

const BannerImageWidget = ({image, image_offset_y, height, title, content, color1='#fff', color2 = '#fff' }) =>{
  const isMobile = UseIsMobile();
  return (
    <>
    <style>
        {`
        .image-dark {
          position: relative; /* phải có để :before định vị tuyệt đối */
        }
        .image-dark:before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.75;
            background: #08270f; /* lớp phủ đen mờ */
            pointer-events: none;
            z-index: 1;
        }
        `}
      </style>

    <section style={{
        width: '100vw', display:'flex', 
        flexDirection:'column',
        backgroundImage: `url('${image}')`,
        backgroundSize: isMobile ? "contain" : "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: isMobile? 'center':`center ${image_offset_y}`,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', 
        height: height,
        zIndex: 0,
        marginBottom: 10,
      }}
      
       className='image-dark'
      >
        <h1 style={{color:color1, textTransform:'uppercase',
          fontSize: isMobile?20 : 'auto',
           textShadow: window.TEXT_SHADOW, zIndex:2}}>
          {title}
        </h1>
        <p style={{color:color2, textTransform:'uppercase', zIndex: 2}}>
          {content}
        </p>
    </section>
    </>
)};

export default BannerImageWidget;
