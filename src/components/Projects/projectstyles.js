import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    height: "100vh",
    width: "100%",
    display: "flex",
    boxSizing: "border-box",
    background: "linear-gradient(black,#051650)",
    overflow: "hidden",
    zIndex: "1",
    position: "relative",
    
  },
  
  gridCntnr: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  abtDiv: {
    color: "white",
    padding: "2rem",
    display:"space-between",
    marginBottom:"20vh",
  },
  
  titles: {
    paddingBottom: "1rem",
    fontFamily: "Cinzel",
    fontSize: "2rem",
    fontWeight: "bolder",
    textAlign: "center",
    color: "white",
    letterSpacing: 2,
    background: "linear-gradient(270deg,blue 20%,#70CFEE 60%)",
    // background: "linear-gradient(270deg,  pink 20%, #7a9ce0 30%, #79dfc8 90%)",
    backgroundClip: "text", // Standard property for newer versions of Chrome, Firefox, Safari, and Edge
    color: "transparent", 

    
  },
  abtDesc: {
    fontFamily: "Montserrat",
    letterSpacing: 2,
    fontSize: "1rem",
    textAlign: "justify",
    
  },

  badge :{
    padding:"6vh"
  },
  skills: {
    display: "column",
    alignItems: "center",
    padding: "2rem",
    justifyContent: "space-between",

   
  },
  titleBox :{
    display: 'flex',
     justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #70CFEE', 
      borderRadius: '10px',
       padding: '20px', width:"25vh",
       fontFamily:"Poppins",
       cursor:"pointer",
       "&:hover": {
        color: "#70CFEE",
        fontSize :"20px",
        boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.9)'
      },
      boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.5)',
  },
  badgeContent :{
    border: '2px solid #70CFEE',
    backgroundColor:" #70CFEE",
     borderRadius: '10px',
      padding: '13px' 
  },
  iconsCntnr: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconPadding: {
    padding: "1.3rem",
    paddingBottom: "2rem",
    
  },
  boldTxt: {
    color: "#70CFEE",
    fontWeight: "bolder",
  },
}));

export default useStyles;
