
import SectionWrapper from "./SectionWrapper";

const Stats = ({ stats }) => (
  <SectionWrapper>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {stats.map(({ icon: Icon, title, subtitle }, i) => (
        <div key={i}>
          <Icon className="text-4xl mx-auto text-blue-700" />
          <h3 className="text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default Stats;
