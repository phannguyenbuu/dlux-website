import React, { useState } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ProductDialog from "./ProductDialogy";
import { CenterBox } from "./TitlePanel";


function ProductGallery({ data, images, itemsPerPage = 9 }) {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [dialogProduct, setDialogProduct] = useState(null);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const pageData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleProductClick = (product, img) => {
    console.log('New infor', {...product, img:img});
    setDialogProduct({...product, img:img});
    setOpen(true);
  }

  // console.log(data);

  return (
    <>
    <Box sx={{ width: "100%", padding: 2 }}>
      <ImageList sx={{ minHeight: 900 }} cols={3} gap={12}>
        {pageData.map((product, idx) => (
          <ImageListItem key={product.id} sx={{ minWidth: 250, height: 400 }}>
            {images && <img
              src={`/images/shop/${images[(page - 1) * itemsPerPage + idx]}`}
              alt={product.name}
              loading="lazy"
              style={{ borderRadius: 8 }}

              onClick={() => handleProductClick(product, `/images/shop/${images[(page - 1) * itemsPerPage + idx]}`)}
            />}
            <ImageListItemBar title={product.name}
              onClick={() => handleProductClick(product, product.img)}
               sx={{ backgroundColor:"#fff",width: 250, height: 300 }}
              subtitle={
                <>
                  {product.img && 
                  <CenterBox>
                    <img src={product.img}
                        alt={product.name}
                        loading="lazy"
                        style={{ borderRadius: 8, maxWidth:100, width:'auto', height:'auto' }}
                        
                      />

                      </CenterBox>
                  }

                  {product.material &&
                    <Typography variant="body2" color="#313131" 
                     sx={{position:'absolute', fontSize:12, top: 250}}>
                      Material: {product.material}
                    </Typography>
                  }

                  {product.name &&
                  <Typography variant="body2" color="#313131" 
                     sx={{position:'absolute', fontWeight:700, top:20}}>
                      {product.name}
                    </Typography>
                  }

                  <Typography variant="body2" color="#313131"
                   sx={{position:'absolute', fontSize:12, top: 280}}>
                    {product.basePrice}
                  </Typography>
                </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Pagination with Next/Prev buttons and white text */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                color: "white",
                "&.Mui-selected": {
                  backgroundColor: "#1976d2", // Màu nền nút được chọn
                  color: "white",
                },
                "&:hover": {
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
                },
              }}
              slots={{ previous: Button, next: Button }}
              slotProps={{
                previous: { sx: { color: "white" }, children: "Prev" },
                next: { sx: { color: "white" }, children: "Next" },
              }}
            />
          )}
        />
      </Box>
    </Box>

    <ProductDialog open={open} setOpen={setOpen} {...dialogProduct}/>
    </>
  );
}

export default ProductGallery;
