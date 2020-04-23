import React from 'react';
import './accueil.css'
import Onglet from '../composant/Onglet';

const Accueil = () => {


    if(stateOnglets === 1){
        return(
            <Accueil/>
        )
    }
    else if (stateOnglets === 2){
        return(
            <Bois/>
        )
    }else if (stateOnglets === 3){
        return(
            <Couture/>
        )
    }else if (stateOnglets === 4){
        return(
            <DIY/>
        );
        
    }else if (stateOnglets === 5){
        return(
            <Geekeries/>
        )
    };
return(
    <div className="accueil">
        <h1>Présentation</h1>
        <p>
            Je m'appelle Sandrine Da Silva, touche à tout, je m'inspire 
            grandement des tendances en terme de décoration intérieure.
            Motivée par le souhait de consommer moins mais plus intelligemment, 
            j'apprécie de découvrir différentes techniques en auto didacte afin 
            de donner une nouvelle vie aux matériaux.
        </p>
    </div>
)
}

export default Accueil;