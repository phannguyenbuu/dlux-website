import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, Typography, Box } from '@mui/material';

function ProductGallery({ data }) {
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Product Gallery
      </Typography>
      <ImageList cols={3} gap={12}>
        {data.map((product) => (
          <ImageListItem key={product.id}>
            <img
              src={`${product.imageUrl}?w=248&fit=crop&auto=format`}
              srcSet={`${product.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={product.name}
              loading="lazy"
              style={{ borderRadius: 8 }}
            />
            <ImageListItemBar
              title={product.name}
              subtitle={
                <>
                  <Typography variant="body2" color="inherit">
                    Material: {product.material}
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    Base Price: {product.basePrice.toLocaleString()} VND
                  </Typography>
                  <Typography variant="caption" color="inherit" component="div">
                    Sizes & Prices:
                    {Object.entries(product.sizePrice).map(([size, price]) => (
                      <span key={size} style={{ marginLeft: 8 }}>
                        {size}: {price.toLocaleString()} VND
                      </span>
                    ))}
                  </Typography>
                </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ProductGallery;
