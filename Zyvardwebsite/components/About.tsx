import { Shield, Zap, Users, Target, Globe, Cpu, Mail, Satellite, Map, Network, Smartphone, Tablet, Laptop } from 'lucide-react';

const timeline = [
  {
    year: '2026',
    product: 'ZyMail',
    description: 'Launching quantum-resistant email with zero data collection policies',
    icon: Mail,
    status: 'current'
  },
  {
    year: '2027',
    product: 'ZyDrive',
    description: 'Encrypted cloud storage with zero-knowledge architecture',
    icon: Shield,
    status: 'upcoming'
  },
  {
    year: '2027',
    product: 'ZyVPN',
    description: 'Military-grade VPN with quantum-resistant encryption',
    icon: Globe,
    status: 'upcoming'
  },
  {
    year: '2029',
    product: 'ZyOS',
    description: 'Privacy-first operating system built from the ground up',
    icon: Cpu,
    status: 'upcoming'
  },
  {
    year: '2032',
    product: 'KONRA Hardware',
    description: 'Secure hardware solutions for enterprise deployment',
    icon: Cpu,
    status: 'upcoming'
  },
  {
    year: '2035',
    product: 'ZyPhone',
    description: 'Privacy-first smartphone with integrated security',
    icon: Smartphone,
    status: 'upcoming'
  },
  {
    year: '2035',
    product: 'ZyPad',
    description: 'Secure tablet with privacy-focused computing',
    icon: Tablet,
    status: 'upcoming'
  },
  {
    year: '2035',
    product: 'ZyBook',
    description: 'Privacy-first laptop with military-grade security',
    icon: Laptop,
    status: 'upcoming'
  },
  {
    year: '2039',
    product: 'ZySat',
    description: 'Secure satellite communication network',
    icon: Satellite,
    status: 'vision'
  },
  {
    year: '2039',
    product: 'ZyMaps',
    description: 'Privacy-focused mapping and navigation platform',
    icon: Map,
    status: 'vision'
  },
  {
    year: '2039',
    product: 'ZyNet',
    description: 'Decentralized secure internet infrastructure',
    icon: Network,
    status: 'vision'
  }
];

const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Every product is designed with privacy as the foundation, not an afterthought.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Pushing the boundaries of what\'s possible in cybersecurity and privacy technology.'
  },
  {
    icon: Users,
    title: 'User Control',
    description: 'Empowering users with complete control over their digital lives and data.'
  },
  {
    icon: Target,
    title: 'No Compromises',
    description: 'Refusing to compromise on security, privacy, or user experience.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-zyvard-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-zyvard-purple-accent mb-6">
            About Zyvard
          </h2>
          <p className="text-xl text-zyvard-pearl/70 max-w-4xl mx-auto">
            Zyvard is innovating the privacy and security world with our client-first software. We prioritize you, and your data.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-zyvard-purple-accent/20 to-zyvard-purple-light/10 rounded-3xl p-12 mb-20 border border-zyvard-purple-accent/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-zyvard-purple-accent mb-6">Our Vision</h3>
            <p className="text-xl text-zyvard-pearl/80 max-w-3xl mx-auto">
              Innovation and pioneering in user experience, leading technology, military-level security, and functional AND customizable user interface. We want to pave the way businesses handle data and the status quo for business-user relations.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-zyvard-purple-accent text-center mb-12">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-zyvard-charcoal/80 rounded-2xl p-8 border border-zyvard-purple-accent/20 hover:border-zyvard-purple-accent/40 transition-all duration-500 hover:transform hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zyvard-purple-accent to-zyvard-purple-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-zyvard-purple-accent mb-4">{value.title}</h4>
                  <p className="text-zyvard-pearl/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-4xl font-bold text-zyvard-purple-accent text-center mb-12">Our Roadmap</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-zyvard-purple-accent to-zyvard-purple-light rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className={`bg-zyvard-charcoal/80 rounded-2xl p-6 border border-zyvard-purple-accent/20 hover:border-zyvard-purple-accent/40 transition-all duration-500 ${item.status === 'current' ? 'ring-2 ring-zyvard-purple-accent' : ''}`}>
                        <div className="flex items-center space-x-3 mb-3">
                          {!isLeft && (
                            <div className="w-12 h-12 bg-gradient-to-br from-zyvard-purple-accent to-zyvard-purple-light rounded-xl flex items-center justify-center">
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                          )}
                          <div>
                            <h4 className="text-xl font-bold text-zyvard-purple-accent">{item.product}</h4>
                            <p className="text-zyvard-purple-light">{item.year}</p>
                          </div>
                          {isLeft && (
                            <div className="w-12 h-12 bg-gradient-to-br from-zyvard-purple-accent to-zyvard-purple-light rounded-xl flex items-center justify-center">
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                          )}
                        </div>
                        <p className="text-zyvard-pearl/70">{item.description}</p>
                        {item.status === 'current' && (
                          <div className="mt-3">
                            <span className="inline-block bg-zyvard-purple-accent/20 text-zyvard-purple-light px-3 py-1 rounded-full text-sm">
                              Current Focus
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="w-2/12 flex justify-center">
                      <div className={`w-6 h-6 rounded-full ${item.status === 'current' ? 'bg-zyvard-purple-accent' : item.status === 'upcoming' ? 'bg-zyvard-purple-light' : 'bg-zyvard-pearl/50'} border-4 border-zyvard-charcoal z-10`}></div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}