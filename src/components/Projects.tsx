import { Code } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "Full-stack chat app with real-time messaging, image sharing, and emoji support",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      demo: "Live Demo",
      github: "https://github.com/prashanth370",
    },
    {
      title: "To-Do App",
      description: "Full-stack To-Do App with CRUD functionality and user authentication",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/prashanth370",
    },
    {
      title: "FoodHut-Delivery",
      description: "Intuitive food delivery platform with streamlined order management",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "Live Demo",
      github: "https://github.com/prashanth370",
    },
    {
      title: "Parkinson's Disease Assessment",
      description: "Deep learning model using CNNs to assess Parkinson's disease severity",
      tech: ["Python", "TensorFlow", "CNN"],
      github: "https://github.com/prashanth370",
    },
  ];

  return (
    <section className="py-20 bg-secondary text-secondary-foreground p-4" id="projects">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <Code className="text-primary" />
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background/10 p-6 rounded-lg hover:bg-background/20 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4 text-secondary-foreground/80">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.demo && (
                  <a
                    href="#"
                    className="text-sm text-primary hover:text-primary-foreground transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  className="text-sm text-primary hover:text-primary-foreground transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};