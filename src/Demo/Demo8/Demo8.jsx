import { useEffect, useState } from "react"
import { Baby } from "./Baby";
import axios from "axios";


export const Demo8 = () => {

    const [gaveBirth, setGaveBirth] = useState(false);
    const [person, setPerson] = useState( { firstname : "Aude", age : undefined })

    useEffect(() => {
        getAge();
    }, [])

    const getAge = async () => {
        try {
            //response contiendra un objet représentant la réponse de la requête si elle n'échoue pas, sinon on ira direct dans le bloc catch
            const response = await axios.get(`https://api.agify.io/?name=${person.firstname}&country_id=BE`);
            // le résultat de la requête se trouvera toujours dans response.data
            setPerson( p => { return { ...p, age : response.data.age }});    

        }
        catch(err){
            console.log(err);
            
        }        
    }

    return (
        <>
            <button onClick={() => { setGaveBirth(p => !p) }} >🤰🏻</button>
            { gaveBirth && <Baby /> }

            <input type="text" value={person.firstname} placeholder="Entrez votre prénom" onChange={(e) => { setPerson(p => { return { ...p, firstname : e.target.value } }) } } />
            <button onClick={getAge}>Recherche âge probable</button>

            { person.age &&  <p>Votre âge le plus probable est {person.age} ans !</p>}
        </>
    )
}