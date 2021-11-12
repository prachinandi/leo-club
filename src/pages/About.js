import React from "react";
import "../styles/About.css";
import ReactPlayer from "react-player"
import AbBg from "../assets/Aboutbg.jpg";

function About() {
  return (
    <div className="about" style={{ backgroundImage: `url(${AbBg})`}}>
       <h1 className="head"> ABOUT US</h1>  
         <div className="aboutBottom">
       
       <p className="p1">
             
       Leo Club of NIT Rourkela is a coterie that engages in social work in Rourkela. It is one of the oldest and most active clubs of the institution.
       We are a group of enthusiastic socially inclined students who felt the need for a body, which provides opportunities to the students of NIT Rourkela who wish to work for a better society.   
       We have undertaken numerous projects which is inclined towards social good. Our flagship being campaigns, we also conduct year long events like conferences, donation drives, exhibitions and social awareness among people.
       
        </p>
        
      </div>
        
       
     <div className="vision">
        <h1 className="Ovison"> OUR VISION</h1>
        
        <p> <b> L : Leadership </b>
         <br/> Among each one involved,
A feeling of courage to interact with those that the world terms as 'anti-socials',
A sense of empowerment, because you can ease someone's pain,
The power to educate the backward,
And to be an instrument of change.
<br/>
<b> E : Experience </b>
<br/>
The lives of mothers dejected by sons and daughters,
The lives of children left behind by parent,
The lives of those who are hundred steps behind the rest of the world,
Ans a humility that comes only with being associated with this part of the society.
<br/>
<b> O : Opportunity </b>
<br/>
To light a candle in thousand deprived hearts,
To steady a shivery hand and shaky feet,
To upturn a sad face into a smile,
To grow and help grow.
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
