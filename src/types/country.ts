import { Region } from "./regions";

type Currency = {
  name: string;
  symbol: string;
};
type Currencies = {
  [code: string]: Currency;
};

type Languages = {
  [code: string]: string;
};

export type Country = {
  name: { common: string; official: string };
  nativeName: string;
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  region: Region;
  subregion: string;
  capital: string;
  population: number;
  tld: string[];
  borders: string[];
  currencies: Currencies;
  languages: Languages;
};

type Info = {
  title: string;
  description: string;
};

export type CountryInfo = {
  img: { png: string; svg: string };
  name: string;
  info: Info[];
};
