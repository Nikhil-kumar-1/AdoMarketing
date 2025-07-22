import SectionWrapper from "./SectionWrapper";

const CTA = ({ industry }) => (
  <SectionWrapper>
    <div className="bg-gradient-to-l from-green-600 to-blue-500 text-white rounded-lg p-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Dominate the {industry} Search Results?
      </h2>
      <p className="mb-6 text-lg">
        Let us help your {industry.toLowerCase()} business reach its full online potential.
      </p>
      <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
        Book Your Free SEO Audit
      </button>
    </div>
  </SectionWrapper>
);

export default CTA;
