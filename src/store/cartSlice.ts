import { createSlice } from "@reduxjs/toolkit";
import { Pizza } from "../data/menu-items";

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
        
    }
})