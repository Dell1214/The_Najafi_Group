import { CheckCircle } from "lucide-react";
import ceoImagePath from "@assets/Gemini_Generated_Image_yukvatyukvatyukv_1758010409713.png";

export default function AboutMujahid() {
  const expertiseAreas = [
    "AI & Machine Learning",
    "Business Automation", 
    "Data Analysis",
    "Net-zero Insights"
  ];

  return (
    <section id="about-mujahid" className="bg-muted py-16" data-testid="about-mujahid-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="about-mujahid-title">
            About Mujahid Hussain
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="about-mujahid-subtitle">
            Visionary leader in AI automation and business transformation
          </p>
        </div>
        
        <div className="bg-card rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img 
                  src={ceoImagePath} 
                  alt="Mujahid Hussain" 
                  className="w-full h-full object-cover"
                  data-testid="img-mujahid-profile"
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid="text-professional-journey">
                  Professional Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a Graduate in IT and the Founder & CEO of The Najafi Group, Mujahid brings extensive expertise in automation engineering and data analysis. His role as Data Analyst at JHK Solution has equipped him with deep insights into business process optimization and intelligent automation solutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid="text-expertise-areas">
                  Expertise Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {expertiseAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2" data-testid={`expertise-${index}`}>
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3" data-testid="text-vision">
                  Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mujahid's vision is to democratize AI automation, making advanced technology accessible to businesses of all sizes. Through The Najafi Group, he aims to transform how companies operate by providing intelligent automation solutions that drive efficiency and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
