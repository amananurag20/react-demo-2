import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    name: "aman",
    fee: "18000",
    course: [
      "web development",
      "testing",
      "data analyst",
      "personality development",
    ],
  },

  reducers: {
    addItem: (state, action) => {
      let newItem = action.payload;
      state.items.push(newItem);
    },

    removeItem: (state, action) => {
      let removeItem = action.payload;
      console.log({ removeItem });

      let filteredData = state.items.filter((item) => {
        return item.title !== removeItem.title;
      });

      state.items = filteredData;
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
