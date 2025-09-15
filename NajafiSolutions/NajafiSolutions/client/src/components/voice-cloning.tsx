import { Mic } from "lucide-react";

export default function VoiceCloning() {
  const handleColabClick = () => {
    window.open('https://colab.research.google.com/github/NeuralFalconYT/F5-TTS-Demo/blob/main/F5_TTS_Latest.ipynb', '_blank');
  };

  return (
    <section className="bg-muted py-16" data-testid="voice-cloning-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="voice-cloning-title">
          Clone Your Voice in Minutes
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="voice-cloning-description">
          Advanced AI voice cloning technology with free API integration. Create professional voice models for your business needs.
        </p>
        
        {/* CTA Button */}
        <div className="mb-12">
          <button
            onClick={handleColabClick}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-12 py-6 rounded-xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
            data-testid="button-start-clone"
          >
            <Mic className="w-6 h-6" />
            Let's Start Clone
          </button>
        </div>

        {/* Quick Guide */}
        <div className="bg-card rounded-xl shadow-lg p-8 text-left" data-testid="voice-cloning-guide">
          <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Quick Start Guide</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4" data-testid="guide-step-1">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Open Google Colab</h4>
                <p className="text-muted-foreground">Click the "Let's Start Clone" button above to access our Colab notebook</p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-testid="guide-step-2">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Run the Code</h4>
                <p className="text-muted-foreground">Execute the cells in order and follow the on-screen instructions</p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-testid="guide-step-3">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Access Gradio Interface</h4>
                <p className="text-muted-foreground">Click the generated Gradio link to start cloning your voice</p>
              </div>
            </div>
            <div className="flex items-start space-x-4" data-testid="guide-step-4">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Upload & Generate</h4>
                <p className="text-muted-foreground">Upload your voice sample and generate your AI voice clone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
