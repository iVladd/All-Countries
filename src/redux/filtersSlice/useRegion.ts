import { useSelector } from "react-redux";
import { SingleValue, ActionMeta } from "react-select";
import { selectRegion } from "./filtersSelectors";
import { useAppDispatch } from "../store";
import { Region } from "../../types/regions";
import { setRegion } from "./filtersSlice";

type CountryOption =
  | {
      label: Region;
      value: Region;
    }
  | "";

type onSelect = (
  reg: SingleValue<CountryOption>,
  actionMeta: ActionMeta<SingleValue<CountryOption>>
) => void;

const useRegion = (): [Region | "", onSelect] => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);

  const handleChangeRegion: onSelect = (reg) => {
    if (reg) {
      dispatch(setRegion(reg.value));
    } else {
      dispatch(setRegion(""));
    }
  };

  return [region, handleChangeRegion];
};

export default useRegion;
