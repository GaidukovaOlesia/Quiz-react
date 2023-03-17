import React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    styled,
    alpha,
    InputBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
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
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: '15px',
                left: 0,
                right: 0,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                maxWidth: '1600px',
                margin: '0 auto',
            }}
            >
                <AppBar sx={{
                    backgroundColor: 'rgb(7,60,42)',
                }}
                        position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{
                                mr: 2,
                                display: {lg: 'none', md: 'block', xs: 'block'},
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', sm: 'block' } }}
                        >
                            QUIZ
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                sx={{
                                    width: '200px',
                                    color: 'white',
                                }}
                                placeholder="Create quiz…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
