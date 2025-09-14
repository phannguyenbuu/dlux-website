import React from 'react';

const NotificationBell = ({ hasNotification }) => {
  const bellSize = 40;

  return (
    <div style={{ position: 'relative', marginLeft:200,
       width: bellSize, height: bellSize, cursor: 'pointer' }}>
      {/* Icon chuông */}
      <svg
        viewBox="0 0 24 24"
        fill="#747474"
        stroke="none"
        width={bellSize}
        height={bellSize}
        style={{ color: '#333' }}
      >
        {/* Vòng tròn bao quanh */}
        <circle
          cx="10"
          cy="10"
          r="10"
          fill="none"
          stroke="#747474"
          strokeWidth="0.5"
        />
        {/* Nhóm path chuông đã scale và tịnh tiến vào giữa */}
        <g transform="scale(0.6) translate(3,3)">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </g>
      </svg>


      {/* Dấu đỏ góc trên bên phải */}
      {hasNotification && (
        <span
          style={{
            position: 'absolute',
            top: 2,
            right: 2,
            width: 10,
            height: 10,
            backgroundColor: 'red',
            borderRadius: '50%',
            border: '2px solid white',
            boxSizing: 'content-box',
          }}
        />
      )}
    </div>
  );
};

export default NotificationBell;
