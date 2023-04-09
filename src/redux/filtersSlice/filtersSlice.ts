import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Region } from "../../types/regions";

interface Filters {
  search: string;
  region: Region | "";
}

const initialState: Filters = {
  search: "",
  region: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<Region | "">) => {
      state.region = action.payload;
    },
    cleanUp: () => initialState,
  },
});

export const { setSearch, setRegion, cleanUp } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
