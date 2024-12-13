import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default Index;