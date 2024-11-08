import VybStoreSection from "./component/VybStoreSection";
import CenterCard from "./component/CenterCard";
import FAQ from "./component/FAQ";
import GetStartedSection from "./component/GetStartedSection";
import HeroSection from "./component/HeroSection";
import InfluencersSection from "./component/InfluencerSection";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <main className=" p-8 pt-0 scrollbar-hide ">
      <Navbar />
      <HeroSection />
      <CenterCard />
      <VybStoreSection />
      <InfluencersSection />
      <GetStartedSection />
      <FAQ />
    </main>
  );
}
