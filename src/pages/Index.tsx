import HeroSection from "@/components/wedding/HeroSection";
import WeddingDetails from "@/components/wedding/WeddingDetails";
import VenueSection from "@/components/wedding/VenueSection";
import AttireGuide from "@/components/wedding/AttireGuide";
import TimelineSection from "@/components/wedding/TimelineSection";
import EntourageSection from "@/components/wedding/EntourageSection";
import GiftGuide from "@/components/wedding/GiftGuide";
import LocationGuide from "@/components/wedding/LocationGuide";
import FAQSection from "@/components/wedding/FAQSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WeddingDetails />
      <VenueSection />
      <AttireGuide />
      <TimelineSection />
      <EntourageSection />
      <GiftGuide />
      <LocationGuide />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
