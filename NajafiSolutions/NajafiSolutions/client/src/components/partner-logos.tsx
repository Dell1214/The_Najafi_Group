import { 
  SiOpenai as OpenAI, 
  SiGoogle as Google, 
  SiNvidia as Nvidia
} from "react-icons/si";

export default function PartnerLogos() {
  return (
    <section className="bg-card py-12 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8" data-testid="partner-title">
          Free API Integration & Pro Version Services
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="logo-filter p-4 flex flex-col items-center" data-testid="logo-openai">
            <OpenAI className="h-12 w-12 text-gray-600" />
            <span className="text-sm text-muted-foreground mt-2">OpenAI</span>
          </div>
          <div className="logo-filter p-4 flex flex-col items-center" data-testid="logo-elevenlabs">
            <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">11</span>
            </div>
            <span className="text-sm text-muted-foreground mt-2">ElevenLabs</span>
          </div>
          <div className="logo-filter p-4 flex flex-col items-center" data-testid="logo-gemini">
            <Google className="h-12 w-12 text-gray-600" />
            <span className="text-sm text-muted-foreground mt-2">Gemini</span>
          </div>
          <div className="logo-filter p-4 flex flex-col items-center" data-testid="logo-deepseek">
            <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DS</span>
            </div>
            <span className="text-sm text-muted-foreground mt-2">DeepSeek</span>
          </div>
        </div>
      </div>
    </section>
  );
}
