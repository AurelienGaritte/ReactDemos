export const Demo4 = () => {

    let compteur = 0;

    const increment = (event, pas =1) => {
        compteur+= pas;
        console.log(compteur);
    }

    return (
        <div style={{ textAlign : "center", marginTop : "5rem"}}>
            <p style ={{ fontSize: "2rem"}}>{compteur}</p>
            <button onClick={ increment }>➕</button>
            <button onClick={ (event) => { increment(event, 2)} }>➕2</button>
        </div>
    )
}