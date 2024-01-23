import * as React from 'react';
import {AppBar, Toolbar, Typography, IconButton, styled} from '@mui/material';
import {Menu} from '@mui/icons-material';
import GoogleKeepLogo from '../images/google-keep-icon.png'

const Header = styled(AppBar)`
  z-index: 1201;
  background-color: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`
const Keep = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`

const HeaderBar = ({ open, handleDrawer }) => {
  return (
    <Header open={open}>
    <Toolbar>
      <IconButton
        onClick={handleDrawer}
        sx={{
          padding: 0,
          marginRight: '20px'
        }}>
      <Menu/>
      </IconButton>
      <img src={GoogleKeepLogo} alt='Logo Google Keep' />
      <Keep>Keep</Keep>
    </Toolbar>
  </Header>
  );
};

export default HeaderBar;