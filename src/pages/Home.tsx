import Controls from "../components/Controls/Controls";
import CountriesList from "../components/CountriesList";
import Wrapper from "../components/Wrapper";

const HomePage = () => {
  return (
    <div className="min-h-screen dark:bg-themeDark dark:text-themeDark">
      <Wrapper>
        <Controls />
        <CountriesList />
      </Wrapper>
    </div>
  );
};

export default HomePage;
