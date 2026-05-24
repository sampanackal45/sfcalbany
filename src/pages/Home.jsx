import AboutPreview from "../components/sections/home/AboutPreview";
import ContactVisitCTA from "../components/sections/home/ContactVisitCTA";
import GalleryPreview from "../components/sections/home/GalleryPreview";
import Hero from "../components/sections/home/Hero";
import LeadershipPreview from "../components/sections/home/LeadershipPreview";
import LivePreview from "../components/sections/home/LivePreview";
import MissionsPreview from "../components/sections/home/MissionsPreview";
import PurposeMottoValues from "../components/sections/home/PurposeMottoValues";
import ServiceTimesPreview from "../components/sections/home/ServiceTimesPreview";
import { seo } from "../data/seo";
import usePageMeta from "../hooks/usePageMeta";

function Home() {
  usePageMeta(seo.home);

  return (
    <>
      <Hero />
      <ServiceTimesPreview />
      <PurposeMottoValues />
      <AboutPreview />
      <LeadershipPreview />
      <MissionsPreview />
      <GalleryPreview />
      <LivePreview />
      <ContactVisitCTA />
    </>
  );
}

export default Home;
