import React from "react";
import "../styles/gallary.css";
import gmain from "../assets/home.jpg";
import health from "../assets/health.jpeg";
import plant from "../assets/plant.jpeg";
import blood from "../assets/blood.jpeg";
import bute from "../assets/bute.jpeg";

function Gal(){
return(
 <div className="GalHome">
     <div className="Ghome" style={{ backgroundImage: `url(${gmain})`,} }>
     <div className="gal-content">
        <h1>Gallary</h1>
     </div>
 </div>

 <div className="imgItems">
     <div className="Cols">
      <div className="card">
      <img className="cardImg" src={blood} alt="Rapsody"  /> 
      bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
      </div>

      <div className="card">
      <img className="cardImg" src={blood} alt="Rapsody"  /> 
      bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
      </div>

      <div className="card">
      <img className="cardImg" src={blood} alt="Rapsody"  /> 
      bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
      </div>
     </div>

     <div className="Cols">
         
     </div>

     <div className="Cols">
         
     </div>

 </div>
 </div>
);
}
export default Gal;