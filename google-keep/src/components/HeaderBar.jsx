import * as React from 'react';
import {Toolbar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const HeaderBar = ({ open, handleDrawer, Header }) => {
  return (
    <Header open={open}>
    <Toolbar sx={{
          backgroundColor: '#2a2a2af7',
        }}>
      <IconButton
        color="inherit"
        onClick={handleDrawer}
        sx={{
          padding: 0,
          ...(open && { display: 'none' }),
        }}
      >
        <MenuIcon />
      </IconButton>
      {/* <Typography></Typography> */}
    </Toolbar>
  </Header>
  );
};

export default HeaderBar;