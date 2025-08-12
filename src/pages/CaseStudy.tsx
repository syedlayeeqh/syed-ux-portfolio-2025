import { ArrowLeft, Clock, Users, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import wireframesImg from '@/assets/wireframes.jpg';
import personasImg from '@/assets/personas.jpg';
import legalAppImg from '@/assets/legal-app-ui.jpg';
import userJourneyImg from '@/assets/user-journey.jpg';
import usabilityTestingImg from '@/assets/usability-testing.jpg';

const CaseStudy = () => {
  const navigate = useNavigate();

  const projectDetails = [
    { icon: <Clock className="h-5 w-5" />, label: "Duration", value: "12 weeks" },
    { icon: <Users className="h-5 w-5" />, label: "Team", value: "4 members" },
    { icon: <Target className="h-5 w-5" />, label: "Role", value: "Lead UX Designer" },
    { icon: <CheckCircle className="h-5 w-5" />, label: "Platform", value: "iOS & Android" }
  ];

  const keyFindings = [
    "73% of users found existing legal consultation processes intimidating",
    "Average wait time for legal advice was 2-3 weeks",
    "65% preferred mobile-first solutions for initial consultations",
    "Cost transparency was the biggest concern for 81% of users"
  ];

  const designPrinciples = [
    { title: "Transparency", description: "Clear pricing and process visibility" },
    { title: "Accessibility", description: "Simple language, avoiding legal jargon" },
    { title: "Trust", description: "Professional design with verified lawyer profiles" },
    { title: "Efficiency", description: "Streamlined booking and consultation process" }
  ];

  const testingResults = [
    { metric: "Task Completion Rate", before: "62%", after: "94%" },
    { metric: "Time to Book Consultation", before: "8.5 min", after: "2.3 min" },
    { metric: "User Satisfaction Score", before: "6.2/10", after: "8.7/10" },
    { metric: "App Store Rating", before: "N/A", after: "4.6/5" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card py-4">
        <div className="container mx-auto px-6 flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">UX Case Study</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">LegalConnect</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Bridging the gap between clients and legal expertise through intuitive mobile design
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {projectDetails.map((detail, index) => (
              <div key={index} className="glass-card p-4 text-center">
                <div className="text-primary mb-2 flex justify-center">{detail.icon}</div>
                <div className="text-sm text-muted-foreground">{detail.label}</div>
                <div className="font-semibold">{detail.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Statement */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">The Problem</h2>
          <div className="glass-card p-8">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-destructive mb-3">Core Challenge</h3>
              <p className="text-lg leading-relaxed">
                Traditional legal consultation processes are intimidating, time-consuming, and lack transparency, 
                creating barriers between clients and legal professionals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">User Pain Points</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Complex legal jargon and processes</li>
                  <li>• Uncertain costs and hidden fees</li>
                  <li>• Long waiting times for consultations</li>
                  <li>• Lack of lawyer verification and reviews</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Business Impact</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High client acquisition costs</li>
                  <li>• Low conversion rates</li>
                  <li>• Poor user experience satisfaction</li>
                  <li>• Limited market reach</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Phase */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Research & Discovery</h2>
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">User Research Methods</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">User Interviews</h4>
                  <p className="text-sm text-muted-foreground">15 participants across different demographics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                  <h4 className="font-semibold mb-2">Surveys</h4>
                  <p className="text-sm text-muted-foreground">120 responses from potential users</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">Competitor Analysis</h4>
                  <p className="text-sm text-muted-foreground">8 existing legal platforms analyzed</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Key Research Findings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {keyFindings.map((finding, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* User Personas */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">User Personas</h2>
          <div className="glass-card p-8">
            <img 
              src={personasImg} 
              alt="User personas for legal consultation app"
              className="w-full rounded-lg mb-6"
            />
            <p className="text-muted-foreground">
              Based on our research, we identified three primary user personas: the First-time Legal Client, 
              the Small Business Owner, and the Busy Professional. Each persona had distinct needs, 
              goals, and pain points that informed our design decisions.
            </p>
          </div>
        </section>

        {/* User Journey */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">User Journey Mapping</h2>
          <div className="glass-card p-8">
            <img 
              src={userJourneyImg} 
              alt="User journey map for legal consultation process"
              className="w-full rounded-lg mb-6"
            />
            <p className="text-muted-foreground">
              We mapped the complete user journey from initial problem recognition to post-consultation follow-up, 
              identifying pain points and opportunities for improvement at each touchpoint.
            </p>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Design Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="glass-card p-6 hover-lift">
                <h3 className="text-xl font-semibold text-primary mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wireframes */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Wireframes & Information Architecture</h2>
          <div className="glass-card p-8">
            <img 
              src={wireframesImg} 
              alt="Low-fidelity wireframes for mobile app"
              className="w-full rounded-lg mb-6"
            />
            <p className="text-muted-foreground">
              We started with low-fidelity wireframes to establish the information architecture 
              and basic user flow, focusing on content hierarchy and core functionality before 
              adding visual design elements.
            </p>
          </div>
        </section>

        {/* High-Fidelity Designs */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">High-Fidelity Designs</h2>
          <div className="glass-card p-8">
            <img 
              src={legalAppImg} 
              alt="High-fidelity mobile app designs"
              className="w-full rounded-lg mb-6"
            />
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lawyer search & filtering</li>
                  <li>• Transparent pricing</li>
                  <li>• Video consultations</li>
                  <li>• Secure document sharing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Design System</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Professional color palette</li>
                  <li>• Accessible typography</li>
                  <li>• Consistent iconography</li>
                  <li>• Reusable components</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Accessibility</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• WCAG 2.1 AA compliance</li>
                  <li>• Voice-over support</li>
                  <li>• High contrast mode</li>
                  <li>• Large touch targets</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Usability Testing */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Usability Testing & Results</h2>
          <div className="space-y-8">
            <div className="glass-card p-8">
              <img 
                src={usabilityTestingImg} 
                alt="Usability testing results and metrics"
                className="w-full rounded-lg mb-6"
              />
              <p className="text-muted-foreground mb-6">
                We conducted three rounds of usability testing with 24 participants, 
                using both moderated and unmoderated sessions to gather comprehensive feedback.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testingResults.map((result, index) => (
                <div key={index} className="glass-card p-6">
                  <h4 className="font-semibold mb-3">{result.metric}</h4>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Before</div>
                      <div className="text-xl font-bold text-destructive">{result.before}</div>
                    </div>
                    <div className="text-2xl text-muted-foreground">→</div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">After</div>
                      <div className="text-xl font-bold text-success">{result.after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">47%</div>
              <div className="text-sm text-muted-foreground">Increase in user engagement</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">62%</div>
              <div className="text-sm text-muted-foreground">Reduction in support tickets</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">89%</div>
              <div className="text-sm text-muted-foreground">User satisfaction rate</div>
            </div>
          </div>
        </section>

        {/* Learnings & Next Steps */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Learnings & Next Steps</h2>
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Key Learnings</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• User research early and often prevents costly redesigns</li>
                  <li>• Simple language significantly improves user confidence</li>
                  <li>• Trust indicators are crucial in legal technology</li>
                  <li>• Mobile-first approach works well for this demographic</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">Next Steps</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Implement AI-powered lawyer matching</li>
                  <li>• Add multi-language support</li>
                  <li>• Develop web platform for complex cases</li>
                  <li>• Integrate payment processing improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-primary-dark"
          >
            Back to Portfolio
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CaseStudy;