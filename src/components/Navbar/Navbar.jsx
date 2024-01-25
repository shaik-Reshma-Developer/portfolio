import React from 'react'
import {Toolbar,AppBar, Grid, Typography,useTheme,useMediaQuery} from '@mui/material'
import {Link} from "react-router-dom"
import useStyles from './navbarstyles';
import DrawerComponent from './DrawerComponent';



  

function Navbar() {
  const classes=useStyles();
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));
  return (
    
    <AppBar position="sticky">
      <Toolbar sx={{ backgroundColor: 'black', display :"flex"}}>
        {isMatch ?
         <> 
         <Link to='/'><img  className={classes.logo} src="logo.png" alt="Logo" /></Link>
        <DrawerComponent/> 
        </>  :
        <Grid container justifyContent="space-between" >
        <Grid item md={6} >

          <Link to='/'><img  className={classes.logo} src="logo.png" alt="Logo" /></Link>
        </Grid>
        <Grid item md={6} container  className="style" justifyContent="flex-end">
        <Link className={classes.link} to="/skills" >
            SKILLS
          </Link>

          <Link className={classes.link} to="/project">PROJECTS</Link>
          <Link className={classes.link} to="/about" >
            ABOUT ME
          </Link>
          
          <Link className={classes.link} to="/contact" >
            CONTACT
           
          </Link>
          
          
        </Grid>
      </Grid>
        }
        
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar





