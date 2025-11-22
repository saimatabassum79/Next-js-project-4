import {createSlice} from "@reduxjs/toolkit";
const WishListSlice = createSlice({
    name:"wishlist",
    initialState:{
        count2:0,
        items:[]
    },
    reducers:{
        addToWishlist:(state,action)=>{
            state.count2++;
            state.items.push(action.payload)
        }
    }
})
export const {addToWishlist} = WishListSlice.actions;
export default WishListSlice.reducer;