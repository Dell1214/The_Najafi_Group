import Navigation from "../components/navigation";
import Hero from "../components/hero";
import PartnerLogos from "../components/partner-logos";
import VoiceCloning from "../components/voice-cloning";
import Services from "../components/services";
import Models from "../components/models";
import Team from "../components/team";
import AboutMujahid from "../components/about-mujahid";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PartnerLogos />
      <VoiceCloning />
      <Services />
      <Models />
      <Team />
      <AboutMujahid />
      <Contact />
      <Footer />
    </div>
  );
}
