import { ComponentType, FC } from "react";
import { MenuItemProps } from "./MenuItem";
import { useAppSelector } from "../store/hooks";
import { CartItem, selectItemQuantity } from "../store/cartSlice";
import { Product } from "../types/Product";

type WithQuantityProps = {
    item: Product
}

const WithQuantity = (Component: ComponentType<MenuItemProps>) => {
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
