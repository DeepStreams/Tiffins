import {
  Button,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
  Box,
} from "@mui/material";

import { Link } from 'react-router-dom';

import Menu from './Menu';
import theme from './Theme' ;


const MainContent = styled('div')({
  minHeight: 'calc(100vh - 50px)',
  marginBottom: '10px',
  marginTop: '50px',
});

function HomePage() {
  return (
    <div>
      <MainContent>
        <Paper elevation={0}>
          <Container maxWidth="md" py={10}  textAlign="center">
            <Typography variant="h1" component="h2" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, textAlign: 'center' }}>
              Welcome to Tiffins2u
            </Typography>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, textAlign: 'center' }}>
              Get the Best Indian Food in Scarborough, Ontario Straight to Your Home
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button  variant="contained"  size="large"  sx={{    backgroundColor: theme.palette.secondary.main,    color: '#fff',    '&:hover': {      backgroundColor: theme.palette.primary.main,   },  }} component={Link}  to="/Order">
             Order Now
            </Button>
            </Box>
            <Grid container spacing={2} sx={{ py: 5}}>
              <Grid item xs={12} md={4}>
                <Box sx={{ height: "400px", bgcolor: "grey.300" }}>Deal 1 </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ height: "400px", bgcolor: "grey.300" }}>Deal 2</Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ height: "400px", bgcolor: "grey.300" }}>Deal 3</Box>
              </Grid>
            </Grid>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, textAlign: 'center' }}>
              Our Menu
            </Typography>
            <br></br>
            <Menu />
          </Container>
        </Paper>
      </MainContent>
    </div>
  );
}

export default HomePage;