import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Entete from './images/en-tete1.png';
import Accueil from './pages/Accueil';
import Bois from './pages/Bois';
import Couture from './pages/Couture';
import DIY from './pages/DIY';
import Geekeries from './pages/Geekeries';
import StickyFooter from './pages/Footer';
import Contact from './pages/contact';


// import {MuiThemeProvider, createMuiTheme, Typography } from '@material-ui/core';

 function App() {


  return (

      <div className="App">  
        <header className="App-header">
          
          
          <nav>
            {/* <Onglet/> */}
          
            <Router>
              <div className="conteneur-img">
                <div className="conteneur-bandeau">
                  <div className="bandeau-noir">
                  <Link to="/Contact" className="link">Contactez-moi ! </Link>
                  </div>
                    <div className="conteneur-titre-btn">
                      
                        <h1>Inspiration d'idées en tout genre</h1>
                        
                      
                      <div className="contBtn"> 
                        <Link to="/Accueil" className="link">Accueil</Link>
                        <Link to="/Bois" className="link">Bois</Link>
                        <Link to="/Couture" className="link">Couture</Link>
                        <Link to="/DIY" className="link">DIY</Link>
                        <Link to="/Geekeries" className="link">Geekeries</Link>
                      </div>
                    </div>
                  </div>
                <div className="image">
                  <img src={Entete} alt="Entete"className="img-fluid"/>
                </div> 
              </div>

              <Switch>
                <Route path="/Contact">
                <Contact/>
                </Route>
                <Route path="/Accueil">
                  <Accueil/>
                </Route>
                <Route path="/Bois">
                  <Bois/>
                </Route>
                <Route path="/Couture">
                  <Couture/>
                </Route>
                <Route path="/DIY">
                  <DIY/>
                </Route>
                <Route path="/Geekeries">
                  <Geekeries/>
                </Route>
              </Switch>

            </Router>
          </nav>
          
        </header>

        <StickyFooter></StickyFooter>
      </div>  
  )
  //   <div className="App">
  //     <header className="App-header">
  //      <img src={Entete} alt="Entete"className="img"/>
  //       <nav>
  //         <Onglet/>
  //       </nav>

  //     </header>
  //     <div>
        
  //     </div>
  //   </div>
  // );
  
}

// const theme = createMuiTheme({
//   typography : {
//     fontSize: 20,
//     "@media (min-width:600px)":{
//       fontSize: 10
//     },
//     [theme.breakpoints.up('md')]: {
//       fontSize: '2.4rem',
//     },
//   }
// })

export default App;
