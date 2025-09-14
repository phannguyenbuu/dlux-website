import React from "react";
import './Component.css';
import LayoutWidgetBase from './LayoutWidgetBase';
import UseIsMobile from "./hooks/UseIsMobile";

export default function BlogPage({subDomain, isHalf = 'true', 
    item_height, blog_infors, onSelectBlog }) {
  const isMobile = UseIsMobile();
  const infor = blog_infors[0];

  return (
      <>
        
        <div className='blog-bk' 
          style={{position:'relative', left: isMobile ? 0:'50vw', 
            height:item_height * blog_infors.length}}>
            

            {blog_infors.map((infor, index) => (
                <div
                    key={index}
                    onClick={() => onSelectBlog(infor)} 
                    style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 16,
                    marginLeft: isMobile ? 0 : 0,
                    width: isMobile ? '100vw':'auto'
                  }}
                >
                    
                    <img
                        src={infor.image}
                        alt={infor.title || `image-${index}`}
                        style={{
                        width: isMobile ? 150: 200,
                        height: isMobile ? 'auto': 200,
                        objectFit: "contain",
                        }}
                    />
                    
                    <div style={{marginTop: isMobile ? 0 : 0, transform: isMobile ? 'scale(0.75)' : ''}}>
                      <p style={{ fontSize: isMobile ? 16 : 'auto', color: "white", margin: 0, fontWeight: "bold" }}>
                          {infor.title}
                      </p>
                      <p style={{ fontSize: isMobile ? 14 : 'auto', color: "white", margin: "4px 0" }}>{infor.content}</p>
                      <p style={{ fontSize: isMobile ? 12 : 'auto', margin: 0, color: "#AFAFAF", fontSize: 12 }}>
                        <i>{infor.date}</i>
                      </p>
                    </div>
                </div>
                ))}

        </div>
  
    </>
  );
}
