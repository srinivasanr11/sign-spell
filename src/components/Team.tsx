import { buttonVariants } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { GithubIcon, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string; // Added description field
  socialNetworks: SocialNetworkProps[]; // Corrected typo
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/image1.jpg",
    name: "Pradnya KT",
    position: "Frontend Developer",
    description: "Bringing ideas to life with engaging user interfaces.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/pradnya-k-t-8bb01a253/",
      },
      {
        name: "Github",
        url: "https://github.com/Pradnya2003/",
      },
    ],
  },
  {
    imageUrl: "/image2.jpg",
    name: "Sri Mathi S",
    position: "Backend Developer",
    description: "Building robust and scalable server-side applications.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/sri27-mathi/",
      },
      {
        name: "Github",
        url: "https://github.com/SriMathi-2705",
      },
    ],
  },
  {
    imageUrl: "/image3.jpg",
    name: "Srinivasan R",
    position: "AI/ML Developer",
    description: "Harnessing the power of AI to create intelligent solutions.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/srinivasanr11/",
      },
      {
        name: "Github",
        url: "https://github.com/srinivasanr11/",
      },
    ],
  },
  {
    imageUrl: "/image4.jpg",
    name: "Surya B",
    position: "Frontend Developer",
    description: "Crafting intuitive and visually appealing web experiences.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/surya-btechi/",
      },
      {
        name: "Github",
        url: "https://github.com/saisurya7860/",
      },
    ],
  },
];

export const Team = () => {
  // Pass a default icon size, allowing for flexibility
  const socialIcon = (iconName: string, iconSize: number = 20) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size={iconSize} />;
      case "Github":
        return <GithubIcon size={iconSize} />;
      case "Instagram":
        return <Instagram size={iconSize} />;
      default:
        console.warn(`Unknown social icon: ${iconName}. Returning null.`);
        return null; // Handle unknown icons gracefully
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center font-serif">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text font-serif">
          Our{" "}
        </span>
        Team
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center ">
        Turning Challenges into Opportunities, Together
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 ">
        {teamList.map(
          ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center
              transition-all duration-300
              hover:shadow-lg hover:scale-[1.02]" // Added hover effects
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{description}</p> {/* Now using the dynamic description */}
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SocialNetworkProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};