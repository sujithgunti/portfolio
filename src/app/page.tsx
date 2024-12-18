import { HeroParallax } from "@/components/ui/hero-parallax";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Contact } from "@/components/sections/Contact";
import { SocialLinks } from "@/components/ui/social-links";

const navItems = [
  {
    name: "Home",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
];

const products = [
  {
    title: "Group Chat Application",
    link: "https://github.com/sujithgunti/Group-Chat-Application",
    thumbnail: "/projects/chat.png"
  },
  {
    title: "Employee Management System",
    link: "https://github.com/sujithgunti/employee-management-system",
    thumbnail: "/projects/employ.png"
  },
  {
    title: "Weather App",
    link: "https://github.com/sujithgunti/weather-application",
    thumbnail: "/projects/weather.png"
  },
  // Add more projects with images
];

export default function Home() {
  return (
    <div className="bg-black">
      <FloatingNav navItems={navItems} />
      <SocialLinks />
      <HeroParallax products={products} />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
