import {
  FaChartLine,
  FaMobileAlt,
  FaPiggyBank,
  FaLock,
} from "react-icons/fa";
import SEOPageLayout from "./Layouts/SEOPageLayout";
import { q } from "framer-motion/m";

export default function Fintech() {
  return (
    <SEOPageLayout
      industry="Fintech"
      hero={{
        title: "Smart Banking for a Smarter You",
        subtitle: "Next-Gen Financial Services at Your Fingertips",
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
      }}
      stats={[
        {
          icon: FaChartLine,
          title: "+500% Growth in User Engagement",
          subtitle: "for fintech platforms",
        },
        {
          icon: FaMobileAlt,
          title: "Mobile App Downloads",
          subtitle: "over 1 million and counting",
        },
        {
          icon: FaPiggyBank,
          title: "Automated Savings",
          subtitle: "helping users save effortlessly",
        },
      ]}
      comprehensive={
{
        title: "Complete Fintech SEO Services",
        items: [
            "Keyword targeting for fintech terms",
            "Local SEO for financial services",
            "Content optimization for fintech blogs",
            "On-page and off-page optimization",
            ],
        image: "https://images.unsplash.com/photo-1581091870620-2f8b1c5d3c4e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
        }
      }
      benefits={[
        {
            icon: "search",
            title: "Fintech-Focused SEO",
            description:
              "We understand the fintech buyer's intent and how to rank your platform for it.",
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
          q: "How can SEO help my fintech platform?",
          a: "SEO can increase your platform's visibility, drive organic traffic, and improve user engagement by targeting relevant keywords and optimizing content.",
        },
        {
          q: "What specific services do you offer for fintech SEO?",
          a: "We offer keyword research, content optimization, local SEO, and comprehensive on-page and off-page strategies tailored for fintech platforms.",
        },
        {
          q: "How long does it take to see results from SEO?",
          a: "While some improvements can be seen within a few weeks, significant results typically take 3-6 months depending on competition and current rankings.",
        },
      ]}
    />
  );
}
