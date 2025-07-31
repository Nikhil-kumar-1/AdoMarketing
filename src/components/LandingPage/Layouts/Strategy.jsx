import SectionWrapper from "./SectionWrapper";

const Strategy = ({ title = "Our SEO Strategy", phases = ["Audit", "Optimization", "Growth"] }) => (
  <SectionWrapper>
    <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
    <div className="grid md:grid-cols-3 gap-6 text-center">
      {phases.map((phase, i) => (
        <div key={i} className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-2">{phase} Phase</h3>
          <p>Step-by-step improvement to help your brand rank high and sell better.</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Strategy;
