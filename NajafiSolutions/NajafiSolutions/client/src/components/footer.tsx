export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="gradient-bg text-primary-foreground py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mr-3">
                <span className="text-accent-foreground font-bold text-lg">TN</span>
              </div>
              <div>
                <h3 className="text-xl font-bold" data-testid="footer-company-name">The Najafi Group</h3>
                <p className="text-sm opacity-80" data-testid="footer-tagline">AI Automation & IT Solutions</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-md" data-testid="footer-description">
              Transforming businesses through intelligent automation, custom AI solutions, and comprehensive IT services.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-quick-links-title">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="opacity-80 hover:opacity-100 transition-opacity text-left"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="opacity-80 hover:opacity-100 transition-opacity text-left"
                  data-testid="footer-link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('models')}
                  className="opacity-80 hover:opacity-100 transition-opacity text-left"
                  data-testid="footer-link-models"
                >
                  Our Models
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="opacity-80 hover:opacity-100 transition-opacity text-left"
                  data-testid="footer-link-team"
                >
                  Team
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-services-title">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">AI Automation</li>
              <li className="opacity-80">Voice Cloning</li>
              <li className="opacity-80">Custom CRM</li>
              <li className="opacity-80">Machine Learning</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80" data-testid="footer-copyright">
            © 2024 The Najafi Group. All rights reserved. | AI Automation & IT Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
