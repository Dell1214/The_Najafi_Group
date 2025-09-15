import { Mic, MessageCircle } from "lucide-react";

export default function Hero() {
  const handleVoiceCloneClick = () => {
    window.open('https://colab.research.google.com/github/NeuralFalconYT/F5-TTS-Demo/blob/main/F5_TTS_Latest.ipynb', '_blank');
  };

  return (
    <section id="home" className="gradient-bg text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
          Automate Your Business in <span className="text-secondary">Seconds</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto" data-testid="hero-subtitle">
          Professional IT Services, AI Automation, Machine Learning, and Custom CRM Solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleVoiceCloneClick}
            className="bg-secondary text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            data-testid="button-voice-clone"
          >
            <Mic className="w-5 h-5" />
            Let's Start Voice Clone
          </button>
          <a 
            href="https://wa.me/447777975722"
            className="bg-transparent border-2 border-secondary text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary hover:text-accent-foreground transition-all duration-300 flex items-center gap-2"
            data-testid="link-whatsapp"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
