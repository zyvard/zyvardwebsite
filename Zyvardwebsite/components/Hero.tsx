import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

// Import the new logo image
import logoImage from 'figma:asset/ca5d24b892ca879131a547f435d8bb0e70f35000.png';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-zyvard-charcoal"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-zyvard-purple-accent/10 to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-zyvard-purple-light/10 to-transparent blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Logo */}
        <div className="mb-12 animate-fade-in-scale">
          <div className="w-48 h-48 mx-auto mb-8">
            <img 
              src={logoImage} 
              alt="Zyvard Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Slogan */}
        <div className="mb-12 animate-fade-in-up">
          <p className="text-2xl md:text-3xl text-zyvard-pearl/90 mb-6 font-light">
            Your <span className="font-bold">privacy</span>. Your <span className="font-bold">control</span>. No <span className="font-bold">compromises</span>.
          </p>
          <p className="text-lg md:text-xl text-zyvard-pearl/70 max-w-2xl mx-auto">
            Elite cybersecurity solutions for the privacy-conscious. Experience exceptional user experience with military-grade security.
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-zyvard-purple-accent to-zyvard-purple-light hover:from-zyvard-purple-light hover:to-zyvard-purple-accent text-zyvard-pearl px-12 py-6 text-xl rounded-2xl shadow-2xl shadow-zyvard-purple-accent/30 transform hover:scale-105 transition-all duration-300 group"
          >
            Check us out!
            <ArrowDown className="ml-2 h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}