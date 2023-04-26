import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledFooter = styled('footer')({
  backgroundColor: 'gray',
  color: '#fff',
  height: '50px',
  textAlign: 'center',
  bottom: '0',
  left: '0',
  width: '100%',
});

function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="md" sx={{ padding: '0.5rem' }}>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ height: '100%' }}>
          <Grid item>
            <Typography variant="subtitle1">&copy; 2023 Tiffins2u</Typography>
          </Grid>
          <Grid item >
            <Typography variant="subtitle1">Follow us on social media</Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
}

export default Footer;