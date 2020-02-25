import React from 'react';
import logo from './img/remcon-free.png';
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
          
          <a href="https://twitter.com/@RemconC">
            <img className="logo-twitter" src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/channel/UChQAjC7FH9qZhqgeaSy8Icw">
            <img className="logo-youtube" src={youtube} alt="Youtube" />
          </a>
          <a href="https://www.facebook.com/remconconstructora">
            <img className="logo-facebook" src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/remconconstructora">
            <img className="logo-instagram" src={instagram} alt="Instagram" />
          </a>
          
        </div>
      </header>       
    </div>
  );
}

export default App;
