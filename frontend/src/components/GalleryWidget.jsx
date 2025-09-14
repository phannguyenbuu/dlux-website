import React, { useState } from 'react';
import { Box, Typography, Link, Button, useMediaQuery, useTheme, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function GalleryWidget({ title, data, isCompactView }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [page, setPage] = useState(0);
  // const [isCompactView, setIsCompactView] = useState(false); // bật/tắt chế độ compact

  // Cấu hình riêng cho 2 dạng view
  const columns = isCompactView ? 4 : isMobile ? 1 : 4;
  const itemsPerPage = isCompactView ? 4 : isMobile ? 4 : 12;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);


  const boxRef = React.useRef();

const handlePrev = () => {
  setPage((p) => {
    const newPage = p > 0 ? p - 1 : p;
    setTimeout(() => {
      if (boxRef.current) {
        boxRef.current.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }
    }, 10);
    return newPage;
  });
};

const handleNext = () => {
  setPage((p) => {
    const newPage = p < totalPages - 1 ? p + 1 : p;
    setTimeout(() => {
      if (boxRef.current) {
        boxRef.current.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }
    }, 10);
    return newPage;
  });
};


  // const handlePrev = () => setPage((p) => (p > 0 ? p - 1 : p));
  // const handleNext = () => setPage((p) => (p < totalPages - 1 ? p + 1 : p));
  

  if (isCompactView) {
    return (
      <>
      <Typography variant='h5' sx={{mt:5, textTransform:'uppercase', textAlign:'center'}}>{title}</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 1200, mx: 'auto', p: 1 }}>
          <IconButton onClick={handlePrev} disabled={page === 0}>
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box ref={boxRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: 2,
              flexGrow: 1,
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',          // Firefox
              '&::-webkit-scrollbar': {        // Chrome, Safari
                display: 'none'
              },
              scrollBehavior: 'smooth',
            }}

          >
            {currentData.map((item, idx) => (
              <Link
                href={item.href}
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                sx={{ cursor: 'pointer', textDecoration: 'none', flex: '0 0 auto', width: 200 }}
              >
                <Box
                  sx={{
                    borderRadius: 2,
                    boxShadow: 2,
                    backgroundColor: '#fff',
                    '&:hover': { boxShadow: 6, transform: 'scale(1.2)', transition: 'transform 0.3s ease' },
                    p: 1,
                    scrollSnapAlign: 'start',
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 8 }}
                  />
                  <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'bold', textAlign: 'center' }}>
                    {item.title}
                  </Typography>
                </Box>
              </Link>
            ))}
          </Box>

          <IconButton onClick={handleNext} disabled={page === totalPages - 1}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </>
    );
  }

  // Dạng đầy đủ - như trước (grid nhiều hàng nhiều cột, nút prev/next dưới)
  return (
    <>
      <Typography variant='h5' sx={{mt:5, textTransform:'uppercase', textAlign:'center'}}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 2,
          maxWidth: 1200,
          margin: '0 auto',
          p: 2,
        }}
      >
        {currentData.map((item, idx) => (
          <Link
            href={item.href}
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            sx={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 2,
                p: 2,
                transition: 'transform 0.3s ease',
                '&:hover': { boxShadow: 6, transform: 'scale(1.2)' },
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 8 }}
              />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>
                {item.subtitle}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
        <Button variant="contained" onClick={handlePrev} disabled={page === 0}>
          Prev
        </Button>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
          {page + 1} / {totalPages}
        </Typography>
        <Button variant="contained" onClick={handleNext} disabled={page === totalPages - 1}>
          Next
        </Button>
      </Box>
    </>
  );
}

export default GalleryWidget;