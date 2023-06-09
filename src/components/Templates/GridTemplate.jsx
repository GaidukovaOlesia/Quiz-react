import React from 'react';
import { Box, styled, Grid } from '@mui/material';
import Header from './Header';
import NavBarWrapper from './NavBarWrapper';
import Footer from './Footer';

const HeaderWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(7,60,42)',
  height: '70px',
  color: 'white',
  fontSize: '25px',
  padding: '15px',
  zIndex: 5,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

const BodyWrapper = styled(Box)(() => ({
  background: 'linear-gradient(90deg, rgba(31,108,81,1) 0%, rgba(52,175,159,1) 34%, rgba(188,231,222,1) 100%)',
}));

const FooterWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(7,60,42)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100px',
}));

export default function GridTemplate({ children }) {
  return (
    <Grid container>
      <Grid item lg={4} md={4} xs={4}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </Grid>
      <Grid item lg={8} md={8} xs={8}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </Grid>
      <Grid
        item
        lg={2}
        md={0}
        xs={0}
        display={{ xs: 'none', md: 'none', lg: 'block' }}
      >
        <NavBarWrapper />
      </Grid>
      <Grid item lg={10} md={12} xs={12}>
        <BodyWrapper>
          { children }
        </BodyWrapper>
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Grid>
    </Grid>
  );
}
