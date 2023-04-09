import { RootState } from "../store";

export const selectSearch = (state: RootState) => state.filters.search;
export const selectRegion = (state: RootState) => state.filters.region;
export const selectFilters = (state: RootState) => state.filters;
