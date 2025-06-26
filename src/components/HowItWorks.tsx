import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  MedalIcon,
  MapIcon,
  PlaneIcon,
  GiftIcon,
} from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Enhanced Accessibility",
    description:
      "Delivers real-time speech-to-ISL translation, ensuring inclusive communication for individuals with hearing and speech impairments.",
  },
  {
    icon: <MapIcon />,
    title: "Empowering Communities",
    description:
      "Promotes participation in public life by reducing dependency on human interpreters and enabling autonomous access to information.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalable & Always Available",
    description:
      "Operates 24/7 via any modern browser—no installation required—making it adaptable across education, healthcare, and public services.",
  },
  {
    icon: <GiftIcon />,
    title: "AI-Powered Instant Translation",
    description:
      "Utilizes advanced AI models to instantly convert spoken content into fluid, expressive animated Indian Sign Language.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold font-serif">
        What Makes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text font-serif">
          SignSpell
        </span>{" "}
        Unique
      </h2>

      <p className="md:w-3/4 mx-auto mt-4 mb-10 text-xl text-muted-foreground">
        SignSpell bridges the communication gap by offering a seamless, intelligent, and inclusive sign language experience. Here's how it delivers impact:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }) => (
          <Card
            key={title}
            className="bg-muted/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-muted"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-lg font-semibold">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
