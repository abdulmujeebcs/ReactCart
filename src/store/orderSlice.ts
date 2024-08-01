import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem } from "./cartSlice"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage";

export type Order = {
    id: string,
    creditCardNumber: string,
    items: CartItem[],
    state: 'ready' | 'pending',
    total: number
}
interface OrderState {
    items: Order[]
}

const initialState: OrderState = {
    items: []
}
export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        createOrder: (state, action: PayloadAction<Order>) => {
            const maskedCCRegex = /\d(?=(?:\D*\d){4})/g;
            const maskedCCNumber = action.payload.creditCardNumber.replace(
                maskedCCRegex,
                '*'
            );
            const newOrder: Order = {
                ...action.payload,
                creditCardNumber: maskedCCNumber
            }
            state.items.push(newOrder);
        },
        removeOrder: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const { createOrder, removeOrder } = ordersSlice.actions

const ordersReducer = ordersSlice.reducer;

export default persistReducer({
    key: 'orders',
    storage,
}, ordersReducer)
