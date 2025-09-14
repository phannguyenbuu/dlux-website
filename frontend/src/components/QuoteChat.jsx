import React from 'react';
import UseIsMobile from './hooks/UseIsMobile';

const QuoteButton = ({ title, top, fillcolor="#007bff", href }) => {
    const isMobile = UseIsMobile();

  return (
    <a href={href}>
      <div style={{
        position: 'fixed',
        top: top,
        left: isMobile ? '80vw' : '90vw',
        width: 60,
        height: 60,

        border: 'none',
        
        cursor: 'pointer',
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        transition: 'opacity 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      aria-label={title}
      title={title}
    >
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" 
            fill={fillcolor}
            viewBox="0 0 122.88 108.51">
                <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="1" />
                    </filter>
                </defs>
                <ellipse 
    cx="61.5"   // tâm X, khoảng giữa viewbox (123/2)
    cy="50"   // tâm Y, khoảng giữa viewbox (109/2)
    rx="60"     // bán trục ngang
    ry="48"     // bán trục dọc
    fill="#dde6f0"  // màu nền bạn muốn, có thể thay đổi
    opacity="0.50"
  />            
        <path fill="#ffffff" d="M63.09,0h.07C79.87.55,94.88,6.5,105.63,15.71c11,9.46,17.65,22.35,17.23,36.44v0a43.29,43.29,0,0,1-7.66,23.16A55.15,55.15,0,0,1,95.63,92.62a72.81,72.81,0,0,1-28.39,8.64,62.2,62.2,0,0,1-26.46-3.42L5.31,108.51,15.49,82.85a49,49,0,0,1-10-12.29A40.8,40.8,0,0,1,.24,45.81,45.39,45.39,0,0,1,10,22.61,55.78,55.78,0,0,1,26.33,8.8,67.06,67.06,0,0,1,43.85,2,73.89,73.89,0,0,1,63.07,0ZM44,35.19h8.11a5.68,5.68,0,0,1,5.67,5.67c0,11.67,3,24.49-11.32,28.15-6.48,1.66-8.17-5.48-1.28-6,4.2-.3,5-3,5.16-7.12H43.79a5.68,5.68,0,0,1-5.67-5.67V41A5.86,5.86,0,0,1,44,35.19Zm26.77,0h8.1a5.69,5.69,0,0,1,5.68,5.67c0,11.67,3,24.49-11.33,28.15-6.48,1.66-8.17-5.48-1.27-6,4.2-.3,5-3,5.15-7.12h-6.5a5.68,5.68,0,0,1-5.67-5.67V41a5.85,5.85,0,0,1,5.84-5.84ZM62.86,9.4H62.8A64.24,64.24,0,0,0,46,11.1,57.64,57.64,0,0,0,31,17,46.7,46.7,0,0,0,17.38,28.41a35.94,35.94,0,0,0-7.81,18.4,31.49,31.49,0,0,0,4,19.12A41.23,41.23,0,0,0,24,77.77l2.73,2.16-5.55,14,20-6,1.5.59A52.84,52.84,0,0,0,66.47,91.9a63.56,63.56,0,0,0,24.72-7.54,45.76,45.76,0,0,0,16.26-14.27,34,34,0,0,0,6-18.17v0c.32-11.11-5-21.4-14-29-9.21-7.9-22.15-13-36.65-13.44Z"/>
        
        
            </svg>


      </div>
    </a>
  );
};

export default QuoteButton;
