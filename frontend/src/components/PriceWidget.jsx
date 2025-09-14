import React from 'react';

const PriceWidget = ({ image, title, description, button, href }) => {
  // Tách chuỗi description thành các đoạn p
  const descriptionParagraphs = description.split('|').map((text, idx) => (
    <p key={idx} style={{ marginBottom: 8 }}>
      {text.trim()}
    </p>
  ));

  return (
    <div
      style={{
        padding: 20,
        backgroundImage: `url('${image}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
       
      }}
    >
      <div
        style={{
          maxWidth: 400,
          padding: 20,
          backgroundColor: 'rgba(255,255,255,0.75)',
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          textAlign: 'left',
          margin: '0 auto',
          minHeight: 500
        }}
      >
        <h3
          style={{
            pointerEvents: 'none',
            marginBottom: 15,
            
            fontWeight: 500,
            fontSize: 22,
            textTransform: 'uppercase',
            textAlign: 'center',
            paddingTop: 0,
          }}
        >
          {title}
        </h3>

        <ul style={{margin:'50px 0px'}}>
            {descriptionParagraphs.map((s, index) => (
                <li key={index} style={{ color: '#555', marginTop:20, fontSize: 14, lineHeight: 1.5 }}>
                {s}
                </li>
            ))}
        </ul>


        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
        {button && (
          <button
            style={{
              
              padding: '10px 25px',
              margin: '15px auto 0',
              borderRadius: 8,
              border: 'none',
              backgroundColor: '#51be78',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              
            }}
            onClick={() => {
              window.location.href = href;
            }}
          >
            {button}
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default PriceWidget;
