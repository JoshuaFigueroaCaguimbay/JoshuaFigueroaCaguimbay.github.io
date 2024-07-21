import logo from './logo.svg';
import './App.css';  
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Projects from './components/projects.jsx';   
import Resume from './components/Resume.jsx';  

function App() {
  return (   
    <Router> 
      <div>  
        <Navbar />
        <Routes>   
          <Route path="/" element={<Home />} />  
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> 
      </div> 
    </Router>  
  );
}

export default App;
