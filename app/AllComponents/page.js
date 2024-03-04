import OpeningSection from "../components/Important/OpeningSection";
import CallToAction from "../components/Important/CallToAction";
import FeaturedSection from "../components/Info/FeaturedSection";
import NumberStats from "../components/Info/NumberStats";
import PricingTable from "../components/Pricing/PricingTable1";
import NewsletterSection from "../components/Extras/NewsletterSection";
import Features from "../components/Info/Features";
import ContactUsForm from "../components/Extras/ContactUsForm";
import Footer from "../components/Footer/Footer";
import Frequently from "../components/Important/Frequently.jsx";
import Hotkey from "../components/Extras/Hotkey";
import Testimanual from "../components/Extras/Testimanual";
import PriceTable2 from "../components/Pricing/PricingTable2";
import Steps from "../components/Extras/Steps";
import Feta from "../components/Info/FeaturedSectionDynamic";
import ScrollInfo from "../components/Info/ScrollInfo";
import Estimates from "../components/Info/Estimates";

export default function AllComponents() {
  // Please comment out and import the components you wish to use / not use here
  return (
    <>
      <OpeningSection />
      <Hotkey />
      <FeaturedSection />
      <Feta />
      <Steps />
      <CallToAction />
      <ScrollInfo />
      <Estimates />
      <PricingTable />
      <NumberStats />
      <NewsletterSection />
      <Features />
      <PriceTable2 />
      <ContactUsForm />
      <Testimanual />
      <Frequently />
      <Footer />
    </>
  );
}
