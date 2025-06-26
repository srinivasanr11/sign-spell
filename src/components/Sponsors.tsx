// No longer need to import Radar
// import { Radar } from "lucide-react"; 

interface SponsorProps {
  // Change 'icon: JSX.Element;' to 'logo: string;' for image URLs
  logo: string; 
  name: string;
}

// Import your sponsor logos. Assuming you'll have them in assets or a similar folder.
// Replace these with your actual logo paths
import logo1 from "../assets/LoginHomeassests/tn-logo.svg"; 
import logo2 from "../assets/LoginHomeassests/nm-logo.svg";
import logo3 from "../assets/LoginHomeassests/ntlogo.webp"; 
import logo4 from "../assets/LoginHomeassests/au-logo.svg";
import logo5 from "../assets/LoginHomeassests/kce-logo-.svg";

const sponsors: SponsorProps[] = [
  {
    logo: logo1, // Use the imported logo variable
    name: "",
  },
  {
    logo: logo2,
    name: "",
  },
  {
    logo: logo3,
    name: "",
  },
  {
    logo: logo4,
    name: "",
  },
  {
    logo: logo5,
    name: "",
  },
  
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-3xl font-bold mb-8 text-primary font-serif">
        Sponsors 
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ logo, name }: SponsorProps) => ( // Destructure 'logo' instead of 'icon'
          <div
            key={name}
            className="flex items-center gap-8 text-muted-foreground/60"
          >
            {/* Render an <img> tag for the logo */}
            <img src={logo} alt={`${name} logo`} className="h-14 w-auto" /> 
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};