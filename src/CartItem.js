import React from 'react';
import { Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartItem({ name, price, quantity, onQuantityChange, onDelete }) {
  const handleQuantityIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', padding: '1rem', borderRadius: '4px', border: '1px solid #ccc', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)' }} >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="body2">${price.toFixed(2)}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handleQuantityDecrease}>
          <RemoveIcon />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton onClick={handleQuantityIncrease}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default CartItem;
