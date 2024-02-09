import * as React from 'react';
import {Box, styled, Drawer as MuiDrawer} from '@mui/material';

// Components
import HeaderBar from './HeaderBar';
import NavList from './NavList';

const drawerWidth = 180;

const openedMixin = (theme ) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 9px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    // width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    // padding: 0,
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SwipeDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(prevState => !prevState);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <HeaderBar
      open={open}
      handleDrawer={handleDrawer}
      />
      <Drawer 
      variant="permanent" 
      open={open} 
      component="article">
        <DrawerHeader></DrawerHeader>
        <NavList/>
      </Drawer>
    </Box>
  );
}

export default SwipeDrawer