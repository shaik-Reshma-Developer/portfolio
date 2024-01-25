
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    link :{
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    marginRight: '45px',
    fontFamily: "Poppins",
    

   
    "&:hover": {
      color: "#70CFEE" ,
     
      
    } 
  },
  drawerlink :{
    color: 'black',
    textDecoration: 'none',
    fontSize: '16px',
    marginRight: '45px',
    fontFamily: "Poppins",

  },
  
  logo :{
      
      width: '40px',
       height: '40px',
       margingLeft:"10vh" 
      // background: `linear-gradient(to right, #70CFEE, #7a9ce0)`
      
  },

  
  }));

export default useStyles