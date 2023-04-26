import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, IconButton, Stack } from '@mui/material';
import theme from './Theme';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Foodcard({ name, description, imageUrl }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    // Add logic here to add item to cart
    console.log(`${quantity} ${name}(s) added to cart`);
  }

  const handleRemoveFromCart = () => {
    // Add logic here to remove item from cart
    if (quantity > 0) {
      setQuantity(quantity - 1);
      console.log(`${name} removed from cart`);
    }
  }

  const handleQuantityChange = (value) => {
    setQuantity(value);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ height: '60px', overflow: 'hidden' }}>
          <Typography variant="body2" color="text.secondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between" p={2}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="small" disabled={quantity === 0} onClick={handleRemoveFromCart}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6" component="span">
              {quantity}
            </Typography>
            <IconButton size="small" onClick={() => handleQuantityChange(quantity + 1)}>
              <AddIcon />
            </IconButton>
          </Box>
          <Button
            variant="text"
            color="secondary"
            onClick={handleAddToCart}
            sx={{
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                color: '#fff'
              }
            }}
          >
            Order Now
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}

export default Foodcard;
