import { useState } from "react"

export const Demo6 = () => {
    //Version : Faire une useState par champs
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [confirm, setConfirm] = useState(false);


    const submit = (event) => {
        event.preventDefault(); //Ne pas déclencher l'envoi du formulaire
        alert(`Bienvenue ${prenom} ${nom}`);
        if(confirm){
            alert('Mouahahahh merci pour votre âme 👿');
        }
    }

    return (
        <div>
            <h2>Les formulaires</h2>

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="prenom">Prénom</label>
                    <input id="prenom" type="text" onChange={ (event) => { setPrenom(event.target.value) } }/>
                </div>
                <div>
                    <label htmlFor="nom">Nom</label>
                    <input id="nom" type="text" onChange={ (event) => { setNom(event.target.value) } }/>
                </div>
                <div>
                    <input id="confirm" type="checkbox" onChange={ (event) => { setConfirm(event.target.checked) }} />
                    <label htmlFor="confirm">Je confirme que cette demo peut aspirer toute mon âme</label>
                </div>

                <input type="submit" value="Se présenter"/>
            </form>

        </div>
    )
}