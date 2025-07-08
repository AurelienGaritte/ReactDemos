export const Demo2 = ({ havePet = true, name, breed, image}) => {

    //Première façon de faire un rendu conditionnel
    //? Si pas d'animal
    if (!havePet) {
        return (
            <>
                <h3>Oh non, trop triste ! 😑</h3>
                <a href="https://www.spa-charleroi.be/">Adoptez un animal !</a>
            </>
        )
    }

    return (
            <>
                <h3> Oh vous êtes l'heureux propriétaire de {name} ! 😍</h3>
                {
                    //Deuxième façon de faire un rendu conditionnel
                    //? Si pas d'image, on affiche un message par défaut
                    (image ? <img src={image} alt={name}/> : <span>💀💩</span>) 
                }
                {
                    //Troisième façon de faire du conditionnel
                    //? N'afficher quelque chose que si la condition est vraie
                    breed && <p>Race : {breed}</p>
                }
            </>
    )
}   