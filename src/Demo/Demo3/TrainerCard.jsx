import style from './Demo3.module.css';


export const TrainerCard = ({trainer}) => {

    return (
        <div className={style.trainer}>
                                    <h2>{trainer.firstname} {trainer.lastname}</h2>
                                    <p>{trainer.birthdate.toLocaleDateString('fr')}</p>
        
                                    {trainer.onVacation && <img src="https://cdn.shopify.com/s/files/1/0080/0984/2786/files/shutterstock_1181523733.jpg" alt="c lé vacanss" />}
                                </div>
    )
}