import { useEffect, useState } from "react"

export const Baby = () => {

    const [age, setAge] = useState(0);

    // Hook lancée quand la vue se met à jour
    // On peut mettre en deuxième paramètre, les valeurs à surveiller pour lancer le useEffect. Si on met un tableau vide, le useEffect se lance seulent à l'initialisation du composant
    //En gros -> ngOnInit
    useEffect(() => {
        console.log("Ouin je suis né");

        //! Attention, si vous oubliez les [] en deuxième paramètre, useEffect est appelé, chaque fois que la vue est modifiée. Commet setAge, modifie age et donc modifie la vue, useEffect est rappelé etc etc etc => boucle infinie
        // setAge(p => p + 1)
        
        // Fonction lancée quand le composant va disparaitre de l'écran
        // En gros -> ngOnDestroy
        // C'est ici qu'on peut, par exemple, annuler des requêtes
        return () => {
            console.log("Je suis dead 💀");
            
        }

    }, [])

    return (
        <>
         <p>👶🏻 z'ai {age} ans</p>
        </>
    )
}