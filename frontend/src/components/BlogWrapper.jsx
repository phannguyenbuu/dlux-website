
import React, { useState, useEffect, useRef  } from 'react';

import BlogPage from './/BlogPage';


import UseIsMobile from './hooks/UseIsMobile';

export default function BlogWrapper({blogs, item_height=220}) {
    const isMobile = UseIsMobile();
  // Giữ state bài blog đang được chọn, mặc định lấy blogs[0]
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);
    const [fade, setFade] = useState(true); // để bật/tắt hiệu ứng fade  

  // Hàm callback khi click vào blog item bên BlogPage
  const onSelectBlog = (blog) => {
    setFade(false); // bắt đầu fade out
    setTimeout(() => {
      setSelectedBlog(blog); // thay đổi nội dung sau khi fade out
      setFade(true);        // fade in trở lại
    }, 300); // thời gian fade out (ms), trùng với CSS transition bên dưới
  };

  const imgRef = useRef(null);

  useEffect(() => {
        function updatePosition() {
        const img = imgRef.current;
        if (!img) return;
        const vh = window.innerHeight;
        const eh = isMobile ? img.offsetHeight * 2 : img.offsetHeight * 1; 

        const top = (vh - eh) / 2;
        img.style.position = 'fixed';
        img.style.top = top + 'px';
        img.style.left = '0px'; // tùy chỉnh
        }

        
            updatePosition();
            window.addEventListener('resize', updatePosition);
        
        return () => {
        window.removeEventListener('resize', updatePosition);
        }
    
  }, [selectedBlog]);
  


  return (
    <>
      

      <BlogPage
        subDomain='ecomove'
        isHalf='false'
        main_blog={blogs[0]}
        blog_infors={blogs.slice(1)}
        onSelectBlog={onSelectBlog}
        item_height = {item_height}
      />

      <div
        id='imgView'
        ref={imgRef}
        style={{
          position: 'sticky',
          top:0,
          width: isMobile ? '100vw': '40vw',
          height: isMobile?200: 400,
          backgroundImage: `url('${selectedBlog.image}')`,
          marginBottom: isMobile ? 200 : 0,
          backgroundSize: isMobile ? 'contain' : 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          padding: 50,
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.3s ease',
          color: 'black',
        }}
      >
        <div
          style={{
            display: 'block',
            position: 'relative',
            top: 10,
            borderRadius: 5,
            backgroundColor: 'rgba(255,255,255,0.75)',
            width: isMobile ? '80vw':'auto',
          }}
        >
          <p style={{ fontSize: isMobile ? 10 : 'auto', marginLeft: 20, marginTop: isMobile ? 100 : 300 , fontWeight: 'bold' }}>
            {selectedBlog.title}
          </p>
          <p style={{ fontSize: isMobile ? 10 : 'auto', marginLeft: 20, marginTop: 0 }}>
            {selectedBlog.content}
          </p>
          <p style={{ fontSize: isMobile ? 6 : 'auto', marginLeft: 20, marginTop: 0, color: '#313131', fontSize: 12 }}>
            <i>{selectedBlog.description || selectedBlog.date}</i>
          </p>
        </div>
      </div>
</>    
  );
}
