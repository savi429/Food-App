import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (prod) => prod.id === action.payload.card.id
      );
      if (existingItemIndex !== -1) {
        // If item already exists, update its quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(current(state));
      state.items.length = 0;
      //state.items =[] its not mutating its just adding reference to it
      // mutate the state or return new state
      //return {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
