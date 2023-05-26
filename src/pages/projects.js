import './projects.css';
import Navbar from '../components/Navbar';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import AnimatedPage from './AnimatedPage';



function Projects() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className="App">
    {
      loading ?

      <HashLoader
      color={"#185ef9"}
      loading={loading}
      size={150}
    
      />

      :

    <header className='App-header'>
      <Navbar/>
  
      <section className='intro'>

       
      

       <div className='curve'></div>
       <AnimatedPage>
        <p className='p5'>Projects</p>
        <div className='proj1'>
            <div className='proj1image'>
                
            </div>
            <div className='proj1name'>
          
                <h1 className='Name1'>
                    EzMoney Web App
                </h1>
              
                <Link to="https://github.com/Kutz-S/MoneyWalletWeb" target="_blank">
                <div>
                <FaGithub className='proj1github' />
                </div>
                </Link>
            </div>
            <p className='proj1footer'>
                React - Styled Components
            </p>
        </div>
        </AnimatedPage>
       </section>
       
       <section className='darker'>
      
      
       </section>
      
       </header>
      }
    </div>
    
  );
}

export default Projects;
