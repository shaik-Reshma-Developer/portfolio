import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    height: "100vh",
    width: "100%",
    display: "flex",
    boxSizing: "border-box",
    // background: "linear-gradient(black,#051650)",
    // backgroundImage: `url("/44062633.jpg")`,
    background: "linear-gradient(to top right ,  hotPink 10%, blue 40%, black 80%)",
    overflow: "hidden",
    zIndex: "1",
    position: "relative",
    
  },
  image :{
   height : "400px",
   width :"400px",
   borderRadius: "50%",
   border:"2px solid white"
  
   
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
  },
  abtImageDiv: {
    color: "white",
    padding: "1rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  },
  titles: {
    paddingBottom: "1rem",
    fontFamily: "Cinzel",
    fontSize: "2rem",
    fontWeight: "bolder",
    textAlign: "center",
    color: "white",
    letterSpacing: 2,
    
    
  },
  abtDesc: {
    fontFamily: "Montserrat",
    letterSpacing: 2,
    fontSize: "1rem",
    textAlign: "justify",
    
  },
  skills: {
    display: "column",
    alignItems: "center",
    padding: "2rem",
    justifyContent: "space-between",

   
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
