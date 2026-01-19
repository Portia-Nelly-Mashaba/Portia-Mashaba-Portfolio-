
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Settings, 
  Folder,
  FileText,
  Award,
  MapPin,
  Mail,
  Phone,
  Github,
  ExternalLink,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Layers
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  setSkillsTab?: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, setSkillsTab }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'skills', label: 'Technical Skills', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Globe },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/documents/Portia Mashaba Resume.pdf';
    link.download = 'Portia Mashaba Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillCategories = [
    { 
      name: 'Frontend', 
      count: 8, 
      color: 'bg-blue-500',
      icon: Code2,
      description: 'React.js, Angular, HTML/CSS, JavaScript, PWA, Tailwind, Bootstrap',
      tab: 'frontend'
    },
    { 
      name: 'Backend', 
      count: 6, 
      color: 'bg-green-500',
      icon: Layers,
      description: 'Python/Django, PHP/Laravel, Node.js, .NET (C#), REST APIs',
      tab: 'backend'
    },
    { 
      name: 'Mobile', 
      count: 5, 
      color: 'bg-cyan-500',
      icon: Smartphone,
      description: 'React Native, Flutter/Dart, .NET Mobile, Mobile APIs',
      tab: 'mobile'
    },
    { 
      name: 'Database', 
      count: 6, 
      color: 'bg-purple-500',
      icon: Database,
      description: 'SQL/MySQL, PostgreSQL, NoSQL/MongoDB, SSRS, Database Design',
      tab: 'database'
    },
    { 
      name: 'Cloud/DevOps', 
      count: 6, 
      color: 'bg-orange-500',
      icon: Cloud,
      description: 'AWS, Docker, Kubernetes, CI/CD, Git/GitHub, Firebase',
      tab: 'devops'
    },
    { 
      name: 'Testing & QA', 
      count: 6, 
      color: 'bg-red-500',
      icon: Shield,
      description: 'Unit, Integration, Functional, PyTest, QA Testing, Bug Tracking',
      tab: 'testing'
    },
  ];

  const handleCategoryClick = (categoryName: string, tab: string) => {
    setActiveSection('skills');
    if (setSkillsTab) {
      setSkillsTab(tab);
    }
  };

  return (
    <div className="w-64 h-full bg-slate-900 dark:bg-slate-950 border-r border-slate-700 dark:border-slate-800 flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-slate-700 dark:border-slate-800">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-violet-600 text-white font-bold">PM</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-white font-semibold">Portia Mashaba</h2>
            <p className="text-slate-400 text-sm">Full Stack Developer</p>
          </div>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-slate-400">
            <MapPin className="h-3 w-3 mr-2" />
            10695 Ivory Park, Midrand, 1685
          </div>
          <div className="flex items-center text-slate-400">
            <Mail className="h-3 w-3 mr-2" />
            pnpnelly@gmail.com
          </div>
          <div className="flex items-center text-slate-400">
            <Phone className="h-3 w-3 mr-2" />
            0781526964
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <div className="space-y-1 mb-6">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`w-full justify-start text-left h-9 ${
                activeSection === item.id 
                  ? 'bg-violet-600 text-white hover:bg-violet-700' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon className="h-4 w-4 mr-3" />
              {item.label}
            </Button>
          ))}
        </div>

        <Separator className="bg-slate-700 mb-4" />

        {/* Skills Categories Section */}
        <div className="mb-6">
          <h3 className="text-slate-400 text-xs uppercase tracking-wider mb-2">Tech Stack Overview</h3>
          <div className="space-y-1">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div 
                  key={category.name} 
                  className="flex items-center justify-between text-slate-300 hover:text-white cursor-pointer group p-1.5 rounded hover:bg-slate-800 transition-all"
                  onClick={() => handleCategoryClick(category.name, category.tab)}
                  title={category.description}
                >
                  <div className="flex items-center flex-1 min-w-0">
                    <div className={`w-2 h-2 rounded-full ${category.color} mr-2 flex-shrink-0 group-hover:scale-110 transition-transform`}></div>
                    <Icon className="h-3.5 w-3.5 mr-2 text-slate-400 group-hover:text-white transition-colors flex-shrink-0" />
                    <span className="text-sm font-medium group-hover:text-white transition-colors">{category.name}</span>
                  </div>
                  <Badge variant="secondary" className="bg-slate-800 text-slate-300 text-xs flex-shrink-0 ml-2 group-hover:bg-slate-700 transition-colors">
                    {category.count}
                  </Badge>
                </div>
              );
            })}
          </div>
          <div className="mt-2 pt-2 border-t border-slate-700">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Total Technologies</span>
              <Badge variant="outline" className="bg-violet-900/30 border-violet-700 text-violet-300 text-xs font-semibold">
                37+
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700 mb-4" />

        {/* Quick Actions */}
        <div>
          <h3 className="text-slate-400 text-xs uppercase tracking-wider mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start h-8 text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={handleDownloadCV}
            >
              <FileText className="h-3 w-3 mr-2" />
              <span className="text-xs">Download CV</span>
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start h-8 text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => window.open('https://github.com/Portia-Nelly-Mashaba', '_blank')}
            >
              <Github className="h-3 w-3 mr-2" />
              <span className="text-xs">GitHub Profile</span>
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start h-8 text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => window.open('https://www.linkedin.com/in/portia-mashaba-674a68131/', '_blank')}
            >
              <ExternalLink className="h-3 w-3 mr-2" />
              <span className="text-xs">LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
