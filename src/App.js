import './App.css';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';


function App() {
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
        <p className='p1'>Welcome to my portfolio!</p>
        <p className='p2'>I am Kutz Ruzzel Sumaya, an aspiring Developer with a strong focus on creating engaging and dynamic user experiences.</p>
       </section>
       
       <section className='darker'>
       <div className='footer'>
       <Link to="mailto:kutzsumaya@yahoo.com" >
       <p className='p4'>Email: kutzsumaya@yahoo.com </p>
       </Link>
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
       </section>
       </header>
      }
    </div>

    
  );
}

export default App;
