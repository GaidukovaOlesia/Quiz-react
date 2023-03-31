import React from 'react';
import { Box, styled } from '@mui/material';

const FavouritesWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  height: '100vh',
}));

export default function Favourites() {
  return (
    <FavouritesWrapper>
      <h2>Favourites</h2>
    </FavouritesWrapper>
  );
}
