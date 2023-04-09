import { useAppDispatch } from "../store";
import { cleanUp } from "./filtersSlice";

const useCleanUp = () => {
  const dispatch = useAppDispatch();

  const cleanFilters = () => dispatch(cleanUp());

  return cleanFilters;
};

export default useCleanUp;
