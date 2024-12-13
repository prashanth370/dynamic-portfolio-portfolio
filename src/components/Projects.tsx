import { Code } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "Full-stack chat app with real-time messaging, image sharing, and emoji support",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      demo: "https://real-time-chat-application-bp5u.onrender.com/login",
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
      demo: "https://food-hut-rust.vercel.app/",
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
    <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground p-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 justify-center md:justify-start">
          <Code className="text-primary" />
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background/10 backdrop-blur-sm p-8 rounded-xl hover:bg-background/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-primary-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-base mb-4 text-secondary-foreground/90 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-primary/20 text-primary-foreground rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary-foreground transition-colors flex items-center gap-1"
                  >
                    Live Demo →
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary-foreground transition-colors flex items-center gap-1"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};