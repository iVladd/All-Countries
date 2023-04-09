import { RootState } from "../store";

export const selectCountriesInfo = (state: RootState) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectAllCountries = (state: RootState) => state.countries.list;
export const selectFilteredCountries = (
  state: RootState,
  { search = "", region = "" }
) =>
  state.countries.list.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  );
