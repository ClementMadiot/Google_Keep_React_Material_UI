import * as React from 'react';
import {AppBar, Toolbar, Typography, IconButton, styled} from '@mui/material';
import {Menu} from '@mui/icons-material';

const Header = styled(AppBar)`
  z-index: 1201;
  background-color: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`



const HeaderBar = ({ open, handleDrawer }) => {
  return (
    <Header open={open}>
    <Toolbar>
      <IconButton
        onClick={handleDrawer}
        edge="start"
        sx={{marginRight: '20px'}}
      >
        <Menu />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Mini variant drawer
      </Typography>
    </Toolbar>
  </Header>
  );
};

export default HeaderBar;