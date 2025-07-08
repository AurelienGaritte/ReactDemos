/*export const Demo1 = (props) => {
    const {jour, repas} = props;

    return (
        <div>
            <h2>Demo 1 : </h2>
        </div>
    )
}
*/
import './Demo1.css';
//? Attention via fichier css simple, votre classse risque d'être
//? écrasée par une autre classe du même nom dans un autre fichier css
import style from './Demo1.module.css';
//? Avec module.css, vous pouvez créer des classes CSS locales
//? qui ne seront pas écrasées par d'autres classes du même nom
//? Vous pouvez aussi utiliser des classes globales en les préfixant avec : global

export const Demo1 = ({jour = 'dimanche', repas = 'poulet frite compote', mangeurs = 1}) => {
    // Jour et repas sont des props (valeurs passées au composant)
    //! ⚡Les props sont immuables⚡
    return (
        <div>
            <h2 className="title">Demo 1 : Props & Style</h2>
            <p className={style.uglytext}> Aujourd'hui c'est {jour} et on mange
                 <span className={style['font-bold']}>{repas}</span> à {mangeurs} 
                 personne(s) ! 😒</p>
            
        </div>
    )
}