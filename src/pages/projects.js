import './projects.css';
import Navbar from '../components/Navbar';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Projects() {
  return (
    <div className="Projects">
      <Navbar/>
      <section className='intro'>

       
      

       <div className='curve'></div>
        <p className='p5'>Projects</p>
        <div className='proj1'>
            <div className='proj1image'>
                
            </div>
            <div className='proj1name'>
          
                <h1 className='Name1'>
                    EzMoney Web App
                </h1>
              
                <Link to="https://github.com/Kutz-S/MoneyWalletWeb" >
                <div>
                <FaGithub className='proj1github' />
                </div>
                </Link>
            </div>
            <p className='proj1footer'>
                React - Styled Components
            </p>
        </div>
       </section>
       
       <section className='darker'>
      
      
       </section>
    </div>
    
  );
}

export default Projects;
