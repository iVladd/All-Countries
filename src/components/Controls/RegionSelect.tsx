import Select from "react-select";
import { Region } from "../../types/regions";
import useRegion from "./../../redux/filtersSlice/useRegion";

type RegionOption = {
  [RegKey in Region]: { value: RegKey; label: RegKey };
};

const optionsMap: RegionOption = {
  "Africa": { value: "Africa", label: "Africa" },
  "America": { value: "America", label: "America" },
  "Asia": { value: "Asia", label: "Asia" },
  "Europe": { value: "Europe", label: "Europe" },
  "Oceania": { value: "Oceania", label: "Oceania" },
};
const options = Object.values(optionsMap);

const RegionSelect = () => {
  const [selectedRegion, setSelectedRegion] = useRegion();

  return (
    <Select
      options={options}
      placeholder="Filter by Region"
      isClearable
      isSearchable={false}
      value={selectedRegion ? optionsMap[selectedRegion] : ""}
      onChange={setSelectedRegion}
      classNames={{
        control: () =>
          "h-full mt-5 mx-auto sm:w-[200px] md:mt-0 w-full cursor-pointer shadow-themeLight border-none dark:bg-themeDarkLighter dark:text-white dark:shadow-none",
        placeholder: () => "dark:text-white",
        singleValue: () => "dark:text-white",
        menuList: () => "dark:bg-themeDarkLighter",
        option: () =>
          "hover:bg-inherit cursor-pointer bg-inherit text-black dark:text-white",
      }}
    />
  );
};

export default RegionSelect;
