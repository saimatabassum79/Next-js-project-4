import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice"
import cartReducer from "./cartSlice"
import wishlistReducer from  "./wishListSlice"
export const store = configureStore({
    reducer:{
       counter: counterReducer,
       cart:cartReducer,
       wishlist: wishlistReducer
    }
})
