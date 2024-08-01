import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "../data/menu-items";
import { RootState } from "./store";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export type CartItem = Pizza & {
    quantity: number;
}

interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Pizza>) => {
            const matchingItem = state.items.find(existingItem => {
                return existingItem.id === action.payload.id;
            });
            if (!matchingItem) {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                });
            } else {
                matchingItem.quantity++;
            }
        },
        removeItem: (state, action: PayloadAction<Pizza>) => {
            const matchingItem = state.items.find(existingItem => {
                return existingItem.id === action.payload.id;
            });
            if (matchingItem) {
                matchingItem.quantity--;
                if (matchingItem?.quantity === 0) {
                    state.items = state.items.filter(existingItem => {
                        return existingItem.id !== action.payload.id;
                    });
                }
            }
        },
        deleteItem: (state, action: PayloadAction<Pizza>) => {
            state.items = state.items.filter(existingItem => {
                return existingItem.id !== action.payload.id;
            });
        },
        resetCart: (state) => {
            state.items = [];
        }
    }
})

export const { addItem, removeItem, deleteItem, resetCart } = cartSlice.actions;

export const selectItemQuantity = (item: Pizza) => {
    return (state: RootState) => {
        const matchingItem = state.cart?.items?.find((existingItem: Pizza) => {
            return existingItem.id === item.id;
        });
        return matchingItem?.quantity || 0;
    }
}

export const selectCartItems = (state: RootState) => {
    return state.cart.items;
}

export const selectCartQuantity = (state: RootState) => {
    // accumulator ?
    // It essentially keeps track of the ongoing result as the reduce method iterates through each element of the array.
    return state.cart?.items?.reduce((accumulator, nextItem) => accumulator + nextItem.quantity, 0);
}

export const selectCartTotal = (state: RootState) => {
    return state.cart?.items?.reduce((accumulator, nextItem) => accumulator + (nextItem.quantity * nextItem.price), 0);
}

const cartReducer = cartSlice.reducer;
export default persistReducer({
    key: 'cart',
    storage,
}, cartReducer);
