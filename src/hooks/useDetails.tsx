import { useEffect, useState } from "react";
import { searchByCountry } from "../config";
import { Country } from "../types/country";
import { useParams } from "react-router-dom";
import { filterByCode } from "../config";

type DetailsErrors = {
  details: string;
  neighbours: string;
};

const useDetails = (): [
  Country | undefined,
  Country[] | undefined,
  DetailsErrors
] => {
  const country = useParams().name;
  const [details, setDetails] = useState<Country>();
  const [bordersCodes, setBordersCodes] = useState<string[]>();
  const [neighbours, setNeighbours] = useState<Country[]>();
  const [errors, setErrors] = useState<DetailsErrors>({
    details: "",
    neighbours: "",
  });

  useEffect(() => {
    if (country) {
      fetch(searchByCountry(country))
        .then((res) => res.json())
        .then((data) => {
          setBordersCodes(data[0].borders);
          setDetails(data[0]);
        })
        .catch(() => {
          setErrors((prev) => {
            return { ...prev, details: "Can not load data" };
          });
        });
    }
  }, [country]);

  useEffect(() => {
    if (bordersCodes) {
      fetch(filterByCode(bordersCodes))
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 404) throw new Error("Can not load data");
          setNeighbours(data);
        })
        .catch((error) => {
          setErrors((prev) => {
            return { ...prev, neighbours: error.message };
          });
        });
    }
  }, [bordersCodes]);

  return [details, neighbours, errors];
};

export default useDetails;
