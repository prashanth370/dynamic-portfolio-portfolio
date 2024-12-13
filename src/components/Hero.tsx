import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/prashanth370",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/prashanth370/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/Prashanth062",
      label: "Twitter",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:prashanthnayak577@gmail.com",
      label: "Email",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      href: "https://drive.google.com/file/d/1-8v_GodT9K0YgtUXxiPMiUKqbSXKpA8c/view?usp=sharing",
      label: "Resume",
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Banoth Prashanth</h1>
        <p className="text-xl text-muted-foreground mb-8">Frontend Developer</p>
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary transition-colors"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate frontend developer with experience in building responsive web applications
          using modern technologies like React, Node.js, and TypeScript.
        </p>
      </div>
    </section>
  );
};