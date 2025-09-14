import React from 'react';

export const HeaderImage = ({ backgroundImg, pageTitle, pageContent, onChangePage }) => {
  const textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';

  return (
    <>
      <div
        id="header-bar"
        style={{
          left: 0,
          maxHeight: '8vh',
          display: 'grid',
          textAlign: 'center',
          gridTemplateColumns: '1fr 5fr 1fr',
          top: 200,
          position: 'relative',
        }}
      >
        <button
          type="button"
          name="action"
          value="prev"
          onClick={() => onChangePage(-1)}
          style={{
            color: '#000',
            position: 'fixed',
            top: 200,
            left: 0,
            background: 'none',
            border: 'none',
          }}
          className="btn btn-success"
        >
          <i className="fas fa-arrow-left" />
        </button>

        <button
          type="button"
          name="action"
          value="next"
          onClick={() => onChangePage(1)}
          style={{
            color: '#000',
            position: 'fixed',
            top: 200,
            right: 20,
            background: 'none',
            border: 'none',
          }}
          className="btn btn-success"
          title="Gửi đơn hàng"
        >
          <i className="fas fa-arrow-right" />
        </button>
      </div>

      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0 0 20px 20px',
          height: '30vh',
          flexDirection: 'column',
          position: 'fixed',
        }}
      >
        <img
          src={backgroundImg}
          alt="Background"
          width="80"
          height="80"
          style={{
            position: 'relative',
            borderRadius: '50%',
            left: '50vw',
            top: '30vh',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            border: '2px solid white',
          }}
        />

        <input
          type="text"
          id="search-txt"
          name="search"
          placeholder="Tìm kiếm nhanh"
          style={{
            position: 'relative',
            marginTop: 0,
            textAlign: 'center',
            top: '-30px',
            width: '50vw',
            height: '40px',
            fontSize: 16,
            borderRadius: 15,
            background: 'rgba(255 255 255 / 0.5)',
            border: '1px solid grey',
          }}
        />

        <button
          type="button"
          name="action"
          value="prev"
          id="btn-export-pdf"
          style={{
            position: 'relative',
            borderRadius: '50%',
            maxWidth: 48,
            maxHeight: 48,
            left: 20,
            top: '-30px',
            background: 'white',
          }}
        >
          PDF
        </button>

        <input
          type="text"
          name="lesson"
          value={pageTitle}
          readOnly
          className="popup-text"
          style={{
            fontSize: 30,
            fontWeight: 700,
            marginTop: '-20px',
            border: 'none',
            position: 'relative',
            width: '100vw',
            color: '#fff',
            textShadow: textShadow || 'none',
          }}
        />

        <input
          type="text"
          name="day"
          value={pageContent}
          readOnly
          className="popup-text"
          style={{
            position: 'relative',
            width: '100vw',
            fontSize: 12,
            border: 'none',
            marginTop: '-10px',
            color: '#fff',
            textTransform: 'uppercase',
          }}
        />
      </div>

      <div
        className="submit-container"
        style={{ display: 'flex', gap: '2px', marginTop: '8px' }}
      >
        <button
          type="submit"
          style={{ flex: 1, width: 150, height: 40, padding: 0 }}
        >
          Đăng Tin
        </button>
        <button
          type="submit"
          style={{ flex: 1, width: 150, height: 40, padding: 0 }}
        >
          Xóa Tin
        </button>
      </div>
    </>
  );
};
