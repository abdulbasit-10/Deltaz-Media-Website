import Hero from "../components/Hero";
import OurProblem from "../components/OurProblem";
import OurSolution from "../components/OurSolution";
import Services from "../components/Services";
import HowWeWork from "../components/HowWeWork";
import SuccessStories1 from "../components/SuccessStories1";
import SuccessStories2 from "../components/SuccessStories2";
import TrustedBrands from "../components/TrustedBrands";
import LatestInsights from "../components/LatestInsights";
import LastCard from "../components/LastCard";

function Home() {
  return (
    <>
      <Hero />
      <OurProblem />
      <OurSolution />
      <Services />
      <HowWeWork />
      <SuccessStories1 />
      <SuccessStories2 />
      <TrustedBrands />
      <LatestInsights />
      <LastCard />
    </>
  );
}

export default Home;
