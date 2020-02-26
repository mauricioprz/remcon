import React from 'react';
import logo from './img/logoremcont2.png';
import './App.css';
import twitter from './img/twitter.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import youtube from './img/youtube.png';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>En Remodelacion</h1>
          <p>Contacto:<br></br>
            +52 (55) 5596 2058 <br></br> +52 (55) 2106 2206<br></br>
            remcon07@hotmail.com
          </p>
        <div className="redes-sociales">
          
          <a className="text align-text" href="https://twitter.com/@RemconC">
            <p className="align-text">
            <img className="logo-twitter" src={twitter} alt="Twitter" />@RemconC
            </p>
          </a>
          <a className="text" href="https://www.youtube.com/channel/UChQAjC7FH9qZhqgeaSy8Icw">
            <img className="logo-youtube" src={youtube} alt="Youtube" />https://www.youtube.com/channel/UChQAjC7FH9qZhqgeaSy8Icw
          </a>
          <a className="text" href="https://www.facebook.com/remconconstructora">
            <img className="logo-facebook" src={facebook} alt="Facebook" />https://www.facebook.com/remconconstructora
          </a>
          <a className="text" href="https://www.instagram.com/remconconstructora">
            <img className="logo-instagram" src={instagram} alt="Instagram" />https://www.instagram.com/remconconstructora/
          </a>
          
        </div>
      </header>       
    </div>
  );
}

export default App;
