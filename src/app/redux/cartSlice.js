import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name: "cart",
    initialState: {
        count: 0,
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.count += 1;
            state.items.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.count = state.items.length;
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
        }
    }

})
export const { addToCart,removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
