import Hero from "../sections/Hero";
import ProductRange from "../sections/ProductRange";
import WhyPartner from "../sections/WhyPartner";
import ExclusiveDeals from "../sections/ExclusiveDeals";
import PremiumSelections from "../sections/PremiumSelections";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductRange />
      <WhyPartner />
      <ExclusiveDeals />
      <PremiumSelections />
      <ContactSection />
    </>
  );
}