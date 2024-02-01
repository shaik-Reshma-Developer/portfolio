import { makeStyles } from '@mui/styles'

const useStyles=makeStyles((theme)=>({
    bg :{
      height: "100vh",
        width: "100%",
      backgroundColor :'black',
      overflowX: "hidden",
      
    },
    div: {
      height: "100vh",
      width: "100%",
      
    },
    heroBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "10%",
      color: "white",
      zIndex: 10,
      
    },
    helloworld :{
      fontFamily: "Cinzel",
        letterSpacing: 4,
        color: "white",
        fontSize: "1rem",
       
        
    },
    heroSpan :{
      color: "white",
    },
    heroName :{
     
        letterSpacing: 4,
        fontSize: "5rem",
        // color : "#70CFEE",
      
        
    },
    reshma :{
      fontFamily: "Poppins",
       
        background: "linear-gradient(270deg,blue 20%,#70CFEE 60%)",
        // background: "linear-gradient(270deg,  pink 20%, #7a9ce0 30%, #79dfc8 90%)",
        backgroundClip: "text", // Standard property for newer versions of Chrome, Firefox, Safari, and Edge
        color: "transparent", 
    },
    btn: {
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
    
    rotatingTxt :{
      fontFamily: "Cinzel",
        fontSize: "2rem",
    },
    heroIcons :{
      display: "flex",
        gap: 40,
        paddingTop: "1rem",
        alignItems: "center",
        cursor: "pointer",
        marginBottom:'170px'
    },
    icon: {
      opacity: "0.5",
      "&:hover": {
        opacity: "1",
        boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.5)'
      },
    },
    des :{
      fontFamily:"Poppins",
      fontSize:'20px',
      color :"white",
      marginTop:'9px',
      marginBottom :'9px',
    
    },
    objectGrid: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      
      
    },
    ob :{
      height: "100vh",
        width: "100vw",
        
        
    }
    }));

    const mediaQueries = {
      sm: `@media (max-width: 600px)`,
      md: `@media (max-width: 960px)`,
    };
    
    export const responsiveStyles = (theme) => ({
      [mediaQueries.sm]: {
        bg: {
          backgroundPosition: "70%",
        },
        heroName: {
          fontSize: "3rem",
        },
        rotatingTxt: {
          fontSize: "1.2rem",
        },
        ob :{
          position: "absolute",
          height: "80%",
          overflowX: "hidden",
          zIndex: 1,
          transform: "translate(-15%)",
        }
      },
      [mediaQueries.md]: {
        bg : {
          backgroundPosition: "80%",
        },
        heroName: {
          fontSize: "4rem",
        },
        rotatingTxt: {
          fontSize: "1.5rem",
        },
        helloworld :{
          fontSize: "1rem",
        }
      },
    });

    

    export default useStyles;

    
