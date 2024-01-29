import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";

export const createStore = () =>
  configureStore({
    reducer: {
      category: categoryReducer,
    },
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
