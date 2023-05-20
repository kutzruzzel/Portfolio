import './App.css';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className='intro'>
       <p className='p1'>Welcome to my portfolio!</p>
       <p className='p2'>I am Kutz Ruzzel Sumaya, a Full Stack Developer with a strong focus on creating engaging and dynamic user experiences.</p>
       </div>
       
       <div className='footer'>
       
       <p className='p4'>Email: kutzsumaya@yahoo.com </p>
       <Link to="https://github.com/Kutz-S" >
       <div>
       <FaGithub className='github' />
       </div>
       </Link>
       <Link to="https://www.linkedin.com/in/kutz-sumaya-a03884277/" >
       <div>
       <FaLinkedin className='linkedin' />
       </div>
       </Link>
       </div>

  
    </div>
  );
}

export default App;
