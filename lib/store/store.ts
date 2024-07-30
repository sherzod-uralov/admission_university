import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "@/lib/store/slices/navbar.slice";

export const Store = configureStore({
  reducer: {
    navbar: NavbarReducer,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
