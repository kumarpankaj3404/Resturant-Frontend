// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {} // { [itemId]: { ...itemData, qty: number } }
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (!state.items[item._id]) {
        state.items[item._id] = { ...item, qty: 1 };
      }
    },
    incrementItem: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty += 1;
      }
    },
    decrementItem: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty -= 1;
        if (state.items[id].qty <= 0) {
          delete state.items[id];
        }
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        delete state.items[id];
      }
    }
  },
});

export const { addItem, incrementItem, decrementItem ,deleteItem} = cartSlice.actions;
export default cartSlice.reducer;
