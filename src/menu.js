import { Grid } from '@mui/material';
import Foodcard from './foodCard';
import { items } from './itemData';

function Menu() {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item key={item.name} xs={12} sm={6} md={4} lg={4}>
          <Foodcard {...item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Menu;
