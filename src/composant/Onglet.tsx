import React, { useState } from 'react';
import './Onglet.css';
import Accueil from '../pages/Accueil'; 
import Bois from '../pages/Bois';
import Couture from '../pages/Couture';
import DIY from '../pages/DIY';
import Geekeries from '../pages/Geekeries';


export default function Onglet(){
//J'initialise mon state à 0
    const [stateOnglets, setStateOnglets] = useState(0);
//création de fonctions qui mettent à jour le state au clic( fonctionne) mais ne retourne pas les composants demandés
    const goAccueil = () => {
        setStateOnglets(1)
        return(
            <Accueil/>
        )
    };
    const goBois = () => {
        setStateOnglets(2);
        return (
            <Bois/>
        )
    };
    const goCouture = () => {
        setStateOnglets(3);
        return(
            <Couture/>
        )
    };
    const goDIY = () => {
        setStateOnglets(4);  
        return(
            <DIY/>
        )
    };
    const goGeekeries = () => {
        setStateOnglets(5);
        return(
            <Geekeries/>
        )
    };


// //essai avec conditions (fonctionne) mais je n'arrive pas à garder les onglets visibles
//     if(stateOnglets === 1){
//         return(
//             <Accueil/>
//         )
//     }
//     else if (stateOnglets === 2){
//         return(
//             <Bois/>
//         )
//     }else if (stateOnglets === 3){
//         return(
//             <Couture/>
//         )
//     }else if (stateOnglets === 4){
//         return(
//             <DIY/>
//         );
        
//     }else if (stateOnglets === 5){
//         return(
//             <Geekeries/>
//         )
//     };
    

    return(
        <div className="divBody">
            <div className="contBtn">  
                <div onClick={ goAccueil } className={`onglets ${stateOnglets === 1 ? 'active' : ''}`}>
                    Accueil
                </div>
                <div onClick={ goBois } className={`onglets ${stateOnglets === 2 ? 'active' : ''}`}>
                    Bois
                </div>
                <div onClick={ goCouture } className={`onglets ${stateOnglets === 3 ? 'active' : ''}`}>
                    Couture
                </div>
                <div onClick={ goDIY } className={`onglets ${stateOnglets === 4 ? 'active' : ''}`}>
                    DIY
                </div>
                <div onClick={ goGeekeries } className={`onglets ${stateOnglets === 5 ? 'active' : ''}`}>
                    Geekeries
                </div>
            </div>
        </div>
    )    
}
