import { SiOpenai, SiGoogle, SiNvidia } from "react-icons/si";

export default function Models() {
  const models = [
    {
      icon: <SiOpenai className="h-12 w-12 text-gray-600" />,
      title: "GPT Models",
      description: "Advanced language models for text generation and analysis"
    },
    {
      icon: (
        <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">11</span>
        </div>
      ),
      title: "Voice Models",
      description: "Realistic voice synthesis and cloning technology"
    },
    {
      icon: <SiGoogle className="h-12 w-12 text-gray-600" />,
      title: "Gemini Pro",
      description: "Multi-modal AI for complex reasoning and analysis"
    },
    {
      icon: <SiNvidia className="h-12 w-12 text-gray-600" />,
      title: "Custom Models",
      description: "Tailored AI solutions for specific business needs"
    }
  ];

  return (
    <section id="models" className="bg-muted py-16" data-testid="models-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="models-title">
            Our AI Models
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="models-subtitle">
            Cutting-edge AI models powered by leading platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              data-testid={`model-card-${index}`}
            >
              <div className="flex justify-center mb-4">
                {model.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{model.title}</h3>
              <p className="text-sm text-muted-foreground">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
