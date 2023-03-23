import {Component} from 'react';
import { styled,
    useTheme,
    Drawer,
    Toolbar,
    List,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchInfo from "../SearchButton";

const drawerWidth = '70%';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: '#6fbbab',
}));

export default class BurgerMenu extends Component {
    state = {
        open: false,
    }

    constructor() {
        super();
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }
    render() {

        return (
            <Box sx={{ display: 'flex' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(this.state.open && { display: 'none' }) }}
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
                    variant="persistent"
                    anchor="left"
                    open={this.state.open}
                >
                    <Box
                        sx={{
                            backgroundColor: '#6fbbab',
                            height: '100%',
                            width: '100%',
                        }}
                    >
                    <DrawerHeader>
                        <IconButton onClick={this.handleDrawerOpen}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        {['Add new quiz', 'Favourite', 'Send email'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}

                    </List>
                        <SearchInfo />
                    <Divider />
                    </Box>
                </Drawer>
            </Box>
        )
    }

    handleDrawerOpen() {
        this.setState({open: !this.state.open})
    }
}
