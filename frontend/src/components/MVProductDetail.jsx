import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';

// Import style slick-carousel (cần cài slick-carousel qua npm)
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const images = [
  "https://pos.nvncdn.com/9015cb-66930/ps/20250714_Q2kEr04UPw.jpeg?v=1752475266",
  "https://pos.nvncdn.com/9015cb-66930/ps/20250714_1RSUipAIHT.jpeg?v=1752475271",
  "https://pos.nvncdn.com/9015cb-66930/ps/20250714_0S2Hsl88aJ.jpeg?v=1752475278",
  "https://pos.nvncdn.com/9015cb-66930/ps/20250714_m6GUK8m55O.jpeg?v=1752475285",
  "https://pos.nvncdn.com/9015cb-66930/ps/20250714_yKTkp0b86w.jpeg?v=1752475290",
  "https://pos.nvncdn.com/9015cb-66930/ps/20250714_gi178n1itp.jpeg?v=1752475298",
  "https://pos.nvncdn.com/9015cb-66930/ps/20250714_63itUbJu1E.jpeg?v=1752475421",
  "https://pos.nvncdn.com/9015cb-66930/ps/20250714_1luGxLeRmK.jpeg?v=1752475360",
  "https://pos.nvncdn.com/9015cb-66930/ps/20250714_RMCefJAzj6.jpeg?v=1752475311",
];

export default function ProductImageGallery() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      {/* Ảnh lớn */}
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        arrows={false}
        fade={true}
      >
        {images.map((src, index) => (
          <Box key={index}>
            <img
              src={src}
              alt={`Product image ${index + 1}`}
              style={{ width: '100%', display: 'block', borderRadius: 4 }}
              loading="lazy"
            />
          </Box>
        ))}
      </Slider>

      {/* slider thumbnail */}
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={6}
        swipeToSlide={true}
        focusOnSelect={true}
        centerMode={false}
        arrows={true}
        infinite={false}
        sx={{ marginTop: 2 }}
      >
        {images.map((src, index) => (
          <Box key={index} sx={{ padding: 0.5 }}>
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: 80,
                height: 80,
                objectFit: 'cover',
                borderRadius: 4,
                cursor: 'pointer',
              }}
              loading="lazy"
            />
          </Box>
        ))}
      </Slider>

      <Typography align="center" sx={{ mt: 1, fontSize: 14, color: 'text.secondary' }}>
        Xem hình thực tế sản phẩm
      </Typography>
    </Box>
  );
}
