import '../style/Homepage.css';


function Footer() {

  return (
    <>
    <footer id="footer">
    <div className='footer-background-box header__hero--heading-gradient'/>
  <div class="col col1">
    <h3>Libyan Programmers Org</h3>
    <p style={{marginTop: 10, marginBottom: 10,}}>Made with <span style={{color: '#BA6573',}}>❤</span> by LPO Team</p>
    <div  style={{marginTop: 10, marginBottom: 10}} class="social">
      <a href="https://codepen.io/Juxtopposed" target="_blank" class="link"><i class="ti ti-brand-facebook"></i></a>
      <a href="https://twitter.com/juxtopposed" target="_blank" class="link"><i class="ti ti-brand-telegram"></i></a>
      <a href="https://youtube.com/@juxtopposed" target="_blank" class="link"><i class="ti ti-brand-github"></i></a>
    </div>
    <p style={{color: '#818181', fontSize: 'smaller'}}>2024 © All Rights Reserved</p>
  </div>
  <div class="col col2">
    <p>About</p>
    <p>Our mission</p>
    <p>Privacy Policy</p>
    <p>Terms of service</p>
  </div>
  <div class="col col3">
    <p>Services</p>
    <p>Products</p>
    <p>Join our team</p>
    <p>Partner with us</p>
  </div>
  <div class="backdrop"></div>
</footer>
    </>
  );
}

export default Footer;
