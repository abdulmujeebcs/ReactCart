import { ComponentType, FC } from "react";
import { useAppSelector } from "../store/hooks";
import { CartItem, selectItemQuantity } from "../store/cartSlice";
import { Product } from "../types/Product";
import { ProductItemProps } from "./product/ProductItem";

type WithQuantityProps = {
    item: Product
}

const WithQuantity = (Component: ComponentType<ProductItemProps>) => {
    const WithQuantityComponent: FC<WithQuantityProps> = (props) => {
        const { item } = props;
        const quantity = useAppSelector(selectItemQuantity(item))

        const cartItem: CartItem = {
            ...item,
            quantity
        }
        return <Component item={cartItem} />
    }
    return WithQuantityComponent;
}
export default WithQuantity;
