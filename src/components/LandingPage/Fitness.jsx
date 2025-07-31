import SEOPageLayout from "./Layouts/SEOPageLayout";
import { FaChartLine, FaRocket, FaBullhorn } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
function Fitness() {
  return (
    <>
    <Helmet>
      <title>Fitness SEO Services | Boost Your Fitness Brand</title>
      <meta
        name="description"
        content="Elevate your fitness brand with targeted SEO strategies. Get discovered by health enthusiasts and
increase your online visibility."

      />
      <meta
        name="keywords"
        content="Fitness SEO, Gym SEO, Health and Wellness SEO, Fitness Marketing, Personal Trainer SEO"
      />
      <meta
        property="og:title"
        content="Fitness SEO Services | Boost Your Fitness Brand" 
      />
      <meta
        property="og:description"
        content="Elevate your fitness brand with targeted SEO strategies. Get discovered by health enthusiasts and increase your online visibility."
      />
      <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
      />
      <meta property="og:url" content="https://adonomicstechnologies.com/ecommerce/fitness" />
      <meta property="og:type" content="website" />
    </Helmet>
    <SEOPageLayout
      industry="Fitness"
      hero={{
        title: "Transform Your Fitness Brand with Expert SEO",
        subtitle:
          "Get your gym or fitness program discovered by health enthusiasts with our tailored SEO strategies.",
        image:
          "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      stats={[
        {
          icon: FaChartLine,
          title: "+300% Organic Traffic",
          subtitle: "for fitness brands",
        },
        {
          icon: FaRocket,
          title: "Fast Ranking Boost",
          subtitle: "within 2 months average",
        },
        {
          icon: FaBullhorn,
          title: "1,500+ Keywords Optimized",
          subtitle: "for fitness and wellness products",
        },
      ]}
      comprehensive={{
        title: "Complete Fitness SEO Services",
        items: [
          "Keyword targeting for fitness terms",
          "SEO audit and analysis",
          "Content optimization for fitness and wellness",
          "On-page and off-page optimization",
        ],
        image:
          "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      benefits={[
        {
          icon: "search",
          title: "Fitness-Focused SEO",
          description:
            "We understand the fitness buyer's intent and how to rank your brand for it.",
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
          q: "Do you optimize for local gyms?",
          a: "Yes, we specialize in local SEO for fitness centers.",
        },
        {
          q: "Can you help a new fitness brand?",
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

export default Fitness;
