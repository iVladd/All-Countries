import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types/country";
import { ALL_COUNTRIES } from "../../config";
import { Status } from "../../types/status";

export const loadCountries = createAsyncThunk<
  Country[],
  undefined,
  {
    rejectValue: string;
  }
>("countries/load-countries", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(ALL_COUNTRIES);
    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    return rejectWithValue("Unknown error");
  }
});

type CountrySlice = {
  status: Status;
  error: string | null;
  list: Country[];
};

const initialState: CountrySlice = {
  status: "idle",
  error: null,
  list: [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || "Cannot load data";
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.sort((a, b) =>
          a.name.common > b.name.common ? 1 : -1
        );
      });
  },
});

export const countriesReducer = countriesSlice.reducer;
