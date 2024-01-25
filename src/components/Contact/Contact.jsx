import React , {useState,useRef } from 'react'

import { makeStyles } from '@mui/styles'

import emailjs from "@emailjs/browser";
import {Grid,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  CircularProgress,
} from "@material-ui/core";


const useStyles=makeStyles((theme)=>({
  bg :{
      height: "100vh",
      width: "100%",
      overflowX: "hidden",
     
      justifyContent:"center",
      
  background: "linear-gradient(black,#051650)",
      // backgroundImage: `url("/contactbg1.jpeg")`,
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      userSelect: "none",
      zIndex: 9,
      alignItems: "center",
      position: "relative",
      display: "flex",
  },
  
  heading: {
    
    fontFamily: "Cinzel",
    textAlign: "center",
    fontSize: "2rem",
    letterSpacing: 2,
    fontWeight: "bolder",
   color :"white",
    '@media (max-width: 600px)' :{
      fontSize: "1rem",
    }
    
  },
  formStyle: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    padding: "0.6rem",
    background: "rgba(0, 0, 255, 0.2)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    marginBottom:"120px"
   
  },
  inputs :{

    width: "100%",
   
      fontFamily: "Poppins",
      fontSize: "1rem",
     
      outline: "none",
      height:"12%",
     
      "& .MuiFilledInput-root": {
        background: "rgba(255, 255, 255, 0)",
        color :"white",
        fontSize: "1rem",
        border :"1px solid #70CFEE",
        borderRadius:"5px",
       
      },
      
      
    
  },

  label: {
    fontFamily: "Poppins",
    fontSize: "1rem",
    color: "#808080",
    
    
  },
  labelFocused: {
    fontFamily: "Poppins",
    color :"white"
    
    
    
    
  },
  outlineColor :{
    borderColor :"black",
    color:"white"
  },
  txtarea: {
    fontFamily: "Poppins",
    fontSize: "1rem",
   
    background: "rgba(255, 255, 255, 0)",
    padding: "0.2rem",
    outline: "none",
    borderRadius :'15px',
    border :"1px solid #70CFEE",
    color :"white"
    
  },
  btn: {
    width: "100%",
    backgroundColor: "#70CFEE",
    color: "black",
    border :"1px solid #70CFEE",
    padding: "0.3rem",
    fontSize: "1rem",
    fontWeight: "bolder",
    fontFamily: "Poppins",
    display: "flex",
    justifyContent: "center",
    borderRadius :"15px",
    letterSpacing: 3,
    "&:hover": {
      color: "#70CFEE",
      background: "rgba(255, 255, 255, 0)",
    },
  },
  
  }));



function Contact() {
  const classes = useStyles();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_uhok6um",
        "template_l50ag39",
        form.current,
        "tVINrTU-sTX4Twznj"
      )
      .then(
        (result) => {
          alert("Your message has been sent.");
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          alert("Error. Try again");
          setIsSending(false);
        }
      );
  };
  return (
   <div className={classes.bg}>
   
     
        
     <form ref={form} onSubmit={sendEmail} className={classes.formStyle}>
        
        <Typography className={classes.heading}>Get in Touch</Typography>
      
      
        <TextField
          className={classes.inputs}
          label="Your Name"
          variant='filled'
         
          type="text"
          name="from_name"
         
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.labelFocused,
              
             
            },
          }}
        />
      
      
        <TextField
          className={classes.inputs}
          label="Your Email"
          variant='filled'
          type="email"
          name="user_email"
          InputLabelProps={{
            classes: {
              root: classes.label,
              focused: classes.labelFocused,
             
            },
          }}
        />
      
      <TextareaAutosize
        name="message"
        placeholder="  Your Message"
        minRows={10}
        maxRows={15}
        className={classes.txtarea}
      />
      
        <Button type="submit" className={classes.btn}>
          {isSending ? <CircularProgress /> : "SEND"}
        </Button>
      
    </form>
        
     
    </div>
    
  )
}

export default Contact;
