import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import "../project_layout.css"
const Experiences = () => {
  return (
    <div className="w-full experience-details">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
