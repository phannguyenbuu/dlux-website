import React from "react";
import './Component.css';
import LayoutWidgetBase from './LayoutWidgetBase';
import UseIsMobile from "./hooks/UseIsMobile";

export default function BlogWidget({subDomain, blogs}) {
    const isMobile = UseIsMobile();
  const main_blog = blogs[0];
  const blog_infors = blogs.slice(1);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Component base từ LayoutWidgetBase */}
      <LayoutWidgetBase  color1 = "#51be78" color2 = "#373733"
          bannerData = {{ 
            "image1":"/images/eco(6).jpg",
            "image2":"https://images.unsplash.com/photo-1554731617-8eafa9975365?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "title":"Blog",
            "subTitle": "TIN TỨC ĐƯỢC CẬP NHẬT MỖI NGÀY",
            "description": '',
            
            'imageClass':'image-dark',
            "button": "Xem Blog",
            "buttonUrl": "/ecomove/blog" }}
          />
      
      {/* Các items nổi lên trên (overlay) */}
      <div
        style={{
          position: "absolute",
          top: 10, // căn chỉnh theo ý bạn
          right: 10,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "8px",
          pointerEvents: "none", // để không chặn sự kiện chuột từ items dưới
          zIndex: 10,
          padding: 20,
        }}
      >
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12, // khoảng cách giữa ảnh và text
            marginBottom: 16,
            marginLeft: isMobile ? 50 : '50vw',
            marginTop: isMobile ? 500 : 0,
            }}
        >
            <a href = {`/${subDomain}/blog`} style={{marginTop:-120}}>
                <img
                src={main_blog.image}
                alt={main_blog.title}
                
                style={{  marginTop: isMobile ? -100 : 250, 
                    
                    width: isMobile ? 300 : '100%',
                    height: isMobile ? 200 : '100%', objectFit: "contain", borderRadius: 8 }}
                />
            </a>
            <div style={{marginTop: isMobile ? 0 : 120, transform: isMobile ? 'scale(0.75)' : ''}}>
                <p style={{color:'white', margin: 0, fontWeight: "bold" }}>{main_blog.title}</p>
                <p style={{color:'white', margin: "4px 0" }}>{main_blog.content}</p>
                <p style={{margin: 0, color: "#AFAFAF", fontSize: 12 }}>{main_blog.date}</p>
            </div>
            
            
        </div>

        <div style={{left:50,}}>
            
            {blog_infors.map((infor, index) => (
                <div
                    key={index}
                    style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 16,
                    marginLeft: isMobile ? 50 : 0,
                    }}
                >
                    <a href={`/${subDomain}/blog`}>
                        <img
                            src={infor.image}
                            alt={infor.title || `image-${index}`}
                            style={{
                            width: isMobile ? 300: 200,
                            height: isMobile ? 'auto': 200,
                            objectFit: "contain",
                            }}
                        />
                    </a>
                    <div style={{marginTop: isMobile ? 0 : 0, transform: isMobile ? 'scale(0.75)' : ''}}>
                    <p style={{ color: "white", margin: 0, fontWeight: "bold" }}>
                        {infor.title}
                    </p>
                    <p style={{ color: "white", margin: "4px 0" }}>{infor.content}</p>
                    <p style={{ margin: 0, color: "#AFAFAF", fontSize: 12 }}>{infor.date}</p>
                    </div>
                </div>
                ))}

        </div>

        
      </div>
    </div>
  );
}
