import { Palette, Users, Zap, Heart } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const highlights = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Visual Design",
      description: "Creating beautiful, intuitive interfaces that users love"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Research",
      description: "Understanding user needs through empathy and research"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Design Thinking",
      description: "Solving problems through creative and strategic thinking"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Prototyping",
      description: "Bringing ideas to life with interactive prototypes"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="flex justify-center mb-8">
            <img 
              src={profilePhoto} 
              alt="Profile" 
              className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
            />
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A design professional blending creativity with strategic thinking, 
            I bring 7+ years of experience in user experience and product design across web and mobile platforms. 
            My expertise spans research, wire-framing, prototyping, and user testing, ensuring each product is both functional and delightful.
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
Throughout my career, I've led end-to-end design on numerous projects, taking them from concept to launch with a focus on user-centred solutions. 
What excites me most is seeing real users engage with my designs and using that feedback to drive continuous improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            
            <div className="glass-card p-8 space-y-4">
              <h3 className="text-2xl font-semibold mb-4">My Design Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe great design is invisible - it guides users effortlessly 
                toward their goals while creating delightful experiences. Every 
                design decision should serve both the user's needs and business objectives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines user research, creative problem-solving, and 
                iterative design to create solutions that are both beautiful and functional.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;