import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

// Import the hero logo image
import logoImage from 'figma:asset/ca5d24b892ca879131a547f435d8bb0e70f35000.png';

export default function Footer() {
  return (
    <footer className="bg-zyvard-charcoal border-t border-zyvard-pearl/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12">
                <img 
                  src={logoImage} 
                  alt="Zyvard" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-zyvard-pearl/70 text-lg mb-6 max-w-md">
              Elite cybersecurity solutions for the privacy-conscious. Building the future of secure digital infrastructure.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-zyvard-purple-dark/50 rounded-xl flex items-center justify-center text-zyvard-pearl hover:bg-zyvard-purple-accent/20 hover:text-zyvard-purple-light transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-zyvard-purple-dark/50 rounded-xl flex items-center justify-center text-zyvard-pearl hover:bg-zyvard-purple-accent/20 hover:text-zyvard-purple-light transition-all duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-zyvard-purple-dark/50 rounded-xl flex items-center justify-center text-zyvard-pearl hover:bg-zyvard-purple-accent/20 hover:text-zyvard-purple-light transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-zyvard-purple-dark/50 rounded-xl flex items-center justify-center text-zyvard-pearl hover:bg-zyvard-purple-accent/20 hover:text-zyvard-purple-light transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold text-zyvard-pearl mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZyMail</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZyDrive</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZyVPN</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZyOS</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">KONRA</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZyPhone</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZyPad</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZyBook</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZyLabs</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZySat</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZyMaps</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">ZyNet</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-zyvard-pearl mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">Press</a></li>
              <li><a href="#contact" className="text-zyvard-pearl/70 hover:text-zyvard-purple-light transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zyvard-pearl/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zyvard-pearl/60 mb-4 md:mb-0">
              © 2025 Zyvard. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-zyvard-pearl/60 hover:text-zyvard-purple-light transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-zyvard-pearl/60 hover:text-zyvard-purple-light transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}