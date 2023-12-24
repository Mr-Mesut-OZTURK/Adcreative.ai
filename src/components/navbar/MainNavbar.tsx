import * as React from 'react';
import {
    Box,
    Link,
    Menu,
    AppBar,
    Toolbar,
    MenuItem,
    Container,
    IconButton,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';


const links = [
    {
        name: "Github",
        href: "https://github.com/Mr-Mesut-OZTURK",
    },
    {
        name: "Github Repository",
        href: "https://github.com/Mr-Mesut-OZTURK/Adcreative.ai",
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/mesut-ozturk/",
    },
    {
        name: "My Web",
        href: "https://www.mesutozturk.dev",
    },
]

export const MainNavbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{ bgcolor: '#94a3b8' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* ******************* mobile menu ********************* */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {links.map((link) => (
                                <MenuItem
                                    key={link.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        p: 0,
                                        px: 1,
                                    }}
                                >
                                    <Link
                                        sx={{
                                            p: 1,
                                            width: '100%',
                                            color: '#020800',
                                            display: 'block',
                                            textDecoration: 'none',
                                            borderRadius: 1,
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* ******************* desktop menu ********************* */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            gap: 2,
                        }}
                    >
                        {links.map((link) => (
                            <Link
                                // component={Button}
                                key={link.name}
                                href={link.href}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    backgroundColor: '#e2e8f055',
                                    textDecoration: 'none',
                                    p: 1,
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: '#e2e8f099',
                                    }
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    )
}
