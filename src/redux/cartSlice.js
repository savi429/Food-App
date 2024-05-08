import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
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
