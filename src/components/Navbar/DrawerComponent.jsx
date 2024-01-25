import { Drawer, IconButton, List,
    ListItem,
    ListItemText, ListItemButton } from '@mui/material'
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import useStyles from './navbarstyles';
import { Link } from 'react-router-dom';
function DrawerComponent() {
const classes=useStyles();
const [open,setOpen] = useState(false);
  return (
    <>
    
    <Drawer open={open} anchor="right" onClose={()=>setOpen(false)} >
    <List >
      <ListItemButton onClick={()=>setOpen(false)}>
        <ListItem>
        <Link to="/" className={classes.drawerlink}>
        <ListItemText primary="Home" />
        </Link>
     </ListItem>
     </ListItemButton>
     <ListItemButton onClick={()=>setOpen(false)}>
      <ListItem  >
        <Link to="/skills" className={classes.drawerlink}>
          <ListItemText primary="Skills" />
        </Link>
     </ListItem>
     </ListItemButton>

      <ListItemButton onClick={()=>setOpen(false)}>
        <ListItem>
        <Link to="/project" className={classes.drawerlink}>
          <ListItemText primary="Projects" />
        </Link>
     </ListItem>
     </ListItemButton>
     
      <ListItemButton onClick={()=>setOpen(false)}>
        <ListItem>
        <Link to="/about" className={classes.drawerlink}>
          <ListItemText primary="About Me" />
        </Link>
     </ListItem>
     </ListItemButton>
      <ListItemButton onClick={()=>setOpen(false)}>
        <ListItem>
        <Link to="/contact" className={classes.drawerlink}>
          <ListItemText > Contact</ListItemText>
        </Link>
     </ListItem>
     </ListItemButton>
    </List>
    </Drawer>
    <IconButton sx={{marginLeft :"auto"}} onClick={()=>setOpen(true)}>
        <MenuRoundedIcon sx={{color :"white"}}/>
    </IconButton>
    </>
  )
}

export default DrawerComponent
