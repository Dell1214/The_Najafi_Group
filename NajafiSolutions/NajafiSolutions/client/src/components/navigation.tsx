import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-card shadow-lg sticky top-0 z-50" data-testid="main-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-lg">TN</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">The Najafi Group</h1>
                <p className="text-xs text-muted-foreground">AI Automation & IT Solutions</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('models')}
                className="text-muted-foreground hover:bg-muted hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                data-testid="nav-models"
              >
                Our Models
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:bg-muted hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                data-testid="nav-services"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-muted-foreground hover:bg-muted hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                data-testid="nav-team"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('about-mujahid')}
                className="text-muted-foreground hover:bg-muted hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
                data-testid="nav-about"
              >
                About Mujahid
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="bg-muted inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-button"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left bg-primary text-primary-foreground px-3 py-2 rounded-md text-base font-medium"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('models')}
                className="block w-full text-left text-muted-foreground hover:bg-muted hover:text-foreground px-3 py-2 rounded-md text-base font-medium"
                data-testid="mobile-nav-models"
              >
                Our Models
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-muted-foreground hover:bg-muted hover:text-foreground px-3 py-2 rounded-md text-base font-medium"
                data-testid="mobile-nav-services"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left text-muted-foreground hover:bg-muted hover:text-foreground px-3 py-2 rounded-md text-base font-medium"
                data-testid="mobile-nav-team"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('about-mujahid')}
                className="block w-full text-left text-muted-foreground hover:bg-muted hover:text-foreground px-3 py-2 rounded-md text-base font-medium"
                data-testid="mobile-nav-about"
              >
                About Mujahid
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
