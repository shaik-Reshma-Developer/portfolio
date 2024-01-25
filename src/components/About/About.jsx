import { Grid, Typography} from "@material-ui/core";
import React from "react";
import useStyles from "./aboutstyles";


const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      {/* <div className={classes.bgImage}></div> */}
      
     

      {/* <Typography className={classes.bg}>ABOUT ME</Typography>
      <Typography className={classes.bg} style={{ bottom: "1rem" }}>
        ABOUT ME
      </Typography> */}

      <Grid container className={classes.gridCntnr}>
        <Grid item md={5} sm={12} className={classes.abtImageDiv}>
        <img
            src="logo.png" // Replace with the actual path to your picture
            alt="Your Name"
            className={classes.image} // Add this class to your styles for rounded image
          />
        </Grid>

        <Grid item md={6} sm={12} className={classes.abtDiv}>
          
            <Typography className={classes.titles}>Get to know me</Typography>
            <Typography className={classes.abtDesc}>
            Hello there! I'm a passionate
    <span className={classes.boldTxt}> full-stack developer </span>
    with expertise in the<span className={classes.boldTxt}> MERN </span>
    stack. My skills encompass both
    <span className={classes.boldTxt}> front-end </span>and
    <span className={classes.boldTxt}> back-end </span>
    development, allowing me to craft captivating web applications. I specialize in building cross-platform
    <span className={classes.boldTxt}> mobile apps </span>with
    impressive user interfaces. Explore some of my work in the
    <span className={classes.boldTxt}> Projects </span>section.
    <br />
    <br />
    Currently open to exciting job opportunities where I can contribute, learn, and
    grow. If you have a promising opportunity matching my skills and
    experience, feel free to contact me.
            </Typography>
          
        </Grid>
        <Grid item md={1}/>
      </Grid>
    </div>
  );
};

export default About;
