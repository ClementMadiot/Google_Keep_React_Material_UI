import React from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {MoveToInbox, Mail} from '@mui/icons-material';


const NavList = () => {
  return (
    <List>
    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
      <ListItem key={text} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
          </ListItemIcon>
          <ListItemText primary={text}/>
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  );
};

export default NavList;