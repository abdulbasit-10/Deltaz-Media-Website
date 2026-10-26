import Hero from "../components/home/Hero";
import OurProblem from "../components/home/OurProblem";
import OurSolution from "../components/home/OurSolution";
import Services from "../components/home/Services";
import HowWeWork from "../components/home/HowWeWork";
import SuccessStories1 from "../components/home/SuccessStories1";
import SuccessStories2 from "../components/home/SuccessStories2";
import TrustedBrands from "../components/home/TrustedBrands";
import LatestInsights from "../components/home/LatestInsights";
import LastCard from "../components/home/LastCard";

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
