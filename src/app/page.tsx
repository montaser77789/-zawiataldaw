import Hero from "./_components/Hero";
import Clients from "./_components/Clients";
import AboutPreview from "./_components/AboutPreview";
import Services from "./_components/Services";
import Achievements from "./_components/Achievements";
import BeforeAfter from "./_components/BeforeAfter";
import Projects from "./_components/Projects";
import PremiumImageSlider from "./_components/PremiumImageSlider";
import EditorialImageComposition from "./_components/EditorialImageComposition";
import MosaicImageGallery from "./_components/MosaicImageGallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Achievements />
      <PremiumImageSlider />
      <Services />
      <EditorialImageComposition />
      <AboutPreview />
      <Projects />
      <MosaicImageGallery />
      <BeforeAfter />
      <Clients />
    </div>
  );
}