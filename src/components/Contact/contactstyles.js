import { makeStyles } from '@mui/styles'
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
      borderRadius: "5px",
      background: "rgba(255, 255, 255, 0)",
      padding: "0.2rem",
      outline: "none",
      borderRadius :'20px',
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

    export default useStyles;