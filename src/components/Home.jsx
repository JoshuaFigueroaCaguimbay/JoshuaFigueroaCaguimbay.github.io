import '../App.css';  
import websiteImg from '../assets/website-page.png';
 
function Home(){ 
     return( 
        <div className= "hello"> 
        <h1 className= "heading"> Hi I am  </h1>    
        <h1 className= "heading"> Joshua Figueroa Caguimbay </h1>  
        <br></br> 
        <br></br> 
        <br></br>
       <div className="about-me">    
        <h1 className="heading2"> About me</h1>    
        <img className= "clipartme" src= "https://th.bing.com/th/id/OIP.kttCoI_xe44gb9SCDMU7dwHaPm?rs=1&pid=ImgDetMain"  ></img>
        <p className= "body1"> I am a highschool student currently attending Weston Ci, heading into the coming school year as grade 12. 
         I'm Filipino and Spanish, but I was born and raised in Toronto, Canada, and currently considering pursuing a future career 
        in business in higher education. My current interests include coding, and business.
          </p>
        </div> 
        <hr></hr>
    <h1 className="LIFE">Projects</h1> 
    <img className="website-page-size"src={websiteImg}></img>   
    <h1 className="LIFE">Personal Website</h1> 
    <p> 
    </p>
        </div>    
     );

} 
export default Home;