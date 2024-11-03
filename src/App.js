import logo from './logo.svg';
import './App.css';


function menubutton(){
  console.log('clicked')
  document.querySelector('.short-line').classList.toggle('short-line-active')
  document.querySelector('.long-line').classList.toggle('long-line-active')
  document.querySelector('.last-line').classList.toggle('last-line-active')
}


function App() {
  return (
    <>
         
    <div className='main-screen'>
    <div className='nav-bar'>
      <button className='menu-button-container' onClick={() => menubutton()}>
        <div className='menu-button-line short-line'></div>
        <div className='menu-button-line long-line'></div>
        <div className='menu-button-line short-line last-line'></div>
      </button>
     </div>
      <div className='scroll-mouse'>
        <div></div>
      </div>
      <div style={{display: 'flex', gap: '1.5rem', position: 'absolute', bottom: '3rem', left: '3rem'}}>
          <button className='button-navigation'>Projects</button>
          <button className='button-navigation'>About</button>
        </div>
        <div className='profile-pic-container'>
        <img src="./assets/gif/techny-rocket.gif" alt="" className='rocket-gif' />
        <img src="./assets/gif/techny-rocket.gif" alt="" className='rocket-gif outer-gif' />

        </div>  

        <p className='main-width-text'> my expertise lies in<br></br> turning <span className='header__hero--heading-gradient'>creative ideas</span> <br></br> into actual products.</p>
    </div>
    <div className='second-screen'></div>
   

    </>
  );
}

export default App;
