import SEOPageLayout from "./Layouts/SEOPageLayout";
import { FaChartLine, FaRocket, FaBullhorn } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
function PetShop() {
  return (
    <>
    <Helmet>
      <title>Pet Shop SEO Services | Boost Your Pet Shop Brand</title>
      <meta
        name="description"
        content="Elevate your pet shop brand with targeted SEO strategies. Get discovered by pet lovers and increase your online visibility."
      />
      <meta
        name="keywords"
        content="Pet Shop SEO, Pet Care SEO, Pet Products SEO, eCommerce SEO, Pet Shop Marketing"
      />
      <meta
        property="og:title"
        content="Pet Shop SEO Services | Boost Your Pet Shop Brand"
      />
      <meta
        property="og:description"
        content="Elevate your pet shop brand with targeted SEO strategies. Get discovered by pet lovers and increase your online visibility."
      />
      <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
      />
      <meta property="og:url" content="https://adonomicstechnologies.com/ecommerce/petshop" />
      <meta property="og:type" content="website" />
    </Helmet>
    <SEOPageLayout
      industry="Pet Shop"
      hero={{
        title: "Boost Your Pet Shop's Online Presence with Expert SEO",
        subtitle:
          "Get your pet products discovered by pet lovers with our tailored SEO strategies.",
        image:
          "https://images.unsplash.com/photo-1516453734593-8d198ae84bcf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      stats={[
        {
          icon: FaChartLine,
          title: "+300% Organic Traffic",
          subtitle: "for pet shop brands",
        },
        {
          icon: FaRocket,
          title: "Fast Ranking Boost",
          subtitle: "within 2 months average",
        },
        {
          icon: FaBullhorn,
          title: "1,500+ Keywords Optimized",
          subtitle: "for pet care and products",
        },
      ]}
      comprehensive={{
        title: "Complete Pet Shop SEO Services",
        items: [
          "Keyword targeting for pet care terms",
          "Local SEO for pet shops and clinics",
          "Content optimization for pet products",
          "Link building for pet care websites",
        ],
        image:
          "https://images.unsplash.com/photo-1592237163215-c97b487faeb5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      benefits={[
        {
          icon: "search",
          title: "Pet-Focused SEO",
          description:
            "We understand the pet buyer's intent and how to rank your brand for it.",
        },
        {
          icon: "rocket",
          title: "Quick Implementation",
          description:
            "Experience rapid improvements with low-lift, high-impact actions.",
        },
        {
          icon: "bullhorn",
          title: "Influencer-Aligned Strategies",
          description:
            "SEO that complements your influencer and social media efforts.",
        },
      ]}
      faqs={[
        {
          q: "Do you optimize for local pet shops?",
          a: "Yes, we specialize in local SEO for pet care businesses.",
        },
        {
          q: "Can you help a new pet shop brand?",
          a: "Absolutely, we build SEO foundations from the ground up.",
        },
        {
          q: "How do you measure results?",
          a: "We track keyword ranks, traffic, conversions, and revenue.",
        },
      ]}
    />
    </>
  );
}

export default PetShop;
