import React from "react";
import "../styles/About.css";
import ReactPlayer from "react-player"
import abt from "../assets/pic4.jpeg";

function About() {
  return (
    <div className="about">
       <h1 className="head"> ABOUT US</h1>  
         <div className="aboutBottom">
       
       <p className="p1">
             
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          
        </p>
        <div className="imgcard">
          <img className="new" src={abt} alt="leo NITR"/>
        </div>
      </div>
        
       
     <div className="vision">
        <h1 className="Ovison"> OUR VISION</h1>
        
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expe
        </p>
      </div> 
      <div className="videoAbout">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=n_QzZeAAWWo"/>
      </div>
    </div>
  );
}

export default About;
