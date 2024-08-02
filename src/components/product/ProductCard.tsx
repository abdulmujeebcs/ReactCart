import { FC } from "react";
import { Product } from "../../types/Product";
import { useAppDispatch } from "../../store/hooks";
import { addItem } from "../../store/cartSlice";
import styles from "./product-card.module.css";

type ProductCardProps = {
    product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const dispatch = useAppDispatch();

    return (
        <div className={`card bg-base-100 shadow-xl ${styles.card}`}>
            <figure className={styles.figure}>
                <img
                    src={`/images/pizzas/${product.image}`}
                    alt={product.title}
                    className={styles.image}
                />
            </figure>
            <div className={`card-body ${styles.cardBody}`}>
                <h2 className={`card-title ${styles.cardTitle}`}>{product.title}</h2>
                <h2>€{product.price}</h2>
                <div className={`card-actions justify-center mt-3 ${styles.cardActions}`}>
                    <button className="btn btn-primary w-full"
                        onClick={() => {
                            dispatch(addItem(product));
                        }}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;