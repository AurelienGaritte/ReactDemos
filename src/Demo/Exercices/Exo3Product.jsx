import style from "./Exo3.module.css";


export const Exo3Product = ({ product }) => {
    return (
        <div className={product.isPromo ? style.productpromo : style.product}>
            <strong>{product.isPromo ? 'En promo !' : ''}</strong>
            <br/>
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <p>Prix: {product.price.toFixed(2)} €</p>
            <br/>
            <button>Ajouter au panier</button>
            {product.image && <img src={product.image} alt={product.name} />}
        </div>
    );
}