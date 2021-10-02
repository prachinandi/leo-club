import React from "react";
import "../styles/Events.css";
import res from "../assets/event.jpg";
function Event(){
return(
   <div className="event">
     
     <div className="eventimage" style={{ backgroundImage: `url(${res})`}}>
     <h1 className="title">Our Events</h1> </div>
     <div className="eventsContents">
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
export default Event;
