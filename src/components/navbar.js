import React, { useState, useEffect } from 'react';
import '../App.css';
function menubutton() {
  console.log('clicked');
  document.querySelector('.short-line').classList.toggle('short-line-active');
  document.querySelector('.long-line').classList.toggle('long-line-active');
  document.querySelector('.last-line').classList.toggle('last-line-active');
}

function Navbar() {
  return (
    <>
    <div className='nav-bar'>
      <button className='menu-button-container' onClick={() => menubutton()}>
        <div className='menu-button-line short-line'></div>
        <div className='menu-button-line long-line'></div>
        <div className='menu-button-line short-line last-line'></div>
      </button>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: 18}}>
      <img className='nav-bar-logo' src='./assets/images/lpologo.png'/>
      <span style={{fontFamily: 'D-DIN Condensed, sans-serif', fontWeight: 'bold', opacity: 0.8,}}>Libyan Programmers Org</span>
      </div>
     </div>    
   
    </>
  );
}

export default Navbar;
