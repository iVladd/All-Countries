import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import {
  // selectAllCountries,
  selectCountriesInfo,
  selectFilteredCountries,
} from "./countriesSelectors";
import { useEffect } from "react";
import { loadCountries } from "./countriesSlice";
import { Country } from "../../types/country";
import { selectFilters } from "../filtersSlice/filtersSelectors";

const useCountries = (): [
  Country[],
  ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useAppDispatch();
  const filters = useSelector(selectFilters);
  const countries = useSelector((state: RootState) =>
    selectFilteredCountries(state, filters)
  );
  const { error, status, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { error, status, qty }];
};

export default useCountries;
