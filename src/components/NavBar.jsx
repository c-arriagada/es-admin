import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Estilo Calico Admin Portal
          </Typography>
          <Button component={Link} to={'/home'} color="inherit">Events</Button>
          <Button component={Link} to={'/bios'} color="inherit">Bios</Button>
          <Button component={Link} to={'/videos'} color="inherit">Videos</Button>
          <Button component={Link} to={'/login'} color="inherit">Sign Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}