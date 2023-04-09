import { themeReducer } from "./themeSlice/themeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { countriesReducer } from "./countriesSlice/countriesSlice";
import { filtersReducer } from "./filtersSlice/filtersSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
