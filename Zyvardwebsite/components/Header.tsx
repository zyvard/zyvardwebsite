import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Menu, X, User, LogIn, UserPlus, Mail, Instagram, Youtube, ExternalLink, Phone, MapPin } from 'lucide-react';

// Import the header logo image
import headerLogo from 'figma:asset/a5ab8f589e8a912fd9f9285b3749247b2f5f1bc3.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '', confirmPassword: '' });

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in:', signInData);
    // Handle sign in logic here
    setIsUserDialogOpen(false);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Sign up:', signUpData);
    // Handle sign up logic here
    setIsUserDialogOpen(false);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zyvardholdings/',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCFEiYn5N01iWZ3xP0nlTcSw',
      icon: Youtube,
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/ZyvardHoldings',
      icon: ExternalLink,
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zyvard-charcoal/95 backdrop-blur-md border-b border-zyvard-pearl/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Clickable to refresh page */}
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick}
              className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              title="Refresh page"
            >
              <img 
                src={headerLogo} 
                alt="Zyvard" 
                className="w-full h-full object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-zyvard-pearl/80 hover:text-zyvard-purple-accent transition-colors duration-300">
              About
            </a>
            <a href="#products" className="text-zyvard-pearl/80 hover:text-zyvard-purple-accent transition-colors duration-300">
              Products
            </a>
            <a href="#contact" className="text-zyvard-pearl/80 hover:text-zyvard-purple-accent transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Contact Us Dialog */}
            <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="hidden md:flex border-zyvard-purple-accent/50 text-zyvard-purple-accent hover:bg-zyvard-purple-accent/10 hover:border-zyvard-purple-accent transition-all duration-300"
                >
                  Contact Us
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg bg-zyvard-charcoal border-zyvard-purple-accent/20">
                <DialogHeader className="text-center">
                  <DialogTitle className="text-2xl text-zyvard-purple-accent">Get In Touch</DialogTitle>
                  <DialogDescription className="text-zyvard-pearl/70">
                    Connect with us through our social channels or reach out directly
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-8 mt-6">
                  {/* Direct Contact */}
                  <div className="space-y-4">
                    <h3 className="text-lg text-zyvard-purple-light mb-4">Direct Contact</h3>
                    
                    <div className="flex items-center space-x-4 p-4 bg-zyvard-purple-dark/30 rounded-xl border border-zyvard-purple-accent/20 hover:border-zyvard-purple-accent/40 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-r from-zyvard-purple-accent to-zyvard-purple-light rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-zyvard-pearl/80 text-sm">Email</p>
                        <a 
                          href="mailto:ceo@zyvard.com" 
                          className="text-zyvard-purple-accent hover:text-zyvard-purple-light transition-colors duration-300"
                        >
                          ceo@zyvard.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-zyvard-purple-dark/30 rounded-xl border border-zyvard-purple-accent/20">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-zyvard-pearl/80 text-sm">Phone</p>
                        <p className="text-zyvard-purple-accent">+1 (945) 261-9088</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-zyvard-purple-dark/30 rounded-xl border border-zyvard-purple-accent/20">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-zyvard-pearl/80 text-sm">Headquarters</p>
                        <p className="text-zyvard-purple-accent">11600 Audelia Rd<br />Dallas, TX 75243</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h3 className="text-lg text-zyvard-purple-light mb-4">Follow Us</h3>
                    <div className="space-y-3">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4 p-4 bg-zyvard-purple-dark/30 rounded-xl border border-zyvard-purple-accent/20 hover:border-zyvard-purple-accent/40 hover:scale-105 transition-all duration-300 group"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-zyvard-purple-accent group-hover:text-zyvard-purple-light transition-colors duration-300">
                                {social.name}
                              </p>
                              <p className="text-zyvard-pearl/60 text-sm">@ZyvardHoldings</p>
                            </div>
                            <ExternalLink className="h-4 w-4 text-zyvard-pearl/40 group-hover:text-zyvard-purple-accent transition-colors duration-300" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            {/* User Dialog */}
            <Dialog open={isUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-zyvard-pearl hover:bg-zyvard-purple-accent/10 hover:text-zyvard-purple-accent transition-all duration-300"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-zyvard-charcoal border-zyvard-purple-accent/20">
                <DialogHeader className="text-center">
                  <DialogTitle className="text-2xl text-zyvard-purple-accent">Welcome to Zyvard</DialogTitle>
                  <DialogDescription className="text-zyvard-pearl/70">
                    Sign in to your account or create a new one
                  </DialogDescription>
                </DialogHeader>
                
                <Tabs defaultValue="signin" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-zyvard-purple-dark/50">
                    <TabsTrigger 
                      value="signin" 
                      className="data-[state=active]:bg-zyvard-purple-accent data-[state=active]:text-white text-zyvard-pearl/70"
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign In
                    </TabsTrigger>
                    <TabsTrigger 
                      value="signup" 
                      className="data-[state=active]:bg-zyvard-purple-accent data-[state=active]:text-white text-zyvard-pearl/70"
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      Sign Up
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="signin" className="space-y-4 mt-6">
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signin-email" className="text-zyvard-pearl">Email</Label>
                        <Input
                          id="signin-email"
                          type="email"
                          placeholder="your@email.com"
                          value={signInData.email}
                          onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                          className="bg-zyvard-charcoal/50 border-zyvard-purple-accent/30 text-zyvard-pearl placeholder:text-zyvard-pearl/50 focus:border-zyvard-purple-accent rounded-xl"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signin-password" className="text-zyvard-pearl">Password</Label>
                        <Input
                          id="signin-password"
                          type="password"
                          placeholder="Enter your password"
                          value={signInData.password}
                          onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                          className="bg-zyvard-charcoal/50 border-zyvard-purple-accent/30 text-zyvard-pearl placeholder:text-zyvard-pearl/50 focus:border-zyvard-purple-accent rounded-xl"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-zyvard-purple-accent to-zyvard-purple-light hover:from-zyvard-purple-light hover:to-zyvard-purple-accent text-white rounded-xl"
                      >
                        Sign In
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="signup" className="space-y-4 mt-6">
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-username" className="text-zyvard-pearl">Username</Label>
                        <Input
                          id="signup-username"
                          type="text"
                          placeholder="Choose a username"
                          value={signUpData.username}
                          onChange={(e) => setSignUpData({ ...signUpData, username: e.target.value })}
                          className="bg-zyvard-charcoal/50 border-zyvard-purple-accent/30 text-zyvard-pearl placeholder:text-zyvard-pearl/50 focus:border-zyvard-purple-accent rounded-xl"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="text-zyvard-pearl">Email</Label>
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="your@email.com"
                          value={signUpData.email}
                          onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                          className="bg-zyvard-charcoal/50 border-zyvard-purple-accent/30 text-zyvard-pearl placeholder:text-zyvard-pearl/50 focus:border-zyvard-purple-accent rounded-xl"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password" className="text-zyvard-pearl">Password</Label>
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="Create a password"
                          value={signUpData.password}
                          onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                          className="bg-zyvard-charcoal/50 border-zyvard-purple-accent/30 text-zyvard-pearl placeholder:text-zyvard-pearl/50 focus:border-zyvard-purple-accent rounded-xl"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-confirm" className="text-zyvard-pearl">Confirm Password</Label>
                        <Input
                          id="signup-confirm"
                          type="password"
                          placeholder="Confirm your password"
                          value={signUpData.confirmPassword}
                          onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                          className="bg-zyvard-charcoal/50 border-zyvard-purple-accent/30 text-zyvard-pearl placeholder:text-zyvard-pearl/50 focus:border-zyvard-purple-accent rounded-xl"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-zyvard-purple-accent to-zyvard-purple-light hover:from-zyvard-purple-light hover:to-zyvard-purple-accent text-white rounded-xl"
                      >
                        Create Account
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-zyvard-pearl hover:bg-zyvard-purple-accent/10 hover:text-zyvard-purple-accent transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zyvard-pearl/10">
            <nav className="flex flex-col space-y-4 mt-4">
              <a 
                href="#about" 
                className="text-zyvard-pearl/80 hover:text-zyvard-purple-accent transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#products" 
                className="text-zyvard-pearl/80 hover:text-zyvard-purple-accent transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#contact" 
                className="text-zyvard-pearl/80 hover:text-zyvard-purple-accent transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsContactDialogOpen(true);
                  setIsMenuOpen(false);
                }}
                className="border-zyvard-purple-accent/50 text-zyvard-purple-accent hover:bg-zyvard-purple-accent/10 hover:border-zyvard-purple-accent transition-all duration-300 w-full mt-4"
              >
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}