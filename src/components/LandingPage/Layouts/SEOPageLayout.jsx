import Hero from "./Hero";
import Stats from "./Stats";
import Comprehensive from "./Comprehensive";
import Strategy from "./Strategy";
import Benefits from "./Benefits";
import FAQs from "./FAQs";
import Process from "./Process";
import CTA from "./CTA";

const SEOPageLayout = ({
  industry,
  hero,
  stats,
  comprehensive,
  benefits,
  faqs,
}) => {
    console.log("SEOPageLayout rendered with industry:", industry);
  return (
    <>
      <Hero {...hero} />
      <Stats stats={stats} />
      <Comprehensive {...comprehensive} />
      <Strategy />
      <Benefits items={benefits} />
      <Process />
      <FAQs faqs={faqs} />
      <CTA industry={industry} />
    </>
  );
};

export default SEOPageLayout;
