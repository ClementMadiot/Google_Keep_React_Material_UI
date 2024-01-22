import React from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { NavListData } from './Data/NavListData';


const NavList = () => {
  return (
    <List>
    {NavListData.map(list => (
      <ListItem disablePadding sx={{ display: 'block' }} key={list.id}>
        <ListItemButton button>
          <ListItemIcon>{list.icon}</ListItemIcon>
          <ListItemText primary={list.name}/>
        </ListItemButton>
      </ListItem>
    ))}
    </List>
  );
};

export default NavList;