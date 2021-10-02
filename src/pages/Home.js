import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/home.jpg";
import "../styles/Home.css";
import About from "./About";
import Eve from "./Events";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Projects from "./projects";



function Home() {
 
  return (
    <div className="MainPage">
    <div className="home" style={{ backgroundImage: `url(${main})`,} }>
      
      <div className="headerContainer">
        <h1> LEO Club </h1>
        <h2>'Social Body of NIT Rourkela'</h2>
        <div className="socialMedia">
        <InstagramIcon/> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
             
      </div>   
      </div>
      <About/>
      <Eve/>
      <Projects/>
      </div>
  );
 
}

export default Home;
