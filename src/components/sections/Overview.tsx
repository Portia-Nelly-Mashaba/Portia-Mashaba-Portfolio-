
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
    { label: 'Years Experience', value: '4+', icon: Calendar },
    { label: 'Projects Completed', value: '15+', icon: Trophy },
    { label: 'Technologies', value: '25+', icon: Star },
    { label: 'Happy Clients', value: '50+', icon: Briefcase }
  ];

  const highlights = [
    "Full Stack Developer with 4+ years of comprehensive experience",
    "Proficient in React.js, Angular, Python/Django, and modern web technologies",
    "Experience in agile environments and cross-functional team collaboration",
    "Currently pursuing advanced certifications through ALX ProDev Program",
    "Strong background in database design, API development, and cloud technologies"
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="bg-gradient-to-r from-violet-600 to-cyan-600 text-white">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm Portia Mashaba
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Full Stack Developer & Problem Solver
              </p>
              <p className="text-lg opacity-80 leading-relaxed mb-6">
                Passionate about creating innovative web solutions that bridge the gap between 
                cutting-edge technology and exceptional user experiences. I specialize in building 
                scalable applications that make a real impact.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button className="bg-white text-violet-600 hover:bg-slate-100">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-6xl font-bold">PM</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon className="h-8 w-8 mx-auto mb-3 text-violet-500" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Contact Info & Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-violet-500" />
              <div>
                <div className="font-medium text-slate-900 dark:text-white">Location</div>
                <div className="text-slate-600 dark:text-slate-400">Ivory Park, Midrand, South Africa</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-violet-500" />
              <div>
                <div className="font-medium text-slate-900 dark:text-white">Email</div>
                <div className="text-slate-600 dark:text-slate-400">pnpnelly@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-violet-500" />
              <div>
                <div className="font-medium text-slate-900 dark:text-white">Phone</div>
                <div className="text-slate-600 dark:text-slate-400">0815194600</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Key Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Star className="h-4 w-4 text-violet-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
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
