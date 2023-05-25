import './tech.css';
import Navbar from '../components/Navbar';




function Tech() {
  return (
    <div className="Projects">
      <Navbar/>
      <section className='intro'>

       
       <p className='p6'>Technologies</p>

          <div className='technologies'>
              <div>
                <p className='p7'>Html</p>
                <p className='p8'>Advance</p>
                <div className='bar'></div>
                <div className='barcolor'></div>
              </div>
              
              <div className='css'>
                <p className='p7'>CSS</p>
                <p className='p8'>Advance</p>
                <div className='bar'></div>
                <div className='barcolor'></div>
              </div>

              <div className='javascript'>
                <p className='p7'>Javascript</p>
                <p className='p8'>Regular</p>
                <div className='bar'></div>
                <div className='barcolor'></div>
              </div>

              <div className='react'>
                <p className='p7'>React</p>
                <p className='p8'>Regular</p>
                <div className='bar'></div>
                <div className='barcolor'></div>
              </div>

              <div className='figma'>
                <p className='p7'>Figma Design</p>
                <p className='p8'>Regular</p>
                <div className='bar'></div>
                <div className='barcolor'></div>
              </div>
  
       </div>
           
        
       </section>
       
       
    </div>
    
  );
}

export default Tech;
