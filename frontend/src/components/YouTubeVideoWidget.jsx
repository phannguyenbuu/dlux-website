import React, { useState } from "react";
import './Component.css';
import UseIsMobile from "./hooks/UseIsMobile";

const YouTubeVideoWidget = ({ videoId }) => {
  return (
    <div style={{
      position: 'relative',
      width: '90vw',
      maxWidth: '100%',
      paddingTop: '56.25%', // tỷ lệ 16:9 = 9/16*100%
      margin: '0 auto'
    }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '12px'
        }}
      ></iframe>
    </div>
  );
};

export default YouTubeVideoWidget;
