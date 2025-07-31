import { Helmet } from "react-helmet-async";
import SEOPageLayout from "./Layouts/SEOPageLayout";
import { FaChartLine, FaRocket, FaBullhorn } from "react-icons/fa";

export default function BeautyPage() {
  return (
    <>
    <Helmet>
      <title>Beauty SEO Services | Boost Your Beauty Brand</title>
      <meta
        name="description"
        content="Elevate your beauty brand with targeted SEO strategies. Get discovered by beauty lovers and increase your online visibility."
      />
      <meta
        name="keywords"
        content="Beauty SEO, Skincare SEO, Makeup Brand SEO, eCommerce SEO, Beauty Marketing"
      />
      <meta
        property="og:title"
        content="Beauty SEO Services | Boost Your Beauty Brand"
      />
      <meta
        property="og:description"
        content="Elevate your beauty brand with targeted SEO strategies. Get discovered by beauty lovers and increase your online visibility."
      />
      <meta
        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
      />
      <meta property="og:url" content="https://adonomicstechnologies.com/ecommerce/beauty" />
      <meta property="og:type" content="website" />
    </Helmet>
    <SEOPageLayout
      industry="Beauty"
      hero={{
        title: "Grow Your Beauty Brand with High-Impact SEO",
        subtitle: "Get discovered by beauty lovers across the web with tailored search strategies.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      stats={[
        {
          icon: FaChartLine,
          title: "+400% Organic Traffic",
          subtitle: "for skincare & beauty brands",
        },
        {
          icon: FaRocket,
          title: "Fast Ranking Boost",
          subtitle: "within 3 months average",
        },
        {
          icon: FaBullhorn,
          title: "1,000+ Keywords Optimized",
          subtitle: "for beauty & personal care products",
        },
      ]}
      comprehensive={{
        title: "Complete Beauty SEO Services",
        items: [
          "Keyword targeting for beauty terms",
          "Local SEO for salons & spas",
          "Blog & content strategies",
          "eCommerce optimization for beauty stores",
        ],
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      benefits={[
        {
          icon: "search",
          title: "Beauty-Centric SEO",
          description: "We know the beauty buyer's intent and how to rank your brand for it.",
        },
        {
          icon: "rocket",
          title: "Fast Implementation",
          description: "See rapid improvements with low-lift, high-impact actions.",
        },
        {
          icon: "bullhorn",
          title: "Influencer-Aligned Strategies",
          description: "SEO that complements your influencer and social media efforts.",
        },
      ]}
      faqs={[
        { q: "Do you optimize for Instagram traffic?", a: "We ensure your content aligns with social SEO trends." },
        { q: "Can you help a new beauty brand?", a: "Yes, we build SEO foundations from the ground up." },
        { q: "How do you measure results?", a: "We track keyword ranks, traffic, conversions, and revenue." },
      ]}
    />
      </>
  );
}
