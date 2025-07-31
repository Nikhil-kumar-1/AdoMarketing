import SEOPageLayout from "./Layouts/SEOPageLayout";
import { FaChartLine, FaRocket, FaBullhorn } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
function HomeGoods() {
  return (
    <>
    <Helmet>
      <title>Home Goods SEO Services | Boost Your Home Goods Brand</title>
      <meta 
        name="description"
        content="Elevate your home goods brand with targeted SEO strategies. Get discovered by shoppers and increase your online visibility."
      />
      <meta
        name="keywords"
        content="Home Goods SEO, Home Decor SEO, Home Decor Brand SEO, eCommerce SEO, Home Goods Marketing"
      />
      <meta
        property="og:title"
        content="Home Goods SEO Services | Boost Your Home Goods Brand"
      />
      <meta
        property="og:description"
        content="Elevate your home goods brand with targeted SEO strategies. Get discovered by shoppers and increase your online visibility."
      />
      <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
      />
      <meta property="og:url" content="https://adonomicstechnologies.com/ecommerce/homegoods" />
      <meta property="og:type" content="website" />
    </Helmet>
    <SEOPageLayout
      industry="HomeGoods"
      hero={{
        title: "Enhance Your Home Goods Brand with Expert SEO",
        subtitle:
          "Get your home products discovered by shoppers with our tailored SEO strategies.",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      stats={[
        {
          icon: FaChartLine,
          title: "+300% Organic Traffic",
          subtitle: "for home goods brands",
        },
        {
          icon: FaRocket,
          title: "Fast Ranking Boost",
          subtitle: "within 2 months average",
        },
        {
          icon: FaBullhorn,
          title: "1,500+ Keywords Optimized",
          subtitle: "for home and lifestyle products",
        },
      ]}
      comprehensive={{
        title: "Complete Home Goods SEO Services",
        items: [
          "Keyword targeting for home goods terms",
          "On-page optimization for home goods products",
          "Content optimization for home goods",
          "Link building for home goods websites",
        ],
        image:
          "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      benefits={[
        {
          icon: "search",
          title: "Home Goods-Focused SEO",
          description:
            "We understand the home goods buyer's intent and how to rank your brand for it.",
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
          q: "Do you optimize for local home goods stores?",
          a: "Yes, we specialize in local SEO for home goods retailers.",
        },
        {
          q: "Can you help a new home goods brand?",
          a: "Absolutely,we build SEO foundations from the ground up.",
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

export default HomeGoods;
