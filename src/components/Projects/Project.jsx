// Project.js
import React from 'react';
import "./Project.css";
import { useState, useRef } from "react";
import Slider from "react-slick";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import MultiActionAreaCard from "../Contact/Contact"; // Update the import path
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions, Tooltip } from '@mui/material';
import { Tilt } from 'react-tilt';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { useWheel } from 'react-scroll-wheel-handler';

const images = ["astronaut.png", "celebrating.png", "education.png", "taken.png"];

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: "logo.png",  // Replace with the actual image path
    githubLink: "https://github.com/project1",
    websiteLink: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: "contactbg.jpeg",  // Replace with the actual image path
    githubLink: "https://github.com/project2",
    websiteLink: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "Description of Project 2 iuruehrkhfkjfhudhfkjhfkhdkuhfukdhijkjfdlaeuioflkdjl lf dfdiufiuaeuoiueiroiuo friuio",
    image: "logo.png",  // Replace with the actual image path
    githubLink: "https://github.com/project2",
    websiteLink: "https://project2.com",
  },
  {
    title: "Project 4",
    description: "Description of Project 2",
    image: "logo.png",  // Replace with the actual image path
    githubLink: "https://github.com/project2",
    websiteLink: "https://project2.com",
  },
  // Add more projects as needed
];



function Project() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = React.useState(null);

  const handleScroll = (e) => {
    

    const delta = e.deltaY || e.deltaX || 0;

    if (delta > 0) {
      setActiveSlide((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setActiveSlide((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };
  

  const handleSlideClick = (index) => {
    setActiveSlide(index);
    setIsHovered(null); // Reset isHovered when changing the active slide
    sliderRef.current.slickGoTo(index);
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowForwardIosRoundedIcon style={{ color: "white", cursor: "pointer" }} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowBackIosNewRoundedIcon style={{ color: "white", cursor: "pointer" }} />
      </div>
    );
  };

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setActiveSlide(next);
      setIsHovered(null); // Reset isHovered when changing the active slide
    },
  };
  const openLink = (link) => {
    window.open(link, '_blank');
  };

  document.body.style.backgroundColor = "black";

  return (
    <div className="App" onWheel={handleScroll} onScroll={handleScroll}>
        <h1 style={{
        color:"white", justifyContent: "center", display: "flex", marginBottom: "1rem", fontFamily: "Cinzel", letterSpacing: 2, marginTop:"0px"
      }}> My projects</h1>
      <Slider ref={sliderRef} {...settings}>
        {projects.map((project, idx) => (
          <div
            className={idx === activeSlide ? "slide activeSlide" : "slide"}
            key={idx}
            onClick={() => handleSlideClick(idx)}
            onMouseEnter={() => setIsHovered(idx)}
            onMouseLeave={() => setIsHovered(null)}
          >
           <Tilt options={{ max: 15, scale: 1.05, speed: 300, glare: true, "max-glare": 0.8 }} className="tilt-root">
              <Card
                sx={{
                  maxWidth: 800,
                  borderRadius: "15px",
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.5)',
                  "&:hover .MuiCardActions-root": {
                    opacity: 1,
                    transform: 'translateY(-5%)',
                    boxShadow: '0px 8px 8px rgba(255, 255, 255, 0.9)',
                  },
                }}
                onMouseEnter={() => setIsHovered(idx)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <CardActionArea>
                  <CardMedia
                     
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{
                    display :"flex",
                    justifyContent :"center",
                    opacity: 0,
                    transform: 'translateY(20%)',
                    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                    "&.fade-in": {
                      opacity: 3,
                      transform: 'translateY(0)',
                    },
                  }}
                  className={isHovered === idx ? 'fade-in' : ''}
                >
                  <Tooltip title="Get code" offset="true" placement="left-end">
                 <GitHubIcon
                   onClick={() => openLink(project.githubLink)}
                    
                   
                    sx={{
                      color: "black",
                    
                      fontSize: 30,
                      
                      marginRight: 6, 
                      cursor: 'pointer',
                      
                    }}
                  />
                  </Tooltip>
                  <Tooltip title="website" offset="true" placement="right-end">
                  <LanguageIcon
                    onClick={() => openLink(project.websiteLink)}
                  
                   
                    sx={{
                      color: "black",
                     
                      fontSize: 30,
                      
                      cursor: 'pointer',
                     
                    }}
                  />
                  </Tooltip>
                </CardActions>
              </Card>
            </Tilt>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Project;