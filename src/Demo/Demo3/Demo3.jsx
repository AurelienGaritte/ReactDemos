import style from "./Demo3.module.css";
import { TrainerCard } from "./TrainerCard.jsx";
export const Demo3 = () => {

    const trainers = [
        { id: 1, firstname: 'Aurélien', lastname: 'Strimelle', birthdate: new Date('1989-11-01'), onVacation: false },
        { id: 2, firstname: 'Aude', lastname: 'Beurive', birthdate: new Date('1989-10-16'), onVacation: true },
        { id: 3, firstname: 'Gavin', lastname: 'Chaineux', birthdate: new Date('1993-10-18'), onVacation: false }
    ]

    return (
        <div>
            <h2>Demo listes :</h2>
            <div className={style['flex-row']}>
                {
                    trainers.map((trainer => (
                        <TrainerCard trainer={trainer} key={trainer.id}/>
                    )
                        
                    ))
                }
            </div>
        </div>
    )
}