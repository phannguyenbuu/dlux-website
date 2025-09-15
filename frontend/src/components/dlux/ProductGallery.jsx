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

function ProductGallery({ data, images, itemsPerPage = 9 }) {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [dialogProduct, setDialogProduct] = useState(null);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const pageData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleProductClick = (product, img) => {
    console.log('New infor', {...product, img:img});
    setDialogProduct({...product, img:img});
    setOpen(true);
  }

  return (
    <>
    <Box sx={{ width: "100%", padding: 2 }}>
      <ImageList cols={3} gap={12}>
        {pageData.map((product, idx) => (
          <ImageListItem key={product.id}>
            <img
              src={`/images/shop/${images[(page - 1) * itemsPerPage + idx]}`}
              alt={product.name}
              loading="lazy"
              style={{ borderRadius: 8 }}

              onClick={() => handleProductClick(product, `/images/shop/${images[(page - 1) * itemsPerPage + idx]}`)}
            />
            <ImageListItemBar
              title={product.name}
              subtitle={
                <>
                  <Typography variant="body2" color="inherit">
                    Material: {product.material}
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    Base Price: ${product.basePrice.toLocaleString()}
                  </Typography>
                  {/* <Typography
                    variant="caption"
                    color="inherit"
                    component="div"
                  >
                    Sizes & Prices:
                    {Object.entries(product.sizePrice).map(([size, price]) => (
                      <span key={size} style={{ marginLeft: 8 }}>
                        {size}: ${price.toLocaleString()}
                      </span>
                    ))}
                  </Typography> */}
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
