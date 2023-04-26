import {
  Menu,
  MenuItem,
  AppBar,
  Button,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  Stack,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['Home', 'Menu', 'About', 'Contact'];

  const drawerWidth = 240;

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} sx={{ width: drawerWidth }}>
      <List>
        {menuItems.map((text) => (
          <ListItem button key={text} onClick={handleDrawerToggle}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
  const appBarHeight = isMobile ? '60px' : '75px';
  return (
    <AppBar position="static" sx={{ height: appBarHeight, backgroundColor: '#fff', color: theme.palette.primary.main}}>
      <Toolbar sx={{ padding: '0.5rem' }}>
        <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              {drawer}
            </>
          ) : (
            <Stack direction="row" spacing={2} >
              {menuItems.map((item) => (
                <Button key={item} variant='text' sx={{ '&:hover': { backgroundColor: theme.palette.secondary.main, color: '#fff' } }}>
                  {item}
                </Button>
              ))}
            </Stack>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
