import React from "react";
import './Component.css';
import { useNavigate } from 'react-router-dom';
import UseIsMobile  from './hooks/UseIsMobile';

const LayoutWidgetBase = ({ color1, color2, bannerData, noImage = 'false'}) => 
  {
    const isMobile = UseIsMobile();
  
    return (
  <>
    {noImage !== "true" ?
    <style>
        {`
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
            z-index: 0;
        }
        

        .image-dark-1:before {
          position: absolute;
            content: '';
            top: 150px;
            width: 600px;
            height: 500px;
            opacity: 0.75;
            background: #08270f; /* lớp phủ đen mờ */
            pointer-events: none;
            z-index: 0;
        }

        .image-dark-2:before {
            position: absolute;
            content: '';
            top: 20px;
            left: 200px;
            width: 850px;
            height: 700px;
            border-radius: 10px;
            opacity: 0.75;
            background: #08270f; /* lớp phủ đen mờ */
            pointer-events: none;
            z-index: 0;
        }
        /* Các style chung cho .image-dark:before, input, button */

        /* Thêm style cho placeholder */
        input::placeholder {
          color: grey !important; /* Đặt màu xám, dùng !important để đảm bảo ghi đè */
          opacity: 1; /* Một số trình duyệt giảm opacity mặc định của placeholder */
        }

        /* Style cho input chung */
        input {
          display: block;
          margin-top: 15px;
          padding: 10px;
          border-radius: 8px;
          border: none;
          font-size: 14px;
          width: 40vw;
          color: #fff; /* Màu chữ khi người dùng gõ vào */
        }

 @media screen and (max-width: 1000px) {
 .image-dark-2:before {
 left:0;
 height: 150vh;
        }
        }

      `}
    </style>:
    <style>
        {`
        image-dark-* {
          background: #fff !important;
        }
        `}
    </style>
    };

    <section
      style={{ marginTop:window.SECTION_MARGIN_TOP, width: '100vw', 
        display: 'flex', height: isMobile ? 'auto':700,
        minHeight: isMobile ? '200vh' : '',
        flexDirection: isMobile ? "column" :  "row",
        overflow:'hidden' }}
    >

      {bannerData.image1 !== '' ? (
        <div name='left'
          style={{
            flex: 8,
            backgroundImage: noImage === "true" ? 'none': `url('${bannerData.image1}')`,
            backgroundSize: isMobile ? "contain" : "cover",
            backgroundRepeat: "no-repeat",
            width: isMobile ? '100vw' : 'auto',
            backgroundPosition: "center center",
          }}
        />
      ) : null}



      <div
        style={{
            flex: 1,
          backgroundImage: noImage === "true" ? 'none': `url('${bannerData.image2}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          position:  'relative', 
          width: isMobile ? '100vw' : 'auto',
          height: isMobile ? '50vh' : 'auto',
          zIndex: 1,
          paddingLeft: isMobile ? 0 : (bannerData.image1 !== '' ? 0: 200),

        }}
        
        className={bannerData.imageClass}
      >
            <h1 style={{ position:'relative', marginBottom:30, top:isMobile ? 0: 50, left: 50, color: '#fff' }}>
              {bannerData.title}</h1>
            <p style={{ position:'relative', top:50, left: 50, color: '#afafaf' }}>{bannerData.subTitle}</p>

            {bannerData.description && bannerData.description.split('|').map((element, index) => (
                <p
                    key={index}
                    style={{
                    position:'relative',
                    top: 30,
                    left: 50,
                    width: isMobile ? '80vw': '40vw',
                    color: '#fff'
                    }}
                >
                    {element}
                </p>
                ))}

                {bannerData.inputs && (() => {
            const arr = bannerData.inputs.split('|');
            const result = [];

            for (let i = 0; i < arr.length; i++) {
              if (arr[i].startsWith('-')) {
                // Bỏ dấu '-' ở đầu để làm placeholder cho đẹp
                const firstPlaceholder = arr[i].slice(1).trim();

                // Lấy phần tử kế tiếp, nếu có
                const secondPlaceholder = arr[i + 1] ? arr[i + 1].trim() : null;

                result.push(
                  <div 
                    key={`pair-${i}`} 
                    style={{ display: isMobile ? 'block':'flex', 
                      gap: '10px', width: isMobile ? '100vw': '40vw', position: 'relative', top: 30, left: 50, marginBottom: 15 }}
                  >
                    <input 
                      type="text" 
                      placeholder={firstPlaceholder}
                      style={{ flex: 1, color: '#000', padding: 8, borderRadius: 6, 
                        width: isMobile ? '80vw' : 'auto',
                        border: '1px solid #ccc' }}
                    />
                    {secondPlaceholder && (
                      <input 
                        type="text" 
                        placeholder={secondPlaceholder}
                        style={{ flex: 1, color: '#000', padding: 8, borderRadius: 6, 
                          width: isMobile ? '80vw' : 'auto',
                          border: '1px solid #ccc' }}  
                      />
                    )}
                  </div>
                );

                i++; // Bỏ qua phần tử kế tiếp vì đã dùng
              } else {
                // Trường hợp không bắt đầu '-', render input đơn
                result.push(
                  <input
                    key={`single-${i}`}
                    type="text"
                    placeholder={arr[i]}
                    style={{ 
                      display: 'block',
                      color: '#000', 
                      padding: 8, 
                      marginTop: 15, 
                      borderRadius: 6, 
                      border: '1px solid #ccc',
                      position: 'relative', 
                      width: isMobile ? '80vw' : '40vw',
                      top: 30, 
                      left: 50
                    }}
                  />
                );
              }
            }
            return result;
          })()}

      { bannerData.button && bannerData.button != '' ?
      <button
        style={{ position: 'relative', marginLeft: 50, marginTop: 35, textTransform: 'uppercase' }}
        onClick={() => window.location.href = bannerData.buttonUrl}
        >
        {bannerData.button}
      </button> : null
      }

    </div>

      

    </section>
  </>
);
  }
export default LayoutWidgetBase;
