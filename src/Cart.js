import React from 'react';
import { Typography, IconButton, useMediaQuery, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem';

function Cart({ onClose, cartItems, setCartItems }) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const hasItems = cartItems.length > 0;

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleQuantityChange = (index, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDelete = (index) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item, i) => i !== index)
    );
  };

  return (
    <div style={{ position: 'relative', padding: '1rem', paddingBottom: '2rem' }}>
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
      <Typography variant="h6" align="center" sx={{ marginBottom: '1rem' }}>
        Your Cart
      </Typography>
      {hasItems && (
        <Box sx={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(index, newQuantity)
              }
              onDelete={() => handleDelete(index)}
            />
          ))}
        </Box>
      )}
      {!hasItems && (
        <Typography variant="subtitle1" align="center" sx={{ marginTop: '1rem' }}>
          Your cart is currently empty.
        </Typography>
      )}
      {hasItems && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <Typography variant="h6">
            Total: ${totalPrice.toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary">
            Checkout
          </Button>
        </Box>
      )}
    </div>
  );
}

export default Cart;
