import * as React from 'react';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" orientation='vertical'>
        <Tab component={Link} label="Home" to="/" />
        <Tab component={Link} label="Tasks" to="/tasks" />
      </Tabs>
    </Box>
  );
}
