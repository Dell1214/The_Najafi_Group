import { Mail, Twitter, Facebook, Linkedin } from "lucide-react";
import ceoImagePath from "@assets/Gemini_Generated_Image_yukvatyukvatyukv_1758010409713.png";

export default function Team() {
  return (
    <section id="team" className="bg-card py-16" data-testid="team-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="team-title">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="team-subtitle">
            Industry experts driving innovation in AI and automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* CEO Profile */}
          <div className="bg-muted rounded-xl p-8 text-center" data-testid="ceo-profile">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <img 
                src={ceoImagePath} 
                alt="Mujahid Hussain - CEO" 
                className="w-full h-full object-cover"
                data-testid="img-ceo"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-ceo-name">
              Mujahid Hussain
            </h3>
            <p className="text-accent font-semibold mb-4" data-testid="text-ceo-title">
              Owner & CEO
            </p>
            <div className="text-sm text-muted-foreground space-y-2 text-left" data-testid="text-ceo-experience">
              <p>• Graduate in IT</p>
              <p>• Founder and CEO Automation Engineer</p>
              <p>• Data Analyst at JHK Solution</p>
              <p>• Net-zero insights specialist</p>
              <p>• AI Expert</p>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <a 
                href="mailto:mujahidnajfi@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-ceo-email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/mujahid_najfi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-ceo-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100074068495339" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-ceo-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Co-Founder Profile */}
          <div className="bg-muted rounded-xl p-8 text-center" data-testid="cofounder-profile">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground text-3xl font-bold">MS</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-cofounder-name">
              M Shahid Hussain
            </h3>
            <p className="text-accent font-semibold mb-4" data-testid="text-cofounder-title">
              Co-Founder & MD
            </p>
            <div className="text-sm text-muted-foreground space-y-2 text-left" data-testid="text-cofounder-experience">
              <p>• Strategic Business Development</p>
              <p>• Operations Management</p>
              <p>• Client Relations Expert</p>
              <p>• Business Process Optimization</p>
              <p>• Partnership Development</p>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <a 
                href="mailto:thenajafigroup@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-cofounder-email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-cofounder-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
