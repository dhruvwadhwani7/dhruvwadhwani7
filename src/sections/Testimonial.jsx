import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { certifications } from "../constants"; // or ./certifications

const firstRow = certifications.slice(0, certifications.length / 2);
const secondRow = certifications.slice(certifications.length / 2);

const CertificationBadge = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center w-28 h-28 p-4 mx-4 rounded-xl bg-white/10 border border-white/10 shadow-md hover:scale-105 transition-transform">
      <img src={icon} alt={name} className="w-10 h-10 object-contain mb-2" />
      <p className="text-xs text-white text-center">{name}</p>
    </div>
  );
};

export default function CertificationsMarquee() {
  return (
    <div className="items-start mt-20 md:mt-32 c-space">
      <h2 className="text-heading text-center text-3xl md:text-4xl font-bold mb-6">Certifications</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-6 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((cert) => (
            <CertificationBadge key={cert.id} {...cert} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((cert) => (
            <CertificationBadge key={cert.id} {...cert} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
