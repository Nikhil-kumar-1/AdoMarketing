import {
  FaLock,
  FaExchangeAlt,
  FaWallet,
  FaUsers
} from "react-icons/fa";
import SEOPageLayout from "./Layouts/SEOPageLayout";
import { Helmet } from "react-helmet-async";

export default function Crypto() {
  return (
    <>
    <Helmet>
      <title>Crypto SEO Services | Boost Your Crypto Platform</title>
      <meta
        name="description"
        content="Elevate your crypto platform with targeted SEO strategies. Get discovered by crypto enthusiasts and increase your online visibility."
      />
      <meta
        name="keywords"
        content="Crypto SEO, Cryptocurrency SEO, Blockchain SEO, Crypto Exchange SEO, Crypto Marketing"
      />
      <meta
        property="og:title"
        content="Crypto SEO Services | Boost Your Crypto Platform"
      />
      <meta
        property="og:description"
        content="Elevate your crypto platform with targeted SEO strategies. Get discovered by crypto enthusiasts and increase your online visibility."
      />
      <meta

        property="og:image"
        content="https://adonomicstechnologies.com/Logo.webp"
      />
      <meta property="og:url" content="https://adonomicstechnologies.com/finance/crypto" />
      <meta property="og:type" content="website" />
    </Helmet>
    <SEOPageLayout
      industry="Crypto"
      hero={{
        title: "The Future of Finance",
        subtitle: "Buy, Sell & Trade Crypto with Confidence",
        image: "https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
      }}
      stats={[
        {
          icon: FaExchangeAlt,
          title: "Instant Trading",
          subtitle: "Buy and sell top cryptocurrencies with one click."
        },
        {
          icon: FaLock,
          title: "Secure Wallets",
          subtitle: "Military-grade security to protect your assets."
        },
        {
          icon: FaWallet,
          title: "Fast Withdrawals",
          subtitle: "Access your funds anytime, anywhere."
        }
      ]}
      comprehensive={{
        title: "Your Gateway to Digital Assets",
        items: [
          "Wide range of cryptocurrencies",
            "Advanced trading features",
            "Real-time market data",
            "24/7 customer support"
        ],
        image:
          "https://images.unsplash.com/photo-1609554496796-c345a5335ceb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }}
      benefits={[
        {
            icon: "search",
            title: "Crypto-Focused SEO",
            description:
              "We understand the crypto buyer's intent and how to rank your platform for it."
        },
        {
            icon: "rocket",
            title: "Quick Implementation",
            description:
              "Experience rapid improvements with low-lift, high-impact actions."
        },
        {
            icon: "bullhorn",
            title: "Influencer-Aligned Strategies",
            description:
              "SEO that complements your influencer and social media efforts."
        },
        
      ]}
      faqs={[
        {
          q: "What cryptocurrencies can I trade?",
          a: "We support a wide range of cryptocurrencies including Bitcoin, Ethereum, and many altcoins.",
        },
        {
          q: "How secure is my crypto wallet?",
          a: "Our wallets use military-grade encryption and two-factor authentication to ensure your assets are safe.",
        },
        {
          q: "Can I withdraw my funds anytime?",
          a: "Yes, you can withdraw your funds at any time with fast processing times."
        }
      ]}
      />
      </>
  );
}
