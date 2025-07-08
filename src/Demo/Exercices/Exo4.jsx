import { useEffect, useState } from "react";

export const Exo4 = () => {

    // Besoins pour date
    const dateDujour = new Date();
    // Besoins pour heure
    const [heureDuJour, setHeureDuJour] = useState(new Date());
    const [timer1, setTimer1] = useState(undefined);
    // Besoins pour chrono
    const [compteur, setCompteur] = useState(0);
    const [timer2, setTimer2] = useState(undefined); //fonctionne aussi avec un boolean que vous allez toggle

    // Besoins pour heure
    const lancerHeure = () => {
        setTimer1( setInterval(() => {
            setHeureDuJour(new Date());
        }, 1000) )
    }

    // Spoilet de la suite : useEffect permet de lancer le timer quand le composant est "monté" (quand il apparait à l'écran)
    useEffect(() => {
        lancerHeure();
        console.log("coucou");
        
    }, [] /* NE JAMAIS OUBLIER */)

    const start = () => {
        setTimer2( setInterval(() => {
            setCompteur(previous => previous + 1);
            //si boolean
            //setBoolean(true)
        }, 100));
    }

    const pause = () => {
        clearInterval(timer2);
        setTimer2(undefined);
    }

    const reset = () => {
        setCompteur(0);
        pause();
    }

    return(
        <div style={{ textAlign : "center", marginTop : "5rem", fontSize : "2rem" }}>
            <p>Aujourd'hui nous sommes le</p>
            <p style={{ color : "tomato" }} >{ dateDujour.toLocaleDateString('fr', { day : '2-digit', month : 'long', year : 'numeric'  })} </p>

            <p>et il est</p>
            <p>{ heureDuJour.toLocaleTimeString('fr') } </p>
            <button disabled={timer1} onClick={lancerHeure}>Activer mise à jour heure</button>

            <p>Besoin d'un chrono ?</p>
            <p> { Math.floor(compteur / 60).toString().padStart(2, '0') }:{ Math.floor(compteur % 60 ).toString().padStart(2, '0') }</p>
            <button onClick={start} disabled={timer2} >Play</button>
            <button onClick={pause} disabled={!timer2}>Pause</button>
            <button onClick={reset} disabled={compteur === 0}>Reset</button>
        </div>
    )
}