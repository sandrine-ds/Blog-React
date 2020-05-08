import React from 'react';
import Lingette1 from '../images/lingette1.jpg';
import Lingette2 from '../images/lingette2.jpg';
import './couture.css';
import Grid from '@material-ui/core/Grid';


const Couture = () => {
    return(

        <div className="couture">
            <Grid item xs>
            <div className="post1">
                <h1 className="titre1">Lingettes écologiques</h1>
                <div className="par-ctn">
                    <img src={Lingette2} alt="lingette2"className="img-fluid1"/>
                    
                    <p className="par1">Il est important à mes yeux d'éviter le gaspillage en récupérant les matières vouées à la poubelle. 
                        Ce pourrait être le cas de chutes de tissus trop petites. Pour autant, la récup' ne doit pas se faire 
                        au détriment de l'esthétique. C'est pour cela que je choisis mes tissus avec grand soin, afin qu'ils 
                        me plaisent du début à la fin de leur vie !
                        Fabriquer des lingettes a été une de mes premières idées. De petite taille, elles remplacent le coton 
                        et peuvent se fabriquer avec des chutes de tissus. Le seul investissement a été le choix d'un tissu éponge 
                        en fibre de bambou de grande qualité.
                        L'expérience fût si concluante qu'on m'en a commandé beaucoup et m'a incité à ouvrir une boutique Etsy 
                        qui marche très bien !
                    </p>
                    <img src={Lingette1} alt="lingette1"className="img-fluid1"/>
                </div>
                
            </div>
            </Grid>
            <div>
            <h1>Création de vêtements</h1>
                {/* <img src="imagesprojetperso/Creations/robe1a.jpg">
                <img src="imagesprojetperso/Creations/robe1b.jpg">
                <img src="imagesprojetperso/Creations/robe2a.jpg">
                <img src="imagesprojetperso/Creations/robe2b.jpg">
                <img src="imagesprojetperso/Creations/robe2c.jpg"> */}
                Quel fierté de créer ses propres vêtements !
                Ces 2 créations ont été faites en moulage, c'est-à-dire sans patron. Je me suis inspiré de certaines
                    photos, je les ai "maquetté", puis grâce à mon mannequin de couture j'ai pu laisser aller mon 
                    inspiration, pour un résultat unique. Perfectible certes, mais portable, avec beaucoups de compliments !
            </div>
            <div>
                <h2>Lingettes</h2>
                <p>Les lingettes sont très tendances en ce moment. Ecologiques, économiques et de qualité, elles 
                    permettent d'éviter l'achat de cotons. <br/>
                    Créées avec un tissu coton coloré d'une part, et de tissu éponge en fibre de bambou d'autre 
                    part, leur tenue permet un démaquillage efficace et durent dans le temps.
                </p>
            </div>
            <div>
                <h2>Sopalin écologique</h2>
                <p>Dans le même soucis écologique, la possibilité d'arrêter d'acheter du sopalin a été la grande 
                    motivation à créer ces essuis-tout.<br/>
                    Avec le même principe de création que les lingettes, les essuis-tout sont reliés par bouton 
                    pression. Ils supportent sans problème les lavages en machine à haute température.
                </p>
            </div>
            <div>
                <h2>Pochettes</h2>
                <p>Premières de mes créations, ces petites pochettes bien pratiques permettent de stocker des petits 
                    objets de manière esthétiques. Réalisées en recto verso, elles sont réversibles.
                </p>
            </div>
            <div>
                <h2>Robe de soirée</h2>
                <p>L'étape suivante dans l'apprentissage de la couture a été de s'attaquer à la création de vêtements. 
                    J'ai imaginé cette robe, puis j'en ai créé le patron. <br/>
                    Elle a été assez technique à réaliser et a nécessité de nombreux points de compétences : 
                    pose de fermeture éclair invisible, création de patron aux bonnes mesures, pose de nombreuses 
                    pièces de tissus.
                </p>
            </div>
            <div>
                <h2>Robe d'été</h2>
                <p> Pour cette robe, je me suis inspirée d'une publicité sur Facebook. J'ai beaucoup apprécié le modèle 
                    de la robe et j'ai décidé de m'en inspirer.<br/>
                    La fabrication de cette robe a été différente de la précédente car j'ai du la réaliser en
                    "moulage" : sur mon mannequin de couture adapté à mes mensurations, il faut appliquer le 
                    tissu pour en évaluer le "tombé", et découper les pièces en fonction de la tenue du tissu. 
                    L'assemblage des pièces se fait également sur le mannequin. 
                    <br/> J'ai appris seule ces techniques et je suis heureuse du résultat !
                </p>
            </div>
            <div>
                <h2>Short fluide</h2>
                <p> Le modèle de ce short est une des tendances mode du moment. <br/> J'ai recherché plusieurs modèles 
                    sur internet et je m'en suis inspirée pour créer mon patron. 
                </p>
            </div>
            <div>
                <h2>Robe de soirée noire</h2>
                <p> Dans la suite de l'apprentissage de la couture, l'étape suivante était la transmission ! Une amie 
                    m'a demandé de lui apprendre à coudre. Son projet était ambitieux, en effet on commence rarement son 
                    premier projet par une robe aussi exigeante !
                    <br/> J'ai considéré toutefois qu'il était possible de parvenir à un bon résultat moyennant patience, 
                    rigueur et application. 
                </p>
            </div>
            <div>
                <h2>Tipi pour chat</h2>
                <p> La couture étant un passe temps de plus en plus présent dans ma vie, j'ai recherché son application 
                    dans tous les coins de l'appartement. Mon chat avait un panier trop commun à mon goût, j'ai donc décidé 
                    de lui offrir son petit coin de tranquilité avec ce tipi.
                    <br/>Réalisé avec une chute de tissu original et une vieille chemise, ce tipi a la possibilité d'être 
                    déhoussé afin de le laver !
                </p>
            </div>
        </div>

    )
}

export default Couture;