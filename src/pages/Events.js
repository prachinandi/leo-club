import React from "react";
import "../styles/Events.css";
import res from "../assets/event.png";
import Rapsody from "../assets/rapsody.jpeg";
import health from "../assets/health.jpeg";
import plant from "../assets/plant.jpeg";
import blood from "../assets/blood.jpeg";
import bute from "../assets/bute.jpeg";
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

    <div className="list-of-events">
      <div className="event1">
       
        <h1>Flagship Event</h1>
        <h2>Rapsody</h2>
         
        
        <div className="content1">
        <p>
        The flagship event of Leo Club, Rhapsody has been one of the best inter school 
        competition over years. Here's your chance to compete among the finest and prove your mettle!
        </p>
        <img className="eventImg" src={Rapsody} alt="Rapsody" />
        </div>
      </div>

      <div className="event1">
       
        <h1>Our Past Events</h1>
        <h2>Plantation Drive at NIT Rourkela</h2>
        <div className="content2">
        <img className="eventImgR" src={health} alt="health" /> 
        <div className="para">
        <p >
        Seeing the world surrounded by the pandemic taught us many lessons, and having good health and maintaining hygiene remains the utmost priority. Seeing this LEO CLUB OF NIT ROURKELA collaborating with ROTARACT CLUB OF NIT ROURKELA brings up a virtual webinar on HEALTH AND HYGIENE.Dr Suresh Kumar Bansal [MBBS, DNB(MD)Flm, FCGP, FIAMS, MAMS], the guest speaker, will enlighten us about physical fitness, healthy lifestyle, stress management faced by many of us these days.
Join us on 18th September from 7 to 8 pm to maintain yourself fit and perfect.
        </p>
      </div>
        </div>
      </div>

      <div className="event1">
       <h2>Plantation Drive at NIT Rourkela</h2>
       <div className="content1">
       <p>
       Leo Club of Rourkela in collaboration with <b>Youth for Sustainability</b> in is launching a plantation drive in NIT Rourkela campus!
      Come join us in this noble initiative where over a 100 plants of various types are to be planted. Stay tuned for further information! Let's make our campus greener.
      <br/>In the recent plantation drive at NIT Rourkela by Leo Club of Rourkela in collaboration with Youth For Sustainability we planted 10 varieties of plants with unique properties to make our campus greener. We planted a total of 100 plants in different parts of the campus.
      We're thankful to all the students who participated in the plantation drive and made it successful. It would not have been possible without the help of the cooperation of NIT Rourkela authority as well.
      </p>
      
      
       <img className="eventImg" src={plant} alt="plantation" />
       </div>
     </div>
      
     <div className="event1">
       
        <h2>Webinar on Tree Bute</h2>
        <div className="content2">
        <img className="eventImgR" src={bute} alt="health" /> 
        <div className="para">
        <p >
        "Do your Little Bit of Good where you are; it is those little bits of Good put all together that overwhelm the world."
This is mainly because environmental degradation threatens the existence of mankind.There can be a way in which every person can care for the environment.

So keeping in mind how to respect and nurture our environment, Leo Club of Rourkela is organising an online webinar on 12.07.2020(Sunday) at 7pm.
This webinar will be held on the topic "Tree Bute" by Mr. Punyasloka Panda. He is the founder at Blueyard. It is an initiative to invoke practical learning and life skills into school children. He is also a lead coordinator at Youth for sustainability (YFS).He has also immensely helped our club during the project "Shirkat" which was a collaboration between our club and YFS.
      </p>
      </div>
        </div>
      </div>
      <div className="event1">
      <h2>Blood Donation Camp</h2>
       <div className="content1">
       <p >
       Leo Club of Rourkela maintains a blood group database where information about the blood groups of willing potential donors is stored. This database helps us to forward the information according to any emergency arising in the local hospitals. So, we hereby request you fill information in the google form in case you are willing to donate blood to whoever is in need of it in the coming year. Please go through the donor guidelines given in the below mentioned link,
       before filling up the form. Also, we request people who will stay in Rourkela for atleast the upcoming year to fill the form.
https://forms.gle/bgUp8PeMfyQeU8258 
<br/> 👉🏻 Donor guidelines : https://www.who.int/campaigns/world-blood-donor-day/2018/who-can-give-blood</p>
   
      <img className="eventImg" src={blood} alt="blood Donation" />
       </div>
     </div>

     



      </div>    
    </div>
        </div>  
   
 );
}
export default Event;
