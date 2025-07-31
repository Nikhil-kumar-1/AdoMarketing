import { FaSearch, FaRocket, FaBullhorn } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

const BenefitIconMap = {
  search: FaSearch,
  rocket: FaRocket,
  bullhorn: FaBullhorn,
};

const Benefits = ({ items }) => (
  <SectionWrapper>
    <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {items.map(({ icon, title, description }, i) => {
        const Icon = BenefitIconMap[icon];
        return (
          <div key={i} className="p-6 bg-white border rounded-lg shadow-sm">
            <Icon className="text-2xl text-blue-700 mb-2" />
            <h3 className="font-semibold">{title}</h3>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default Benefits;
