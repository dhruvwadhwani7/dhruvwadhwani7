import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section
      id="footer"
      className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space"
    >
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <a
          href="mailto:dhruvwadhwani77277@gmail.com"
          className="email-link text-sm text-neutral-400 hover:text-white transition-colors duration-300"
        >
          Friendly Ping Welcome | Get In Touch
        </a>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a target="_blank" href={social.href} key={index}>
            <img src={social.icon} className="w-10 h-10" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 Dhruv Wadhwani. All rights reserved.</p>
    </section>
  );
};

export default Footer;
