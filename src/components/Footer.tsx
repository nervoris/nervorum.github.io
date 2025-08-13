import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-neural-gradient bg-clip-text text-transparent">
              Nervorum LLC
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Advancing neural research and computational intelligence through innovative methodologies 
              and collaborative scientific exploration.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:Contact@Nervorum.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact@Nervorum.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:Research@Nervorum.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Research@Nervorum.com
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-primary" />
                <a href="https://instagram.com/NervorumLLC" className="text-muted-foreground hover:text-primary transition-colors">
                  @NervorumLLC
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-primary" />
                <a href="https://instagram.com/NervorumLabs" className="text-muted-foreground hover:text-primary transition-colors">
                  @NervorumLabs
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Nervorum LLC. All rights reserved. •{' '}
            <span className="bg-neural-gradient bg-clip-text text-transparent font-medium">
              Nocte Incerta, Via Certa
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;