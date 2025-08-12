import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const Projects = () => {
  const projects = [
    {
      title: "tt TaskFlow Mobile App",
      description: "A productivity app with intuitive design and seamless user experience. Features include task management, team collaboration, and progress tracking.",
      image: project1,
      tags: ["UI/UX Design", "Mobile App", "Figma"],
      github: "#",
      live: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Complete e-commerce solution with modern design, shopping cart functionality, and payment integration. Built with user conversion in mind.",
      image: project2,
      tags: ["Web Design", "E-commerce", "UI Design"],
      github: "#",
      live: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for business intelligence. Features interactive charts, real-time updates, and customizable widgets.",
      image: project3,
      tags: ["Dashboard", "Data Visualization", "UI Design"],
      github: "#",
      live: "#"
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
      image: project4,
      tags: ["Branding", "Logo Design", "Identity"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media App",
      description: "Modern social platform with real-time messaging, content sharing, and community features. Focus on clean UI and user engagement.",
      image: project5,
      tags: ["Social App", "UI Design", "Mobile"],
      github: "#",
      live: "#"
    },
    {
      title: "Website Redesign",
      description: "Complete website redesign for a consulting firm. Improved user experience, modern design, and better conversion rates.",
      image: project6,
      tags: ["Redesign", "Web Design", "UX"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing various design skills
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card group hover-lift overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex space-x-2">
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <Button 
            onClick={() => window.location.href = '/case-study'}
            size="lg"
            className="bg-primary hover:bg-primary-dark mr-4"
          >
            View Detailed Case Study
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-glass-border hover:bg-glass/50"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
