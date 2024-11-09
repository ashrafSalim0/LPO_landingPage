import React, { useState, useEffect } from 'react';
import '../App.css';
import Loading from './Loading';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../style/toolbox.css'


function Toolbox() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
         <div className={`loading-screen ${loading ? 'show' : 'hide'}`}>
        <Loading />
      </div>
      <div className={`app-content ${loading ? 'hidden' : ''}`}>
    <div className='main-screen toolbox-main-screen'>
    <Navbar/>

    <div className='page-title-container'>
    <span className='page-title' style={{marginTop: '25%'}}>Our Team Members</span>
    <span className='page-desc'>Take a look at our team members and get to know the faces behind what we do. We're all about collaboration and passion!</span>
    </div>
    
   
   
</div>

<div className='second-screen toolbox-second-screen'> 

   
    <span className='section-title'>
        Front End
    </span>
    <div className='techs-container'>
        <div className='tech-item'>
            <img src='./assets/svg/css.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/tailwind-css.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/bootstrap.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/javascript.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/vuejs.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/react-native.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/angularjs.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/flutter.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/sass.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/adobe-xd.svg'/>
                </div>
    </div>
    <span className='section-title'>
        back end
    </span>
    <div className='techs-container'>
    <div className='tech-item'>
            <img src='./assets/svg/c.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/mongodb.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/node-js.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/javascript.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/typescript.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/python.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/ruby.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/flutter.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/pytorch.svg'/>
                </div>
        <div className='tech-item'>
            <img src='./assets/svg/java.svg'/>
                </div>
    </div>
    <span className='section-title'>
        Cyber Security
    </span>
    <div className='techs-container'>
    <div className='tech-item'>
            <img src='./assets/svg/kali-linux.svg'/>
                </div>
    <div className='tech-item'>
            <img src='./assets/svg/arch-linux.svg'/>
                </div>
    <div className='tech-item'>
            <img src='./assets/svg/aspberry-pi.svg'/>
                </div>
    <div className='tech-item'>
            <img src='./assets/svg/bash.svg'/>
                </div>
    <div className='tech-item'>
            <img src='./assets/svg/kali-linux.svg'/>
                </div>
    </div>
 </div>
<Footer/>

</div>
    </>
  );
}

export default Toolbox;
