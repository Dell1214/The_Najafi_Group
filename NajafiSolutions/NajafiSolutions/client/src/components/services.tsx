import { Code, Brain, Bot, Users, Mic, Share2 } from "lucide-react";
import { SiAsana, SiZoho, SiHubspot } from "react-icons/si";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "IT Services",
      description: "Complete IT infrastructure management, development, and support services for businesses of all sizes.",
      features: ["Web Development", "Software Solutions", "IT Consulting", "System Integration"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Advanced ML models and AI solutions to automate and optimize your business processes.",
      features: ["Predictive Analytics", "Neural Networks", "Data Processing", "Model Training"]
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Automation",
      description: "Intelligent automation solutions that transform manual processes into efficient workflows.",
      features: ["Process Automation", "Workflow Optimization", "Intelligent Chatbots", "Task Scheduling"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Custom CRM",
      description: "Tailored CRM solutions and integrations with top platforms on client demand.",
      features: [],
      logos: [
        { Component: SiAsana, name: "Asana" },
        { Component: SiZoho, name: "Zoho" },
        { Component: SiHubspot, name: "GoHighLevel" }
      ]
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Cloning",
      description: "Professional AI voice cloning services with free API access and premium features.",
      features: ["Real-time Voice Clone", "Multiple Languages", "API Integration", "Custom Voice Models"]
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Media Automation",
      description: "Complete social media management and automation for individuals and businesses.",
      features: ["Content Scheduling", "Auto-posting", "Analytics & Reports", "Multi-platform Support"]
    }
  ];

  return (
    <section id="services" className="bg-card py-16" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="services-subtitle">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-muted rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              data-testid={`service-card-${index}`}
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              {service.features && service.features.length > 0 && (
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              )}
              
              {service.logos && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.logos.map((logo, logoIndex) => (
                    <div key={logoIndex} className="logo-filter">
                      <logo.Component className="h-6 w-6 text-gray-600" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
