import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload });
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    updateItem: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.text = action.payload.text;
    },
  },
});

export const { addItem, deleteItem, updateItem } = crudSlice.actions;
export default crudSlice.reducer;