import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-zyvard-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-zyvard-purple-accent mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-zyvard-pearl/70 max-w-3xl mx-auto">
            Ready to secure your digital future? Let's discuss how Zyvard can protect what matters most to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-zyvard-charcoal/80 border-zyvard-purple-accent/20 rounded-3xl">
            <CardHeader className="p-8">
              <CardTitle className="text-3xl text-zyvard-purple-accent mb-2">Send us a message</CardTitle>
              <CardDescription className="text-zyvard-pearl/70 text-lg">
                We'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-zyvard-pearl mb-2 block">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-zyvard-charcoal/50 border-zyvard-purple-accent/30 text-zyvard-pearl placeholder:text-zyvard-pearl/50 focus:border-zyvard-purple-accent rounded-xl h-12"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-zyvard-pearl mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-zyvard-charcoal/50 border-zyvard-purple-accent/30 text-zyvard-pearl placeholder:text-zyvard-pearl/50 focus:border-zyvard-purple-accent rounded-xl h-12"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-zyvard-pearl mb-2 block">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or how we can help..."
                    className="bg-zyvard-charcoal/50 border-zyvard-purple-accent/30 text-zyvard-pearl placeholder:text-zyvard-pearl/50 focus:border-zyvard-purple-accent rounded-xl min-h-[120px] resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-zyvard-purple-accent to-zyvard-purple-light hover:from-zyvard-purple-light hover:to-zyvard-purple-accent text-zyvard-pearl py-6 rounded-xl transition-all duration-300 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-zyvard-charcoal/80 border-zyvard-purple-accent/20 rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zyvard-purple-accent to-zyvard-purple-light rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zyvard-purple-accent mb-2">Headquarters</h3>
                    <p className="text-zyvard-pearl/70">
                      Zyvard Technologies Inc.<br />
                      11600 Audelia Rd<br />
                      Dallas, TX 75243
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zyvard-charcoal/80 border-zyvard-purple-accent/20 rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zyvard-purple-accent to-zyvard-purple-light rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zyvard-purple-accent mb-2">Phone</h3>
                    <p className="text-zyvard-pearl/70">
                      +1 (945)-261-9088
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zyvard-charcoal/80 border-zyvard-purple-accent/20 rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zyvard-purple-accent to-zyvard-purple-light rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zyvard-purple-accent mb-2">Email</h3>
                    <p className="text-zyvard-pearl/70">
                      ceo@zyvard.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zyvard-charcoal/80 border-zyvard-purple-accent/20 rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zyvard-purple-accent to-zyvard-purple-light rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zyvard-purple-accent mb-2">Business Hours</h3>
                    <p className="text-zyvard-pearl/70">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="bg-zyvard-charcoal/80 border-zyvard-purple-accent/20 rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-zyvard-purple-accent/20 to-zyvard-purple-light/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-zyvard-pearl/50 mx-auto mb-4" />
                  <p className="text-zyvard-pearl/70 text-lg">Interactive Map Coming Soon</p>
                  <p className="text-zyvard-pearl/60 text-sm mt-2">11600 Audelia Rd, Dallas, TX 75243</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}