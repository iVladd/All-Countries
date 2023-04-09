import { Link } from "react-router-dom";
import useDetails from "../../hooks/useDetails";
import InfoItem from "./InfoItem";

const CountryInfo = () => {
  const [details, neighbours, errors] = useDetails();

  return (
    <div className="mt-12 flex flex-col gap-12 md:max-lg:items-center lg:flex-row">
      {errors.details && <p>{errors.details}</p>}
      {!errors.details && !details && <div>Loading...</div>}
      {details && (
        <>
          <img
            src={details.flags.svg}
            alt={details.name.common}
            className="w-[700px] md:max-xl:w-[550px]"
          />
          <div className="my-auto">
            <h2 className="text-4xl font-bold">{details.name.common}</h2>
            <div className="mt-6 flex gap-5">
              <div>
                <InfoItem label="Native Name" data={details.name.official} />
                <InfoItem label="Population" data={details.population} />
                <InfoItem label="Region" data={details.region} />
                <InfoItem label="Sub Region" data={details.subregion} />
                <InfoItem label="Capital" data={details.capital} />
              </div>
              <div>
                <InfoItem label="Top Level Domain" data={details.tld} />
                <InfoItem
                  label="Currencies"
                  data={
                    details.currencies &&
                    Object.values(details.currencies)[0].name
                  }
                />
                <InfoItem
                  label="Languages"
                  data={details.languages && Object.values(details.languages)}
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="font-bold">Border Countries: </span>
              {errors.neighbours && <span>{errors.neighbours}</span>}
              {!neighbours && !errors.neighbours && <span>No neighbours</span>}
              {neighbours &&
                neighbours.map((c) => (
                  <Link
                    key={c.name.common}
                    to={`/country/${c.name.common}`}
                    className="ml-3 mt-3 inline-flex items-center px-5 py-1 shadow-lg dark:bg-themeDarkLighter dark:shadow-themeDark"
                  >
                    {c.name.common}
                  </Link>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryInfo;
