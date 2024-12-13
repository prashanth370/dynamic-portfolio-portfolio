import { Github, Linkedin, Twitter } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground p-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Banoth Prashanth</h1>
        <p className="text-xl md:text-2xl mb-8 text-accent">Frontend Developer & Software Engineer</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Based in Hyderabad, building web applications with modern technologies
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/prashanth370"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/prashanth370/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/Prashanth062"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-foreground hover:text-primary transition-colors"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};