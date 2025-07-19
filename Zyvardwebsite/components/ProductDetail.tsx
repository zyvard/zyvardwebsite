import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, Check, Star, ArrowRight, Download, Play } from 'lucide-react';

interface ProductDetailProps {
  product: {
    name: string;
    tagline: string;
    description: string;
    features: string[];
    benefits: string[];
    pricing: {
      plan: string;
      price: string;
      features: string[];
    }[];
    testimonial: {
      quote: string;
      author: string;
      role: string;
    };
    stats: {
      users: string;
      rating: number;
      uptime: string;
    };
  };
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zyvard-purple-darker to-zyvard-purple-dark pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-zyvard-purple-accent to-zyvard-purple-light rounded-3xl flex items-center justify-center mb-8">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-zyvard-pearl mb-6">
              {product.name}
            </h1>
            <p className="text-2xl md:text-3xl text-zyvard-pearl/80 mb-8 max-w-4xl mx-auto">
              {product.tagline}
            </p>
            <p className="text-lg text-zyvard-pearl/70 max-w-3xl mx-auto mb-12">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zyvard-purple-accent to-zyvard-purple-light hover:from-zyvard-purple-light hover:to-zyvard-purple-accent text-zyvard-pearl px-8 py-6 text-lg rounded-xl transition-all duration-300 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-zyvard-pearl/20 text-zyvard-pearl hover:bg-zyvard-purple-accent/20 hover:border-zyvard-purple-light px-8 py-6 text-lg rounded-xl transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-zyvard-purple-dark/50 to-zyvard-charcoal/50 border-zyvard-pearl/10 rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-zyvard-pearl mb-2">{product.stats.users}</div>
                <div className="text-zyvard-pearl/70">Active Users</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-zyvard-purple-dark/50 to-zyvard-charcoal/50 border-zyvard-pearl/10 rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-4xl font-bold text-zyvard-pearl mr-2">{product.stats.rating}</div>
                  <Star className="h-8 w-8 text-yellow-400 fill-current" />
                </div>
                <div className="text-zyvard-pearl/70">User Rating</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-zyvard-purple-dark/50 to-zyvard-charcoal/50 border-zyvard-pearl/10 rounded-2xl text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-zyvard-pearl mb-2">{product.stats.uptime}</div>
                <div className="text-zyvard-pearl/70">Uptime</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-zyvard-pearl text-center mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-zyvard-purple-dark/50 to-zyvard-charcoal/50 border-zyvard-pearl/10 rounded-2xl hover:border-zyvard-purple-light/30 transition-all duration-500 hover:transform hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-zyvard-purple-accent to-zyvard-purple-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-zyvard-pearl mb-4">{feature}</h3>
                  <p className="text-zyvard-pearl/70">Advanced security feature designed to protect your data with enterprise-grade encryption.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-zyvard-pearl text-center mb-16">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.pricing.map((plan, index) => (
              <Card key={index} className={`bg-gradient-to-br from-zyvard-purple-dark/50 to-zyvard-charcoal/50 border-zyvard-pearl/10 rounded-2xl transition-all duration-500 hover:transform hover:scale-105 ${index === 1 ? 'ring-2 ring-zyvard-purple-accent' : ''}`}>
                <CardHeader className="p-8 text-center">
                  {index === 1 && (
                    <Badge className="bg-zyvard-purple-accent text-zyvard-pearl mb-4 mx-auto">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl text-zyvard-pearl mb-2">{plan.plan}</CardTitle>
                  <CardDescription className="text-4xl font-bold text-zyvard-pearl">
                    {plan.price}
                    <span className="text-lg font-normal text-zyvard-pearl/70">/month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-zyvard-purple-light" />
                        <span className="text-zyvard-pearl/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-6 rounded-xl transition-all duration-300 ${index === 1 ? 'bg-gradient-to-r from-zyvard-purple-accent to-zyvard-purple-light hover:from-zyvard-purple-light hover:to-zyvard-purple-accent text-zyvard-pearl' : 'variant-outline border-zyvard-pearl/20 text-zyvard-pearl hover:bg-zyvard-purple-accent/20'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-zyvard-purple-dark/50 to-zyvard-charcoal/50 border-zyvard-pearl/10 rounded-3xl">
            <CardContent className="p-12 text-center">
              <div className="text-6xl text-zyvard-purple-light mb-6">"</div>
              <blockquote className="text-2xl text-zyvard-pearl mb-8 italic">
                {product.testimonial.quote}
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-zyvard-purple-accent to-zyvard-purple-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{product.testimonial.author.charAt(0)}</span>
                </div>
                <div className="text-left">
                  <div className="text-zyvard-pearl font-bold">{product.testimonial.author}</div>
                  <div className="text-zyvard-pearl/70">{product.testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-zyvard-pearl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zyvard-pearl/70 mb-8">
            Join thousands of users who trust {product.name} to secure their digital lives.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-zyvard-purple-accent to-zyvard-purple-light hover:from-zyvard-purple-light hover:to-zyvard-purple-accent text-zyvard-pearl px-12 py-6 text-xl rounded-2xl transition-all duration-300 group"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </section>
    </div>
  );
}