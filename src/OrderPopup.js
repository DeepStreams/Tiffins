import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

function OrderPopup({ item, open, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleAddToCart = () => {
    // TODO: Implement the add to cart functionality here
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{item.name}</DialogTitle>
      <DialogContent>
        <img src={item.imageUrl} alt={item.name} style={{ width: '100%', marginBottom: 16 }} />
        <TextField
          label="Quantity"
          variant="outlined"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1 }}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Notes"
          variant="outlined"
          multiline
          rows={4}
          value={notes}
          onChange={handleNotesChange}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddToCart} variant="contained" color="primary">
          Add to Cart (${(item.price * quantity).toFixed(2)})
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default OrderPopup;
