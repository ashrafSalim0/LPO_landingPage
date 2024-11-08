import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './screens/Loading';
import Footer from './components/footer';
import Navbar from './components/navbar';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  var elems = document.getElementsByClassName("card-number-title");
  for (var i = 0; i < elems.length; i++) {
    var mytext = elems[i].innerText;
    elems[i].dataset.trunc = mytext;
  }

  return (
    <>
         <div className={`loading-screen ${loading ? 'show' : 'hide'}`}>
        <Loading />
      </div>
      <div className={`app-content ${loading ? 'hidden' : ''}`}>
    <div className='main-screen'>
      
    <Navbar/>
      <div className='scroll-mouse'>
        <div></div>
      </div>
      <div className='main-screen-buttons-container'>
          <button className='button-navigation'>Projects</button>
          <button className='button-navigation'>About</button>
        </div>
        <div className='main-pic-container'>
        <img src="./assets/gif/techny-rocket.gif" alt="" className='rocket-gif' />
        </div>  

        <p className='main-width-text'> our expertise lies in<br></br> turning <span className='header__hero--heading-gradient'>creative ideas</span> <br></br> into actual products.</p>
    </div>
    <div className='second-screen'>
      <div className='widgets-container'>
        <div className='widget-one'>
          <div style={{ position: 'relative', top: '80%'}}>
          <p style={{textAlign: 'center'}} className='widget-title'>About us</p>
          <p style={{textAlign: 'center'}} className='widget-desc'>Here you can find the answered questions!</p>
          </div>
          <div className="pattern-container">
</div>
        </div>
        <div className='widget-two'>
        <span className='widget-title'>Book a call with us</span>
        <p className='widget-desc'>We love to chat even if there's <br/> no agenda!</p>

        <img className='agenda-pic' src='./assets/images/agenda.webp'/>
        </div>
        <div className='widget-three'>
        <div style={{ position: 'relative', bottom: -80, textAlign: 'center', alignItems:'center', display: 'flex', flexDirection:'column' }}>
        <p style={{textAlign: 'center'}} className='widget-title'>Our Team</p>
        <p style={{textAlign: 'center'}} className='widget-desc'>Want to get to know our team members? Check this out</p>
        </div>
        <div className='profile-connect-container'>
        <div className='profile-connect'>
          <img className='profile-pfp' src='./assets/images/pfp1.png'/>
        </div>
        <div style={{width: 80, height: 5, background: '#4F4E4C', borderRadius: 10, opacity: 0.8}}/>
        <div className='profile-connect'>
        <img className='profile-pfp' src='./assets/images/pfp2.png'/>

        </div>
        <div style={{width: 80, height: 5, background: '#4F4E4C', borderRadius: 10, opacity: 0.8}}/>
        <div className='profile-connect'>
        <img className='profile-pfp' src='./assets/images/pfp3.png'/>

        </div>
        </div>
        </div>
        <div className='widget-four'> 
          <span className='widget-title'>Toolbox</span>
          <p className='widget-desc'>Check out our favorite tools and spots <br/> around the web.</p>
          <div className='toolbox-icons-container'>
          <i style={{opacity: 0.7, bottom: 200, right: 120,}} class="ti ti-brand-firebase"></i>
          <i style={{opacity: 0.7, bottom: 200, left: 120,}} class="ti ti-brand-php"></i>
          <i style={{opacity: 0.7, bottom: 200, left: 30,}} class="ti ti-brand-typescript"></i>
          <i style={{opacity: 0.7, bottom: 200, right: 30,}} class="ti ti-brand-c-sharp"></i>
          <i style={{opacity: 0.7, bottom: 200, left: 200,}} class="ti ti-brand-css3"></i>

          

          <i style={{opacity: 0.7, bottom: 140, right: 75,}} class="ti ti-brand-git"></i>
          <i style={{opacity: 0.7, bottom: 140, left: 160,}} class="ti ti-brand-vue"></i>
          <i style={{opacity: 0.7, bottom: 140, left: 75,}} class="ti ti-brand-angular"></i>
          <i style={{opacity: 0.7, bottom: 140, right: 5,}} class="ti ti-brand-visual-studio"></i>
          <i style={{opacity: 0.7, bottom: 140, left: 5,}} class="ti ti-sdk"></i>
          <i style={{opacity: 0.7, bottom: 140, right: 160,}} class="ti ti-brand-docker"></i>



          <i style={{opacity: 0.6, bottom: 80, right: 120,}} class="ti ti-brand-html5"></i>
          <i style={{opacity: 0.6, bottom: 80, left: 120,}} class="ti ti-brand-javascript"></i>
          <i style={{opacity: 0.6, bottom: 80, left: 30,}} class="ti ti-brand-github"></i>
          <i style={{opacity: 0.6, bottom: 80, right: 30,}} class="ti ti-brand-python"></i>
          <i style={{opacity: 0.6, bottom: 80, left: 200,}} class="ti ti-brand-react-native"></i>



          <i style={{opacity: 0.5, bottom: 20, right: 75,}} class="ti ti-brand-kotlin"></i>
          <i style={{opacity: 0.5, bottom: 20, left: 160,}} class="ti ti-brand-golang"></i>
          <i style={{opacity: 0.5, bottom: 20, left: 75,}} class="ti ti-brand-stackoverflow"></i>
          <i style={{opacity: 0.5, bottom: 20, right: 5,}} class="ti ti-brand-vite"></i>
          <i style={{opacity: 0.5, bottom: 20, left: 5,}} class="ti ti-api"></i>
          <i style={{opacity: 0.5, bottom: 20, right: 160,}} class="ti ti-brand-flutter"></i>



          </div>
        </div>
        <div className='widget-five'>
          <img className='widget-five-pic' src='./assets/images/lpologo.png'/>
          <div className='social-media-btns-container'>
              <button className='social-media-btn'>
              <i class="ti ti-brand-facebook"></i>
              </button>
              <button className='social-media-btn'>
              <i class="ti ti-brand-x"></i>
              </button>
              <button className='social-media-btn'>
              <i class="ti ti-brand-tiktok"></i>
              </button>
              <button className='social-media-btn'>
              <i class="ti ti-brand-github"></i>
              </button>
              <button className='social-media-btn'>
              <i class="ti ti-brand-telegram"></i>
              </button>
              <button className='social-media-btn'>
              <i class="ti ti-brand-discord"></i>
              </button>
              <button className='social-media-btn'>
              <i class="ti ti-brand-reddit"></i>
              </button>
              <button className='social-media-btn'>
              <i class="ti ti-brand-linkedin"></i>
              </button>
              <button className='social-media-btn'>
              <i class="ti ti-mail"></i>
              </button>


          </div>
        </div>
      </div>
    </div>

    <div className='third-screen'>
      <div className='cards-container'>
        <div className='card'>
            <span className='card-number-title'>01</span>
        </div>
        <div className='card'>
            <span className='card-number-title'>02</span>
        </div>
        <div className='card'>
            <span className='card-number-title'>03</span>
        </div>
        <div className='card'>
            <span className='card-number-title'>04</span>
        </div>
        <div className='card'>
            <span className='card-number-title'>05</span>
        </div>

      </div>
    </div>
   
   
    <Footer/>
</div>
    </>
  );
}

export default App;
