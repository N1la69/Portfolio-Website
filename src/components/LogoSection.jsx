import { logoIconsList } from "../constants";

const LogoIcon = ({ logo }) => {
  return (
    <div className="flex-none items-center marquee-item">
      <img src={logo.imgPath} alt={logo.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((logo) => (
            <LogoIcon key={logo.name} logo={logo} />
          ))}

          {logoIconsList.map((logo) => (
            <LogoIcon key={logo.name} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
