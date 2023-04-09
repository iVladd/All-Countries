import { useNavigate } from "react-router-dom";
import useCountries from "../redux/countriesSlice/useCountries";
import CountryCard from "./CountryCard";

const CountriesList = () => {
  const [countries, { error, status }] = useCountries();

  const navigate = useNavigate();

  return (
    <>
      {status === "loading" && "Loading..."}
      {error && "Can not load data"}
      <div className="grid grid-cols-1 justify-start sm:grid-cols-2 sm:justify-center md:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => {
          const countryInfo = {
            img: country.flags,
            name: country.name.common,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              { title: "Region", description: country.region },
              {
                title: "Capital",
                description: country.capital,
              },
            ],
          };

          return (
            <CountryCard
              key={country.name.official}
              {...countryInfo}
              onClick={() => void navigate(`/country/${country.name.common}`)}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountriesList;
