import React, { useState, useEffect } from 'react';
import '../style/Homepage.css';
import Loading from './Loading';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../style/aboutus.css'


function Aboutus() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
         <div className={`loading-screen ${loading ? 'show' : 'hide'}`}>
        <Loading />
      </div>
      <div className={`app-content ${loading ? 'hidden' : ''}`}>
    <div className='main-screen aboutus-main-screen'>
    <Navbar/>
    <div className='page-title-container'>
    <span className='page-title' >Our Team Members</span>
    <span className='page-desc'>Take a look at our team members and get to know the faces behind what we do. We're all about collaboration and passion!</span>
    </div>
   
</div>

<div className='second-screen aboutus-second-screen'>
<span className='section-title'>
        about us
    </span>
<div className='aboutus-container'>
    <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat erat, blandit in nisl quis, dictum luctus odio. In pharetra elit ex, scelerisque rutrum turpis aliquam sed. Proin vitae lobortis sem, ut laoreet nulla. Maecenas lacus dui, viverra eget hendrerit vel, laoreet sed neque. Duis scelerisque neque dignissim sollicitudin dictum. Phasellus sit amet eros non massa imperdiet porta. Aliquam non ornare purus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat erat, blandit in nisl quis, dictum luctus odio. In pharetra elit ex, scelerisque rutrum turpis aliquam sed. Proin vitae lobortis sem, ut laoreet nulla. Maecenas lacus dui, viverra eget hendrerit vel, laoreet sed neque. Duis scelerisque neque dignissim sollicitudin dictum. Phasellus sit amet eros non massa imperdiet porta. Aliquam non ornare purus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat erat, blandit in nisl quis, dictum luctus odio. In pharetra elit ex, scelerisque rutrum turpis aliquam sed. Proin vitae lobortis sem, ut laoreet nulla. Maecenas lacus dui, viverra eget hendrerit vel, laoreet sed neque. Duis scelerisque neque dignissim sollicitudin dictum. Phasellus sit amet eros non massa imperdiet porta. Aliquam non ornare purus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat erat, blandit in nisl quis, dictum luctus odio. In pharetra elit ex, scelerisque rutrum turpis aliquam sed. Proin vitae lobortis sem, ut laoreet nulla. Maecenas lacus dui, viverra eget hendrerit vel, laoreet sed neque. Duis scelerisque neque dignissim sollicitudin dictum. Phasellus sit amet eros non massa imperdiet porta. Aliquam non ornare purus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat erat, blandit in nisl quis, dictum luctus odio. In pharetra elit ex, scelerisque rutrum turpis aliquam sed. Proin vitae lobortis sem, ut laoreet nulla. Maecenas lacus dui, viverra eget hendrerit vel, laoreet sed neque. Duis scelerisque neque dignissim sollicitudin dictum. Phasellus sit amet eros non massa imperdiet porta. Aliquam non ornare purus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat erat, blandit in nisl quis, dictum luctus odio. In pharetra elit ex, scelerisque rutrum turpis aliquam sed. Proin vitae lobortis sem, ut laoreet nulla. Maecenas lacus dui, viverra eget hendrerit vel, laoreet sed neque. Duis scelerisque neque dignissim sollicitudin dictum. Phasellus sit amet eros non massa imperdiet porta. Aliquam non ornare purus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat erat, blandit in nisl quis, dictum luctus odio. In pharetra elit ex, scelerisque rutrum turpis aliquam sed. Proin vitae lobortis sem, ut laoreet nulla. Maecenas lacus dui, viverra eget hendrerit vel, laoreet sed neque. Duis scelerisque neque dignissim sollicitudin dictum. Phasellus sit amet eros non massa imperdiet porta. Aliquam non ornare purus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat erat, blandit in nisl quis, dictum luctus odio. In pharetra elit ex, scelerisque rutrum turpis aliquam sed. Proin vitae lobortis sem, ut laoreet nulla. Maecenas lacus dui, viverra eget hendrerit vel, laoreet sed neque. Duis scelerisque neque dignissim sollicitudin dictum. Phasellus sit amet eros non massa imperdiet porta. Aliquam non ornare purus.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat erat, blandit in nisl quis, dictum luctus odio. In pharetra elit ex, scelerisque rutrum turpis aliquam sed. Proin vitae lobortis sem, ut laoreet nulla. Maecenas lacus dui, viverra eget hendrerit vel, laoreet sed neque. Duis scelerisque neque dignissim sollicitudin dictum. Phasellus sit amet eros non massa imperdiet porta. Aliquam non ornare purus.
    
        </span>
</div>
</div>
<Footer/>

</div>
    </>
  );
}

export default Aboutus;
