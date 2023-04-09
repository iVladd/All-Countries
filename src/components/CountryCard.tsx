import * as React from "react";
import { CountryInfo } from "../types/country";

interface CountryCardProps extends CountryInfo {
  onClick: () => void;
}

const CountryCard = ({ img, name, info, onClick }: CountryCardProps) => {
  return (
    <div
      className="mx-auto mb-6 h-[300px] w-[250px] cursor-pointer overflow-hidden rounded-md shadow-themeLight dark:bg-themeDarkLighter dark:text-white dark:shadow-none sm:h-[310px] sm:w-[220px] lg:w-[230px] xl:w-[240px]"
      onClick={onClick}
    >
      <img src={img.png} alt="" className="h-[150px] w-full sm:h-[145px]" />
      <div className="mx-6 mt-6">
        <h3 className="mb-4 font-bold">{name}</h3>
        {info.map((i) => (
          <p className="text-sm" key={i.title}>
            <span className="font-semibold">{i.title}</span>:{" "}
            <span className="">{i.description}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
