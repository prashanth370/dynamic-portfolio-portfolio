import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "TECHPLEMENT (Startup)",
      position: "Frontend Developer Intern",
      period: "Jan 2024 – March 2024",
      type: "Remote",
      points: [
        "Build a RESTful API for managing library resources using Node.js and Express.js with CRUD functionality",
        "Debugged backend systems, improving stability of 15 components",
        "Wrote comprehensive unit tests for core functionality",
      ],
    },
    {
      company: "Salesforce (Smart Interns')",
      position: "Salesforce Developer Virtual Internship",
      period: "April 2023 – May 2024",
      type: "Remote",
      points: [
        "Gained hands-on experience with Salesforce Trailhead modules",
        "Enhanced secure platform solutions using Apex, Visualforce, and Lightning Web Components (LWC)",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground p-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <Briefcase className="text-primary" />
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-primary pl-6 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-primary mb-2">{exp.position}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {exp.period} • {exp.type}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};