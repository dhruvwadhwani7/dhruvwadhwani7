import { techStack } from "../constants";
import { OrbitingCircles } from "./OrbitingCircles";


// helpers
const getGroup = (groups) =>
  techStack.filter((t) => groups.includes(t.group));

export function Frameworks() {
  const core = getGroup(["language"]);
  const frontend = getGroup(["frontend"]);
  const backendTools = getGroup(["backend", "database", "tools"]);

  return (
    <div className="relative flex h-[20rem] w-full items-center justify-center">

      <OrbitingCircles radius={50} iconSize={36} speed={1.8}>
        {core.map((tech) => (
          <Icon key={tech.id} src={tech.path} alt={tech.name} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles radius={110} iconSize={36} speed={1} reverse>
        {frontend.map((tech) => (
          <Icon key={tech.id} src={tech.path} alt={tech.name} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles radius={170} iconSize={36} speed={0.8}>
        {backendTools.map((tech) => (
          <Icon key={tech.id} src={tech.path} alt={tech.name} />
        ))}
      </OrbitingCircles>

    </div>
  );
}

const Icon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="object-contain transition-transform duration-200 hover:scale-110"
  />
);