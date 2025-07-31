import SectionWrapper from "./SectionWrapper";

const FAQs = ({ faqs }) => (
  <SectionWrapper className="bg-blue-700 ">
    <h2 className="text-3xl font-bold text-center mb-6 text-white">Frequently Asked Questions</h2>
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map(({ q, a }, i) => (
        <div key={i} className="bg-gray-50 p-4 rounded-lg shadow">
          <h4 className="font-semibold">{q}</h4>
          <p className="text-gray-700 mt-1">{a}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default FAQs;
