import { createSlice } from "@reduxjs/toolkit";

export const basicSlice = createSlice({
  name: "basic",
  initialState: { name: "", email: "", phone: "" },
  reducers: {
    updateForm: (state, action) => action.payload,
  },
});

export const { updateForm } = basicSlice.actions;
export default basicSlice.reducer;
