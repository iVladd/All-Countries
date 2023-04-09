import { ChangeEventHandler } from "react";
import { useSelector } from "react-redux";
import { selectSearch } from "./filtersSelectors";
import { useAppDispatch } from "../store";
import { setSearch } from "./filtersSlice";

type onSearch = ChangeEventHandler<HTMLInputElement>;

const useSearch = (): [string, onSearch] => {
  const searchValue = useSelector(selectSearch);
  const dispatch = useAppDispatch();

  const handleSearch: onSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [searchValue, handleSearch];
};

export default useSearch;
