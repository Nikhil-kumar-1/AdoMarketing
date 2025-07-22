import SectionWrapper from "./SectionWrapper";

const Process = ({ steps = ["Connect", "Audit", "Strategy", "Grow"] }) => (
  <SectionWrapper>
    <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
    <div className="grid md:grid-cols-4 gap-6 text-center">
      {steps.map((step, i) => (
        <div key={i} className="bg-purple-50 p-4 rounded-lg">
          <span className="text-2xl font-bold text-blue-700">{i + 1}</span>
          <h4 className="text-xl font-semibold mt-2">{step}</h4>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Process;
