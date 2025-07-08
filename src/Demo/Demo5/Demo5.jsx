import { useState } from "react";

export const Demo5 = () => {

    const [compteur, setCompteur] = useState ()

     

    const increment = (event, pas =1) => {
        setCompteur(previous => previous + pas)
    }
    const reset = () => {
        setCompteur(0);
    }

    return (
        <div style={{ textAlign : "center", marginTop : "5rem"}}>
            <p style ={{ fontSize: "2rem"}}>{compteur}</p>
            <button onClick={ increment }>🌤️</button>
            <button onClick={ (event) => { increment(event, 2)} }>🌥️</button>
            <button onClick={reset}>⚡</button>
        </div>
    )
}