import React from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { NavListData } from '../Data/NavListData'

const NavList = () => {
  return (
    <List>
      {NavListData.map((list) => (
        <ListItem disablePadding key={list.id}>
          <Link to={list.route}>
            <ListItemButton button="true" sx={{ paddingLeft: '1.5rem' }}>
              <ListItemIcon >{list.icon}</ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

export default NavList
