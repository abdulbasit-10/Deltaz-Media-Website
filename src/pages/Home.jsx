import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import TrustedBrands from "../components/TrustedBrands";
import SuccessStories from "../components/SuccessStories";
import LatestInsights from "../components/LatestInsights";
import LastCard from "../components/LastCard";

function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Services />
      <TrustedBrands />
      <SuccessStories />
      <LatestInsights />
      <LastCard />
    </main>
  );
}

export default Home;