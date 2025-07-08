import style from './Exo1.module.css';

export const Exo1 = ({nom , age = 18}) => {
    return (
        <div>
        <p className={style.premierExo1}>Bienvenue {nom} sur 
        l'application React !</p>
        <p className={style.premierExo2}>Vous avez {age} ans.</p>
        </div>
    )
}
