import React from 'react';
import './App.css';

import Onglet from './composant/Onglet';
import Entete from './images/en-tete.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={Entete} alt="Entete"className="img"/>
        <nav>
          <Onglet/>
        </nav>

      </header>
      <div>
        
      </div>
    </div>
  );
}

export default App;
