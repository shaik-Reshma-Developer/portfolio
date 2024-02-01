import React,{useEffect} from 'react'
import useStyles from './herostyles'
import {Grid,Button,} from '@material-ui/core'
import ReactRotatingText from 'react-rotating-text'
import GitHubIcon  from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from 'react-router-dom' 

import Canvas3D from '../../canvas3D'


function Hero() {
  const classes=useStyles();
  console.log('Component is rendering.');

  console.log('Component rendered successfully.');
  return (
   <div className={classes.bg}>
   
    <Grid container className={classes.div}>
     <Grid item md={7} xs={12} className={classes.heroBox}>  
        <p className={classes.helloworld} >Hello !..</p>
        <p className={classes.heroName}>
        <span  className={classes.heroSpan}>I'm</span> <span className={classes.reshma}> Reshma</span> 
       
        </p>
        
        <ReactRotatingText
        className={classes.rotatingTxt}
        items={["Full-stack Developer", "App Developer","Web Developer"]}/>
         <p className={classes.des}>I'am Full-stack Developer & Flutter Enthusiast.Crafting code for seamless digital experiences.Let's build something amazing together!</p>

        <div className={classes.heroIcons}>
        <GitHubIcon className={classes.icon} />
        <LinkedInIcon className={classes.icon} />
        <Button className={classes.btn}>
          <Link to="/contact">Hire Me</Link>
        </Button>
        </div>
        
     </Grid>
     <Grid item md={5} xs={12} className={classes.objectGrid}>
      <div className={classes.ob}>
      <Canvas3D/>
      </div>
         
     </Grid>
    </Grid>
    </div>
    
  )
}

export default Hero
