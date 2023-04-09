import RegionSelect from "./RegionSelect";
import SearchInput from "./SearchInput";

const Controls = () => {
  return (
    <div className="flex flex-col justify-between py-10 md:flex-row">
      <SearchInput />
      <RegionSelect />
    </div>
  );
};

export default Controls;
