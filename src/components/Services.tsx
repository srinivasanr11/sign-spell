import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  MagnifierIcon,
  WalletIcon,
  ChartIcon,
} from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: ServiceProps[] = [
  {
    title: "Speech to Sign Language",
    description:
      "Convert spoken language into accurate sign language animations using real-time voice recognition.",
    icon: <ChartIcon />,
  },
  {
    title: "Text to Sign Language",
    description:
      "Instantly translate typed or printed text into expressive sign language with contextual accuracy.",
    icon: <WalletIcon />,
  },
  {
    title: "Bidirectional Sign Language",
    description:
      "Enable seamless two-way communication between signers and non-signers using AI-driven interpretation.",
    icon: <MagnifierIcon />,
  },
];

const ServiceCard = ({ icon, title, description }: ServiceProps) => (
  <Card>
    <CardHeader className="flex gap-4 items-start">
      <div className="bg-primary/20 p-2 rounded-2xl">{icon}</div>
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="mt-2 text-md">
          {description}
        </CardDescription>
      </div>
    </CardHeader>
  </Card>
);

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text font-serif">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-lg mt-4 mb-8">
            Explore our intelligent, accessible solutions that redefine inclusive communication for all.
          </p>

          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src={cubeLeg}
            alt="Sign language services illustration"
            className="w-full max-w-[600px] mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
