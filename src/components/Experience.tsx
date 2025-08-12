import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior UI/UX Designer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead design for multiple product lines, managing a team of 3 designers. Implemented design systems that increased design consistency and efficiency by 40%.",
      achievements: [
        "Redesigned core product resulting in 25% increase in user engagement",
        "Established company-wide design system and component library",
        "Led user research initiatives that improved conversion rates by 18%"
      ]
    },
    {
      title: "UI/UX Designer",
      company: "Digital Studio Pro", 
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Led design projects for client projects ranging from startups to enterprise applications. Specialized in user research, prototyping, and design systems.",
      achievements: [
        "Delivered 20+ successful client projects on time and budget",
        "Created comprehensive design system used across all projects",
        "Improved client satisfaction scores by 30% through better UX"
      ]
    },
    {
      title: "Junior Designer",
      company: "Creative Agency",
      location: "Los Angeles, CA",
      period: "2019 - 2020",
      description: "Started my career focusing on visual design and brand identity. Learned fundamental design principles and client communication skills.",
      achievements: [
        "Created brand identities for 15+ small businesses",
        "Developed proficiency in Adobe Creative Suite",
        "Contributed to team winning 3 design awards"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements in design
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                <div className="ml-20">
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-medium mb-2">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;