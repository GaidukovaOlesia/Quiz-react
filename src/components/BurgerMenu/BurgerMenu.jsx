import React from 'react';
import {
  styled,
  useTheme,
  Drawer,
  Toolbar,
  Divider,
  IconButton,
  Box, alpha, InputBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { quizesActions } from '../../store/modules/quizes';

const drawerWidth = '30%';

const SearchDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100px',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  backgroundColor: '#6fbbab',
}));

export default function BurgerMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleChangeSearch = (event) => {
    dispatch(quizesActions.filterQuizes({ search: event.target.value }));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
          <Box sx={{ display: 'flex' }}>
              <Toolbar>
                  <IconButton
                      color='inherit'
                      aria-label='open drawer'
                      onClick={handleDrawerOpen}
                      edge='start'
                      sx={{ mr: 2, ...(open && { display: 'none' }) }}
                  >
                      <MenuIcon />
                  </IconButton>
              </Toolbar>
              <Drawer
                  sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      width: drawerWidth,
                      boxSizing: 'border-box',
                    },
                  }}
                  variant='persistent'
                  anchor='left'
                  open={open}
              >
                  <Box
                      sx={{
                        backgroundColor: '#6fbbab',
                        height: '100%',
                        width: '100%',
                      }}
                  >
                  <DrawerHeader>
                      <IconButton onClick={handleDrawerClose}>
                          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                      </IconButton>
                  </DrawerHeader>
                    <div style={{ padding: '10px' }}>
                      <Link
                        style={{
                          display: 'block',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '18px',
                          marginBottom: '20px',
                          marginLeft: '12px',
                          marginTop: '20px',
                        }}
                        to='/quiz'
                      >
                        Home
                      </Link>
                      <Link
                        style={{
                          display: 'block',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '18px',
                          marginBottom: '20px',
                          marginLeft: '12px',
                          marginTop: '20px',
                        }}
                        to='/quiz/create'
                      >
                        Add new quiz
                      </Link>
                      <Link
                        style={{
                          display: 'block',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '18px',
                          marginBottom: '20px',
                          marginLeft: '12px',
                          marginTop: '20px',
                        }}
                        to='/quiz/favourites'
                      >
                        Favourites
                      </Link>
                    </div>
                    <SearchDiv>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        sx={{
                          width: '200px',
                          color: 'white',
                        }}
                        placeholder='Search…'
                        onChange={handleChangeSearch}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </SearchDiv>
                  <Divider />
                  </Box>
              </Drawer>
          </Box>
  );
}
