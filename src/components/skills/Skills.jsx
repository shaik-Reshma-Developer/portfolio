// Skills.js
import React, { useState,useEffect } from "react";
import { Grid, Badge, Paper, LinearProgress,useTheme,useMediaQuery } from "@material-ui/core";
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';
import InterpreterModeOutlinedIcon from '@mui/icons-material/InterpreterModeOutlined';
import Box from '@mui/material/Box';
import {Tilt} from 'react-tilt';

import useStyles from "./skillstyles";


// skillsData.js
const skillsData = {
    frontEnd: {
      title: "Front End",
      icon: DesktopWindowsOutlinedIcon,
      skills: [
        { name: "HTML", progress: 90 },
        { name: "CSS", progress: 70},
        { name: "Java Script", progress: 72 },
        { name: "React.js", progress: 95 },
        { name: "Material UI", progress: 90 },
        { name: "Three.js", progress: 65 },
        // Add more front-end skills as needed
      ],
    },
    backEnd: {
      title: "Back End",
      icon: DeveloperModeOutlinedIcon,
      skills: [
        { name: "Node.js", progress: 80 },
        { name: "Express.js", progress: 75 },
        { name: "MongoDB", progress: 95 },
        { name: "MySql", progress: 80 },
        
        
        // Add more back-end skills as needed
      ],
    },
    tools: {
      title: "Tools",
      icon:ConstructionIcon,
      skills: [
        { name: "Git", progress: 90 },
        { name: "VS Code", progress: 70 },
        { name: "Linux", progress: 75 },
        
        // Add more tools skills as needed
      ],
    },
    softSkills: {
      title: "Soft Skills",
      icon: InterpreterModeOutlinedIcon,
      skills: [
        { name: "Communication", progress: 95 },
        { name: "Teamwork", progress: 85 },
        { name: "Collabration", progress: 85 },
        { name: "Public Speaking", progress: 90 },
        // Add more soft skills as needed
      ],
    },
  };
  
  
  const AnimatedLinearProgress = ({ targetProgress, duration }) => {
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      const step = (targetProgress / duration) * 10;
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + step;
          return newProgress >= targetProgress ? targetProgress : newProgress;
        });
      }, 100);
  
      return () => {
        clearInterval(timer);
      };
    }, [duration, targetProgress]);
  
    return (
      <Box sx={{ width: '100%',borderRadius:"4px" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        style={{
          borderRadius: '8px',
          backgroundColor: '#70CFEE',
          height: 5,
        }}
       
      />
    </Box>
    );
  };
  
function Skills() {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState("frontEnd");

  const handleBadgeClick = (category) => {
    setSelectedCategory(category);
  };

  const renderSkills = () => {
    const categoryData = skillsData[selectedCategory];
    return (
      <div style={{ textAlign: 'left' }}>
        {categoryData.skills.map((skill) => (
          <div key={skill.name} style={{ margin: '20px 0', fontFamily: "Poppins" }}>
            <p style={{ margin: "5px", display: 'flex', justifyContent: 'space-between' }}>
              {skill.name}
              <span style={{ color: '#70CFEE', marginLeft: 'auto', fontSize: "13px" }}>{`${skill.progress}%`}</span>
            </p>
  
            <AnimatedLinearProgress targetProgress={skill.progress} duration={100}  />
  
            <div style={{ marginBottom: '10px' }}></div>
          </div>
        ))}
      </div>
    );
  };
  
  

  return (
    <div className={classes.mainDiv}>
      <Grid container className={classes.gridCntnr}>
        {/* ... (rest of the code) */}
        <Grid item container md={6} sm={12} className={classes.abtDiv}>
          <Grid item sm={12}  md={12} className={classes.titles}>
            My Skills
          </Grid>
          {Object.keys(skillsData).map((category) => (
            <Grid key={category} item md={6} className={classes.badge}>
              <Badge
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                badgeContent={
                  <div className={classes.badgeContent}>
                    {React.createElement(skillsData[category].icon, {
                      style: { color: 'black' },
                    })}
                  </div>
                }
                onClick={() => handleBadgeClick(category)}
              >
                <div className={classes.titleBox}>
                  {skillsData[category].title.toUpperCase()}
                </div>
              </Badge>
            </Grid>
          ))}
        </Grid>
        {/* ... (rest of the code) */}
        <Grid item md={6} xs={12} className={classes.abtDiv}>
        <Tilt options={{ max: 15, scale: 1.05, speed: 300, glare: true, "max-glare": 0.8 }} className="tilt-root">
          <Paper elevation={3} style={{padding: '20px', color: '#70CFEE', textAlign: 'center',borderRadius:"20px", backgroundColor: 'rgba(255, 255, 255, 0.1)', marginTop:"12vh",boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.7)',cursor:"pointer", "&:hover": {
        
        boxShadow: '0px 4px 8px rgba(255, 255, 255, 1.8)'
      }, }}>
            <h2 style={{ color: '#70CFEE',fontFamily:"Poppins" }}>{skillsData[selectedCategory].title.toUpperCase()}</h2>
            <hr style={{ border: '1px solid #70CFEE', margin: '10px 0' }} />
            
            {renderSkills()}
          </Paper>
          </Tilt>
        </Grid>
        {/* ... (rest of the code) */}
      </Grid>
    </div>
  );
}

export default Skills;