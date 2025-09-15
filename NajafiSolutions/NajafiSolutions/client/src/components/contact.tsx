import { Mail, MessageCircle, Share2 } from "lucide-react";
import { Twitter, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-card py-16" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="contact-title">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="contact-subtitle">
            Ready to automate your business? Let's discuss your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email Contact */}
          <div className="bg-muted rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300" data-testid="contact-email">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Email Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Company: <a href="mailto:thenajafigroup@gmail.com" className="text-primary hover:underline">thenajafigroup@gmail.com</a>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              CEO: <a href="mailto:mujahidnajfi@gmail.com" className="text-primary hover:underline">mujahidnajfi@gmail.com</a>
            </p>
            <p className="text-sm text-muted-foreground">
              Official: <a href="mailto:mujahid.company1@gmail.com" className="text-primary hover:underline">mujahid.company1@gmail.com</a>
            </p>
          </div>

          {/* WhatsApp Contact */}
          <div className="bg-muted rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300" data-testid="contact-whatsapp">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-4">Direct business communication</p>
            <a 
              href="https://wa.me/447777975722" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="link-whatsapp-contact"
            >
              +44 7777 975722
            </a>
          </div>

          {/* Social Media */}
          <div className="bg-muted rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300" data-testid="contact-social">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Share2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Social Media</h3>
            <div className="flex justify-center space-x-4 mt-4">
              <a 
                href="https://x.com/mujahid_najfi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-social-twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100074068495339" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
