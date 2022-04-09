import * as React from 'react';
import {Box,Button, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Typography, Tooltip, Container, AppBar, Toolbar} from '@mui/material';
import {Settings, Logout} from '@mui/icons-material';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                Nokia Challenge
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* <Button sx={{ my: 2, color: 'white', display: 'block' }} > </Button> */}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} 
                    aria-controls={open ? 'account-menu' : undefined} aria-haspopup="true" 
                    aria-expanded={open ? 'true' : undefined}
                    >
                    <Avatar sx={{ width: 32, height: 32 }}>P</Avatar>
                </IconButton>
                </Tooltip>
                <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose}
                    PaperProps={{ elevation: 0, 
                    sx: { overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 1.5,
                        '& .MuiAvatar-root': { width: 32,height: 32, ml: -0.5, mr: 1, },
                        '&:before': { content: '""', display: 'block', position: 'absolute', top: 0, right: 14, width: 10, height: 10, bgcolor: 'background.paper',transform: 'translateY(-50%) rotate(45deg)',zIndex: 0,},
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                    <MenuItem>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;