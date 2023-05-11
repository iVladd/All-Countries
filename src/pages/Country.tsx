import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { BsArrowLeft } from "react-icons/bs";
import CountryInfo from "../components/CountryDetails/CountryInfo";

const CountryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen pb-6 pt-10 dark:bg-themeDark dark:text-themeDark lg:h-[calc(100vh_-_72px)]">
      <Wrapper>
        <button
          className="flex items-center gap-2 px-8 py-2 shadow-xl dark:bg-themeDarkLighter dark:shadow-themeDark"
          onClick={() => navigate(-1)}
        >
          <BsArrowLeft />
          <span className="font-semibold">Back</span>
        </button>

        <CountryInfo />
      </Wrapper>
    </div>
  );
};

export default CountryPage;
