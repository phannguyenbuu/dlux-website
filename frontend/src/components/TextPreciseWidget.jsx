import React from 'react';
import ReactDOM from 'react-dom/client';
import BannerImageWidget from './BannerImageWidget';

export default function TextPreciseWidget({ infor }) {
    return (
    <>
      <BannerImageWidget
        image="/images/eco(10).jpg"
        image_offset_y="-100px"
        height="400px"
        title={infor.title}
        content="CHÍNH SÁCH"
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <textarea
          style={{ width: '80vw', minHeight: '50vh' }}
          defaultValue={infor.content}
        />
      </div>
    </>
  );
}