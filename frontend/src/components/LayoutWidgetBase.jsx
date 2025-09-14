import React from "react";
import './Component.css';
import { useNavigate } from 'react-router-dom';
import UseIsMobile from './hooks/UseIsMobile';
import { Stack, Box, Button, Typography } from '@mui/material';

const LayoutWidgetBase = ({ color1, color2, bannerData, noImage = 'false',...props }) => {
  const isMobile = UseIsMobile();

  return (
    <>
      
      <section
        style={{
          width: '100vw',
          display: 'flex',
          height: isMobile ? 'auto' : 700,
          minHeight: isMobile ? '200vh' : '',
          flexDirection: isMobile ? 'column' : 'row',
          overflow: 'hidden',
        }}
      >
        {bannerData.image1 !== '' && (
          <div
            name="left"
            style={{
              flex: 1,
              backgroundImage: noImage === "true" ? 'none' : `url('${bannerData.image1}')`,
              backgroundSize: isMobile ? "contain" : "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          />
        )}

        

        <div
          style={{
            flex: 1,
            backgroundImage: noImage === "true" ? 'none' : `url('${bannerData.image2}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            position: 'relative',
            width: isMobile ? '100vw' : 'auto',
            height: isMobile ? '50vh' : 'auto',
            zIndex: 1,
            paddingLeft: isMobile ? 0 : (bannerData.image1 !== '' ? 0 : 200),
          }}
          className={bannerData.imageClass}
        >
          <h1 style={{ position: 'relative', marginBottom: 30, top: isMobile ? 0 : 50, left: 50, color: '#fff' }}>
            {bannerData.title}
          </h1>

          {props.children}
          
          <p style={{ position: 'relative', top: 50, left: 50, color: '#afafaf' }}>
            {bannerData.subTitle}
          </p>

          

          {bannerData.description && bannerData.description.split('|').map((element, index) => (
            <p
              key={index}
              style={{
                position: 'relative',
                top: 30,
                left: 50,
                width: isMobile ? '80vw' : '40vw',
                color: '#fff',
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
                const firstPlaceholder = arr[i].slice(1).trim();
                const secondPlaceholder = arr[i + 1] ? arr[i + 1].trim() : null;

                result.push(
                  <div
                    key={`pair-${i}`}
                    style={{
                      display: isMobile ? 'block' : 'flex',
                      gap: '10px',
                      width: isMobile ? '100vw' : '40vw',
                      position: 'relative',
                      top: 30,
                      left: 50,
                      marginBottom: 15,
                    }}
                  >
                    <input
                      type="text"
                      placeholder={firstPlaceholder}
                      style={{
                        flex: 1,
                        color: '#000',
                        padding: 8,
                        borderRadius: 6,
                        width: isMobile ? '80vw' : 'auto',
                        border: '1px solid #ccc',
                      }}
                    />
                    {secondPlaceholder && (
                      <input
                        type="text"
                        placeholder={secondPlaceholder}
                        style={{
                          flex: 1,
                          color: '#000',
                          padding: 8,
                          borderRadius: 6,
                          width: isMobile ? '80vw' : 'auto',
                          border: '1px solid #ccc',
                        }}
                      />
                    )}
                  </div>
                );

                i++;
              } else {
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
                      left: 50,
                    }}
                  />
                );
              }
            }
            return result;
          })()}

          {bannerData.button && bannerData.button !== '' && (
            <Button
              type="button"
              sx={{
                width: 320,
                height: 60,
                borderRadius: 5,
                fontSize: 20,
                marginTop: 10,
                marginLeft: 12,
                color: '#fff',
                textTransform: 'none',
                boxShadow: '0 0 15px 5px rgba(165, 219, 255, 0.6)',
                background: 'linear-gradient(0deg, #65ceffff 0%, #00a6ffff 30%,#00a6ffff 70%, #65ceffff 100%)',
              }}
            >
              SEND
            </Button>
          )}
        </div>
      </section>
    </>
  );
};

export default LayoutWidgetBase;
