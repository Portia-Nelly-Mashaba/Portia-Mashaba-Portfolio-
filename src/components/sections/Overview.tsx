
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CodingJourney from '@/components/CodingJourney';
import SkillsRadar from '@/components/SkillsRadar';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Trophy,
  Briefcase,
  GraduationCap,
  Star
} from 'lucide-react';

const Overview: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: Calendar },
    { label: 'Projects Completed', value: 'Multiple', icon: Trophy },
    { label: 'Technologies', value: '25+', icon: Star },
    { label: 'Certifications', value: '7+', icon: Briefcase }
  ];

  const highlights = [
    "Dynamic and detail-oriented Full-stack and Mobile Developer with proven experience",
    "Building cross-platform mobile applications using Flutter & Dart, React Native, and .NET (C#)",
    "Expertise in frontend development (Angular, React.js) and backend integration (PHP, Laravel, Django, Flask, Python)",
    "Strong background in SQL database design, cloud solutions (AWS), and rigorous testing practices",
    "Passionate about modern frameworks, mobile-first innovation, and solving complex technical challenges"
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/documents/Portia Mashaba Resume.pdf';
    link.download = 'Portia Mashaba Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="bg-gradient-to-br from-primary via-accent to-accent-secondary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <CardContent className="p-8 relative">
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 mb-4 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="text-accent">Portia</span> Mashaba
              </h1>
              <p className="text-xl mb-6 opacity-90 font-medium">
                Full-Stack Developer & Mobile Developer
              </p>
              <p className="text-lg opacity-80 leading-relaxed mb-8 max-w-2xl">
                Dynamic and detail-oriented Full-stack and Mobile Developer with proven experience in building 
                cross-platform mobile applications and scalable web solutions. Passionate about modern frameworks, 
                mobile-first innovation, and solving complex technical challenges.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="bg-white text-primary hover:bg-slate-100 hover:scale-105 transition-all shadow-lg"
                  onClick={handleDownloadCV}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => window.open('https://github.com/Portia-Nelly-Mashaba', '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub Profile
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => window.open('https://www.linkedin.com/in/portia-mashaba-674a68131/', '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                  <div className="text-6xl font-bold bg-gradient-to-br from-white to-accent bg-clip-text text-transparent">PM</div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-accent to-accent-secondary rounded-full opacity-75 blur-xl"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colors = ['text-primary', 'text-accent', 'text-accent-secondary', 'text-primary'];
          const bgColors = ['bg-primary/10', 'bg-accent/10', 'bg-accent-secondary/10', 'bg-primary/10'];
          return (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 rounded-full ${bgColors[index]} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`h-6 w-6 ${colors[index]}`} />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Contact Info & Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              Let's Connect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-section-background/50">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">Location</div>
                <div className="text-muted-foreground">10695 Ivory Park, Midrand, 1685, South Africa</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-section-background/50">
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <div className="font-medium text-foreground">Email</div>
                <a href="mailto:pnpnelly@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  pnpnelly@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-section-background/50">
              <Phone className="h-5 w-5 text-accent-secondary" />
              <div>
                <div className="font-medium text-foreground">Phone</div>
                <a href="tel:0781526964" className="text-muted-foreground hover:text-primary transition-colors">
                  0781526964
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://github.com/Portia-Nelly-Mashaba', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open('https://www.linkedin.com/in/portia-mashaba-674a68131/', '_blank')}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center">
              <Star className="h-5 w-5 mr-2 text-accent" />
              Why Work With Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-section-background/30 transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Skills Radar */}
      <SkillsRadar />

      {/* Coding Journey Timeline */}
      <CodingJourney />
    </div>
  );
};

export default Overview;
