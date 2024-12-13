import { Computer } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Frameworks/Technologies",
      skills: ["React.js", "Django", "Flask", "Node.js", "Express.js", "RESTful APIs", "TypeScript"],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools",
      skills: ["VS Code", "Git", "GitHub", "Postman"],
    },
    {
      title: "Other Skills",
      skills: ["DSA", "OOPS", "Debugging", "Performance Optimization", "Unit Testing", "Functional Testing"],
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground p-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <Computer className="text-primary" />
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};