import SEOPageLayout from "./Layouts/SEOPageLayout";
import { FaChartLine, FaRocket, FaBullhorn } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { div } from "framer-motion/m";

function Apparel() {
  return (
    <>
    <Helmet>
      <title>Apparel SEO Services | Boost Your Fashion Brand</title>
      <meta
        name="description"
        content="Elevate your apparel brand with targeted SEO strategies. Get discovered by fashion enthusiasts and increase your online visibility."
      />
      <meta
        name="keywords"
        content="Apparel SEO, Fashion SEO, Clothing Brand SEO, eCommerce SEO, Apparel Marketing"
      />
      <meta
        property="og:title"
        content="Apparel SEO Services | Boost Your Fashion Brand"
      />
      <meta
        property="og:description"
        content="Elevate your apparel brand with targeted SEO strategies. Get discovered by fashion enthusiasts and increase your online visibility."
      />
      <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
      />
      <meta property="og:url" content="https://adonomicstechnologies.com/ecommerce/apparel" />
      <meta property="og:type" content="website" />
      </Helmet>
    <SEOPageLayout
      industry="Apparel"
      hero={{
        title: "Elevate Your Apparel Brand with Targeted SEO",
        subtitle:
          "Get your clothing line discovered by fashion enthusiasts with our expert SEO strategies.",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      stats={[
        {
          icon: FaChartLine,
          title: "+300% Organic Traffic",
          subtitle: "for apparel brands",
        },
        {
          icon: FaRocket,
          title: "Fast Ranking Boost",
          subtitle: "within 2 months average",
        },
        {
          icon: FaBullhorn,
          title: "1,500+ Keywords Optimized",
          subtitle: "for fashion and apparel products",
        },
      ]}
      comprehensive={{
        title: "Complete Apparel SEO Services",
        items: [
          "Keyword targeting for fashion terms",
          "Local SEO for boutiques and stores",
          "Blog & content strategies",
          "eCommerce optimization for apparel sites",
        ],

        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      benefits={[
        {
          icon: "search",
          title: "Fashion-Focused SEO",
          description:
            "We understand the fashion buyer's intent and how to rank your brand for it.",
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
          q: "Do you optimize for Instagram traffic?",
          a: "We ensure your content aligns with social SEO trends.",
        },
        {
          q: "Can you help a new apparel brand?",
          a: "Yes, we build SEO foundations from the ground up.",
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

export default Apparel;
