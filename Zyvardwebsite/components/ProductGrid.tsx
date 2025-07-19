import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Shield, Globe, Smartphone, Server, Building, Cpu, Mail, Satellite, Map, Network, Tablet, Laptop, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'zymail',
    name: 'ZyMail',
    description: 'Quantum-resistant email with zero data collection',
    icon: Mail,
    features: ['Zero data collection', 'Quantum-resistant encryption', 'User-oriented UI'],
    gradient: 'from-zyvard-purple-accent to-zyvard-purple-light'
  },
  {
    id: 'zydrive',
    name: 'ZyDrive',
    description: 'Encrypted cloud storage with zero-knowledge architecture',
    icon: Shield,
    features: ['End-to-end encryption', 'Zero-knowledge storage', 'Cross-platform sync'],
    gradient: 'from-zyvard-purple-light to-purple-600'
  },
  {
    id: 'zyvpn',
    name: 'ZyVPN',
    description: 'Military-grade VPN with quantum-resistant encryption',
    icon: Globe,
    features: ['Quantum-resistant encryption', 'Global server network', 'No-logs policy'],
    gradient: 'from-green-500 to-zyvard-purple-accent'
  },
  {
    id: 'zyos',
    name: 'ZyOS',
    description: 'Privacy-first operating system built from the ground up',
    icon: Cpu,
    features: ['Built-in privacy controls', 'Secure by design', 'Open source'],
    gradient: 'from-zyvard-purple-accent to-pink-600'
  },
  {
    id: 'konra',
    name: 'KONRA',
    description: 'Secure hardware solutions for enterprise security',
    icon: Cpu,
    features: ['Hardware security modules', 'Tamper-resistant design', 'Enterprise-grade'],
    gradient: 'from-orange-500 to-zyvard-purple-accent'
  },
  {
    id: 'zyphone',
    name: 'ZyPhone',
    description: 'Privacy-first smartphone with integrated security',
    icon: Smartphone,
    features: ['Hardware security', 'Encrypted communications', 'Privacy-focused OS'],
    gradient: 'from-indigo-500 to-zyvard-purple-accent'
  },
  {
    id: 'zypad',
    name: 'ZyPad',
    description: 'Secure tablet with privacy-focused computing',
    icon: Tablet,
    features: ['Large secure display', 'Professional grade', 'Business security'],
    gradient: 'from-zyvard-purple-light to-rose-600'
  },
  {
    id: 'zybook',
    name: 'ZyBook',
    description: 'Privacy-first laptop with military-grade security',
    icon: Laptop,
    features: ['Military-grade security', 'Secure boot', 'Privacy hardware'],
    gradient: 'from-amber-500 to-zyvard-purple-light'
  },
  {
    id: 'zylabs',
    name: 'ZyLabs',
    description: 'Advanced cybersecurity research and development',
    icon: Server,
    features: ['Cutting-edge research', 'Security auditing', 'Threat intelligence'],
    gradient: 'from-teal-500 to-zyvard-purple-accent'
  },
  {
    id: 'zysat',
    name: 'ZySat',
    description: 'Secure satellite communication network',
    icon: Satellite,
    features: ['Global coverage', 'Quantum encryption', 'Low-latency communication'],
    gradient: 'from-zyvard-purple-accent to-zyvard-purple-light'
  },
  {
    id: 'zymaps',
    name: 'ZyMaps',
    description: 'Privacy-focused mapping and navigation platform',
    icon: Map,
    features: ['Anonymous navigation', 'Offline maps', 'Location privacy'],
    gradient: 'from-emerald-500 to-zyvard-purple-light'
  },
  {
    id: 'zynet',
    name: 'ZyNet',
    description: 'Decentralized secure internet infrastructure',
    icon: Network,
    features: ['Decentralized architecture', 'Mesh networking', 'Censorship resistance'],
    gradient: 'from-zyvard-purple-light to-pink-600'
  }
];

export default function ProductGrid() {
  const [visibleCards, setVisibleCards] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" className="py-32 px-6 bg-zyvard-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-zyvard-purple-accent mb-6">
            Our Ecosystem
          </h2>
          <p className="text-xl text-zyvard-pearl/70 max-w-3xl mx-auto">
            Our leading product line envisioned for total security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isVisible = visibleCards.includes(product.id);
            
            return (
              <Card 
                key={product.id}
                id={product.id}
                className={`product-card group bg-zyvard-charcoal/80 border-zyvard-purple-accent/20 hover:border-zyvard-purple-accent/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zyvard-purple-accent/20 rounded-2xl overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white drop-shadow-sm" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8 pt-0">
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-zyvard-purple-light rounded-full"></div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-zyvard-purple-accent/50 text-zyvard-purple-accent hover:bg-zyvard-purple-accent/20 hover:border-zyvard-purple-accent transition-all duration-300 group/btn rounded-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}