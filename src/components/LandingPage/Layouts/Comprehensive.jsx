import SectionWrapper from "./SectionWrapper";
import { MdCheckCircle } from "react-icons/md";

const Comprehensive = ({ title, items, image }) => (
  <SectionWrapper className="bg-green-400/40 py-12 md:py-16">
    <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <ul className="space-y-4">
        {items.map((text, i) => (
          <li key={i} className="flex items-start text-sm md:text-base">
            <MdCheckCircle className="text-green-500 mt-1 mr-2 shrink-0" />
            {text}
          </li>
        ))}
      </ul>
      <img
        src={image}
        alt="Comprehensive SEO"
        className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
      />
    </div>
  </SectionWrapper>
);

export default Comprehensive;
