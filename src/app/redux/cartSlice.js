import { createSlice } from "@reduxjs/toolkit";

// Helper: যেকোনো ফরম্যাটের প্রাইসকে নাম্বারে কনভার্ট করে
const parsePrice = (price) => {
  if (typeof price === "number") return price;
  if (typeof price === "string") {
    const cleaned = price.replace(/[^0-9.-]/g, ""); // ৳, কমা, স্পেস সব রিমুভ
    return parseFloat(cleaned) || 0;
  }
  return 0;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const price = parsePrice(newItem.price);
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem,
          price,           // সবসময় নাম্বার
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // quantity 1 হলে পুরোপুরি রিমুভ
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;