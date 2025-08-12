const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite", "Framer", "Principle"]
    },
    {
      title: "Design Process",
      skills: ["User Research", "Prototyping", "Design Systems", "Accessibility", "Wireframing", "User Testing"]
    },
    {
      title: "Visual Design",
      skills: ["Typography", "Color Theory", "Layout Design", "Iconography", "Brand Identity", "Illustration"]
    },
    {
      title: "Collaboration",
      skills: ["Stakeholder Management", "Design Handoff", "Workshop Facilitation", "Team Leadership", "Client Presentation", "Agile"]
    }
  ];

  const technologies = [
    "Figma", "Adobe XD", "Sketch", "Adobe Creative Suite", "Framer", "Principle",
    "InVision", "Miro", "Notion", "Zeplin", "Abstract", "Maze"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 text-xs bg-muted/50 text-foreground rounded-full border border-glass-border/30 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-scale-in">
          <h3 className="text-2xl font-semibold mb-8">Tools I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 glass-card text-sm hover-lift transition-all duration-300 hover:text-primary"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;