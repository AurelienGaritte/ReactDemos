import style from "./Exo3.module.css";
import { Exo3Product } from "./Exo3Product.jsx";
export const Exo3 =() => {

    const products = [
        { id: 1, name: 'Pomme', description : 'Provenance : Brésil', isPromo :true, price: 1.5, image: './pomme.jpg' },
        { id: 2, name: 'Banane', description : 'Provenance : South Africa', isPromo : false, price: 1.2, image: '/banane.jpg' },
        { id: 3, name: 'Orange', description : 'Provenance : Portugal', isPromo : false, price: 1.8, image: '/orange.jpg' }
    ]

    return (
        
            <div><br/><h1>Ton maraîcher t'sais biiiiiiiiiien 🐝</h1>
            <div className={style['flex-row']}>
                {
                    products.map((product) => (
                        <Exo3Product product={product} key={product.id} />
                    ))
                }
            </div>
            </div>
        
    )
}