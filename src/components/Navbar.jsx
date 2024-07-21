import { Link } from "react-router-dom"; 
 
function NavBar(){ 
    return(  
        <nav>  
            <Link to="/">Home</Link> 
            <Link to="/resume">Resume</Link> 
            <Link to="/projects">Projects</Link>
        </nav>    
    );
}
export default NavBar;