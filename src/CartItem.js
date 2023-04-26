import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({ name, price, quantity, onQuantityChange, onDelete }) {
  const handleQuantityChange = (event) => {
    onQuantityChange(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
      <Box>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="body2">${price.toFixed(2)}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          InputProps={{ inputProps: { min: 1 } }}
          sx={{ marginRight: '1rem', maxWidth: '80px' }}
        />
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CartItem;
