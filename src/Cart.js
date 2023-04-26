import React from 'react';
import { Typography, IconButton, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Cart({ onClose }) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <div style={{ position: 'relative', padding: '1rem' }}>
      {isSmallScreen && (
        <IconButton
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            color: 'grey',
            zIndex: 1,
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
      <Typography variant="h6" align="center">
        Your Cart
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ marginTop: '1rem' }}>
        Your cart is currently empty.
      </Typography>
    </div>
  );
}

export default Cart;
