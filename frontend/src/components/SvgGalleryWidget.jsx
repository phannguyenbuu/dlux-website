import React from 'react';
import UseIsMobile from './hooks/UseIsMobile';

const SvgGalleryWidget = ({ images, rows=4, show_button='' }) => {
  const isMobile = UseIsMobile();
  
  return(
  <ul style={{ width:'100vw', 
      display: 'flex', 
      marginTop: isMobile ? 20 : 20, 
      marginLeft: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: isMobile ? "column":"row",
      padding: 0,
     gap: isMobile ? 5 : 100 }}>

    {images.map(({ src, caption }, i) => (
      <li
        key={i}
        style={{
          textAlign: 'center',
          width: 250,
          gap: 5,
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #147049',
          borderRadius: 10,
          padding: isMobile ? 0 : 20,
        }}
      >
        <img src={src} alt={caption} style={{ width: 100, height: 100, objectFit: 'contain' }} />
        
        <div style={{ marginTop: 30, fontSize: 10, minWidth: 200, textAlign: 'left', 
            display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {caption.split(',').map((s, idx) => (
            <p key={idx} style={{ margin: 0 }}>{s.trim()}</p>
          ))}
        </div>

        {show_button && show_button != "" ? 
          <button
          style={{ position: 'absolute',  marginLeft:100, fontSize:8, padding: '5px 0px',
             width:100, marginTop: -50,
             
             
          textTransform: 'uppercase' }}
          
          >
          { show_button } 
        </button>: null}
      </li>
    ))}

  </ul>
)};

export default SvgGalleryWidget;
