import { useEffect } from "react";
import { selectTheme } from "./themeSelectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./../store";
import { setTheme, Theme } from "./themeSlice";

const useTheme = (): [Theme, () => void] => {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  console.log("aaaas");
  // useEffect(() => {
  // }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
