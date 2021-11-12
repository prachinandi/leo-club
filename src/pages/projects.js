import React from "react";
import "../styles/projects.css";
import work from "../assets/projects.jpg";
import Covid from "../assets/covid.jpeg";
import flood from "../assets/flood.jpeg";
import food from "../assets/food.jpeg";
import donation from "../assets/donation.jpeg";
import blanket from "../assets/blanket.jpeg";
import recycle from "../assets/recycle.jpeg";
import net from "../assets/net.jpeg";
import shirkat from "../assets/shirkat.jpeg";

function Projects(){
return(
   <div className="projects">
    <div className="aboutBottom" style={{ backgroundImage: `url(${work})`}}>
     <h1 className="title">Campaigns</h1> </div>
     <div className="projectContents">
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
        <h2>Covid-19 Updates, Myths and Facts</h2>
        <div className="content1">
        <p>
        The flagship event of Leo Club, Rhapsody has been one of the best inter school 
        competition over years. Here's your chance to compete among the finest and prove your mettle!
        </p>
        <img className="eventImg" src={Covid} alt="Rapsody" />
        </div>
      </div>

      <div className="event1">
      <h2>Assam and Bihar Flood</h2>
        <div className="content2">
        <img className="eventImgR" src={flood} alt="health" /> 
        <div className="para">
        <p >
        For almost a month now, Assam and Bihar have been slowly drowning. Both the states have been battling floods of epic proportions which has affected millions of lives in bothh the states.
        While it is a challenge to help out at these rough times due to the pandemic, Leo Club of Rourkela is holding a fundraiser to help the people affected by the flood. We will be collaborating with @friendsforfloods a youth led flood relief organization that is currently working towards the betterment of those heavily affected by the Assam floods and Pranam NGO which has been active in Bihar for the rehabilitation of people affected by the flood there.
       </p>
      </div>
        </div>
      </div>

      <div className="event1">
       <h2>Donation Drive</h2>
       <div className="content1">
       <p>
       We thank and appreciate the frontline police officers working so hard risking their lives in these tough times.
       We pay our utmost respect towards their work and thus Leo Club of Rourkela has donated Rs. 5000/- to a campaign initiated to raise funds for providing masks for the Mumbai police.
       You can also contribute by going to: www.maskformumbaipolice.in
       </p>
       <img className="eventImg" src={donation} alt="donation" />
       </div>
     </div>
      
     <div className="event1">
       
        <h2>Shirkat</h2>
        <div className="content2">
        <img className="eventImgR" src={shirkat} alt="shirkat" /> 
        <div className="para">
        <p >
        Leo in Collaboration with <b> Youth For Sustainability </b> is helping the women of Sundarpur village to earn their livelihood by providing them with paper to make notebooks in the midst of the COVID-19 pandemic crisis.
        Here's our one step towards empowerment of these women under the project SHIRKAT!    </p>
      </div>
        </div>
      </div>

      <div className="event1">
      <h2>Shanti Bhawan Old age Home</h2>
       <div className="content1">
       <p >
       Leo Club of Rourkela donated grocery, vegatables and sanitation items to Shanti Bhawan Old Age Home and Basanti Colony Orphange, both situated in Rourkela.
A part of the funds collected in our project 'Shirkat' in collaboration with @yfs.in for the Corona Crisis has been utilised for the same.
We thank all the donors who are helping others anywhere in these difficult times.
</p>
      <img className="eventImg" src={food} alt="food" />
       </div>
     </div>
   </div>   

   <div className="event1">
   <h2>Recyclathon</h2>
        <div className="content2">
        <img className="eventImgR" src={recycle} alt="recycle" /> 
        <div className="para">
        <p >
        Leo Club of Rourkela is conducting a Recyclothon, a collection drive of Notebook pages.
Date : 1st & 2nd February

Students dispose their old note books which still has some unused pages. We will conduct a door to door collection drive in all the hostels to collect such unused pages and bind them into new notebooks which will then be distributed amongst students studying in the underprivileged schools.

P.S: Any other stationary is also welcomed and if you don't have unused books you could donate at least 5 pages from your current notebook.

Let us do our bit as a society that believes in making education available to everyone, across geographical and social boundaries.</p>
</div>
        </div>
      </div>

      <div className="event1">
      <h2>Spreading Warmth with Blanket Distribution Drive:</h2>       
      <div className="content1">
        <p >
         Leo Club of Rourkela donated grocery, vegatables and sanitation items to Shanti Bhawan Old Age Home and Basanti Colony Orphange, both situated in Rourkela.
         A part of the funds collected in our project 'Shirkat' in collaboration with @yfs.in for the Corona Crisis has been utilised for the same.
         We thank all the donors who are helping others anywhere in these difficult times.As the winter chill turns harsh with each passing day, the members of Leo Club of NIT Rourkela took the initiative to visit Leprosy Colony for distributing blankets to the less privileged people so that they could get sound sleep in cold nights. The purpose of distributing blankets to the needy spreads the message of sympathy, love and sacrifices to the society.
       </p>
       <img className="eventImg" src={blanket} alt="social service" />
       </div>
       </div>
     
       <div className="event1">
   <h2>Leo Donation</h2>
        <div className="content2">
        <img className="eventImgR" src={net} alt="mosquitonet" /> 
        <div className="para">
        <p>
        Previously this month, we got to know about the 'mosquito' problem faced by the residents of Kalyani Basti, an underdeveloped area near NITR.
Leos decided to purchase 100 mosquito nets for them. The distribution drive was carried on 2nd April. The complete project was aimed to benefit around 100 houses in the region. In the hope that this would reduce the menace and the use of toxic smokes as mosquito repellent, Leos returned back all satisfied.</p></div>
        </div>
      </div>

    </div>
    </div>  
    
 );
}
export default Projects;