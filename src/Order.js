import React, { useState } from 'react';
import { Grid, Typography, Button, useMediaQuery } from '@mui/material';
import { items } from './itemData';
import OrderCard from './OrderCard';
import Cart from './Cart';

function Order() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.name === item.name);  
    if (itemIndex === -1) {
      // Item not found in cart, add it with an initial quantity of 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      console.log(cartItems)
    } else {
      // Item already in cart, do nothing
    }
  };  

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="left" maxWidth="md">
      {/* First Column: Order Cards */}
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item key={item.name} xs={12}>
              <OrderCard {...item} onClick={() => addToCart(item)} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Second Column: Cart */}
      {!isSmallScreen && (
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </Grid>
      )}

      {/* View Cart button for small screens */}
      {isSmallScreen && !cartOpen && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setCartOpen(true)}
            sx={{ height: '64px', color: 'white' }}
          >
            View Cart
          </Button>
        </div>
      )}

      {/* Cart for small screens */}
      {isSmallScreen && cartOpen && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white', zIndex: 999 }}>
          <Cart onClose={() => setCartOpen(false)} cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      )}
    </Grid>
  );
}

export default Order;
