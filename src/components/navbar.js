import * as React from 'react';
import { NavLink, Link} from "react-router-dom";
import Box from '@mui/material/Box';
import '../components/css/navbar.css';

const Navbar = () => {
    return (
        <div>
            <Box sx={{width: '100%', bgcolor: 'background.paper' }}>
            <nav class="navbar" id="menu">
                <ul  class="nav">
                    <li >
                        <NavLink exact to="/" class="nav-link">Home</NavLink>
                    </li>
                    <li >
                        <NavLink to="/tasks" class="nav-link">Tasks</NavLink>
                    </li>
                </ul>
            </nav>
            </Box>
        </div>
    )
}

export default Navbar;