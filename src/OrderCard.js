import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, CardActionArea } from '@mui/material';
import theme from './Theme';

function OrderCard({ name, description, imageUrl, price, onClick }) {
  const handleClick = () => {
    onClick({
      name: name,
      description: description,
      imageUrl: imageUrl,
      price: price
    });
  };

  return (
    <Card sx={{ display: 'flex', height: '100px', boxSizing: 'border-box' }}>
      <CardActionArea
        onClick={handleClick}
        sx={{ display: 'flex', width: '100%', borderColor: 'transparent', borderStyle: 'solid', borderWidth: 1, '&:hover': { borderColor: theme.palette.primary.main, borderStyle: 'solid', borderWidth: 1 } }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography gutterBottom variant="subtitle1" component="h2">
                {name}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'right' }}>
                ${price.toFixed(2)}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" component="p" sx={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
              {description}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <CardMedia
            component="img"
            sx={{ width: 100, height: 100, objectFit: 'cover' }}
            image={imageUrl}
            alt={name}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default OrderCard;
