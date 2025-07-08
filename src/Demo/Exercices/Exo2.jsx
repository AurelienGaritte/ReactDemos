import style from './Exo2.module.css';
import classNames from 'classnames';


export const Exo2 = ({ name, onVacation = false, available = true, category="Pas de spécialité", gender="o" }) => {
    
    const cardClass = classNames(
    style.card,
    {
      [style['card--m']]: gender === 'm',
      [style['card--f']]: gender === 'f',
      [style['card--o']]: gender === 'o',
    }
);



    if (!available) {
        return (
            <div className={cardClass}>
                <h3>Dommage, {name} est en vacances ! 🧭</h3>
            </div>
        )
    }
    return (
        <div className={cardClass}>
            <h3>{name} est disponible !!! 🚀</h3>
            <p>Catégorie : {category}</p>
            
            <p></p>
            {
                onVacation ? <span>En vacances ! 🏖️</span> : <button> Selectionnez-moi ! ✅</button>
            }
           
        </div>
    )
}