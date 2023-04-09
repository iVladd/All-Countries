import { useRef } from "react";
import useSearch from "../../redux/filtersSlice/useSearch";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useSearch();
  let inputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div
      className="flex h-8 cursor-text items-center p-6 shadow-themeLight dark:bg-themeDarkLighter dark:shadow-none md:min-w-[350px] "
      onClick={handleInputClick}
    >
      <BsSearch />
      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={setSearchValue}
        className="ml-4 w-full focus:outline-none dark:bg-themeDarkLighter"
        placeholder="Search for a country..."
        ref={inputRef}
      />
    </div>
  );
};

export default SearchInput;
