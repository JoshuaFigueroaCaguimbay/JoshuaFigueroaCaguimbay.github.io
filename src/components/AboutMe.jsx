import websiteImg from '../assets/thumbs up.png'; 
 function AboutMe(){ 
    return(  
        <div>
            
        <h1 className="LIFE">About Me </h1>
        <p className= "bodyam"> I am a high school student currently attending Weston Ci, heading into the coming school year in grade 12.
        I'm Filipino and Spanish, but I was born and raised in Toronto, Canada, and I'm currently considering pursuing a future career.
        in business in higher education. My current interests include coding, the gym, and business, but I am currently working on widening my interests.
        As a student, I am currently in the WestonCI Music Council (member), Media Services (member), and WestonCI Computer Science (Vice President).
        My averages are currently always above 90%, and my average for this year (grade 11, top 6) is 97.6%. I hope this helped you learn a 
        little about me!
          </p> 
          <img className="website-page-size"src={websiteImg}></img> 

        </div> 
    ); 
} 
export default AboutMe;