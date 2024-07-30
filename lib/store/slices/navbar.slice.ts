import { createSlice } from "@reduxjs/toolkit";
import navReducer from "@/lib/store/reducers/navbar.reducer";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    isOpen: false,
  },
  reducers: navReducer,
});

export const { openMenu, closeMenu } = navbarSlice.actions;

export default navbarSlice.reducer;
