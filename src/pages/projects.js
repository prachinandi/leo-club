import React from "react";
import "../styles/projects.css";
import work from "../assets/projects.jpg";
function Projects(){
return(
   <div className="projects">
    <div className="aboutBottom" style={{ backgroundImage: `url(${work})`}}>
     <h1 className="title">Our Projects</h1> </div>
     <div className="projectContents">
     <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritamollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.</p>
    </div>
    </div>  
    
 );
}
export default Projects;