import '../style/Loading.css';





function Loading() {

  return (
    <>
      <div className='main-width'>
<div className="card">
<img style={{ height: 85,  objectFit: 'cover',marginBottom: 4, right: -20 , position: 'relative'}} src='./assets/images/lpologo.png'/>

  <div className="loader">
    <p>libyan</p>
    <div className="words">
      <span className="word">Programmers</span>
      <span className="word">Desginers</span>
      <span className="word">Pentesters</span>
      <span className="word">Engineers</span>
      <span className="word">Programmers</span>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default Loading;
