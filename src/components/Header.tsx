import * as React from "react";
import useTheme from "../redux/themeSlice/useTheme";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import useCleanUp from "../redux/filtersSlice/useCleanUp";

const Header = () => {
  const [theme, toggleTheme] = useTheme();
  const cleanUp = useCleanUp();

  return (
    <header className="w-full bg-themeLight py-6 shadow-themeLight dark:bg-themeDarkLighter dark:shadow-themeDark">
      <Wrapper>
        <div className="flex justify-between">
          <Link to={"/"} onClick={cleanUp}>
            <span className="text-sm font-bold dark:text-themeDark">
              ALL COUNTRIES
            </span>
          </Link>
          <div className="flex w-[120px] items-center justify-between">
            {theme === "light" ? (
              <BsMoon color="black" size={15} />
            ) : (
              <BsMoonFill color="white" size={15} />
            )}
            <button
              onClick={() => toggleTheme()}
              className="font-bold capitalize dark:text-themeDark"
            >
              {theme} Theme
            </button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
