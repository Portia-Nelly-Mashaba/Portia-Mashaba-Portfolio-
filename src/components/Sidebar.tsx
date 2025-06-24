
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
  ExternalLink
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'skills', label: 'Technical Skills', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Globe },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
  ];

  const folders = [
    { name: 'Frontend', count: 8, color: 'bg-blue-500' },
    { name: 'Backend', count: 6, color: 'bg-green-500' },
    { name: 'Database', count: 4, color: 'bg-purple-500' },
    { name: 'Testing', count: 3, color: 'bg-orange-500' },
  ];

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
            Ivory Park, Midrand
          </div>
          <div className="flex items-center text-slate-400">
            <Mail className="h-3 w-3 mr-2" />
            pnpnelly@gmail.com
          </div>
          <div className="flex items-center text-slate-400">
            <Phone className="h-3 w-3 mr-2" />
            0815194600
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

        {/* Folders Section */}
        <div className="mb-6">
          <h3 className="text-slate-400 text-xs uppercase tracking-wider mb-3">Skills Categories</h3>
          <div className="space-y-2">
            {folders.map((folder) => (
              <div key={folder.name} className="flex items-center justify-between text-slate-300 hover:text-white cursor-pointer group">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full ${folder.color} mr-3`}></div>
                  <Folder className="h-4 w-4 mr-2" />
                  <span className="text-sm">{folder.name}</span>
                </div>
                <Badge variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                  {folder.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-slate-700 mb-4" />

        {/* Quick Actions */}
        <div>
          <h3 className="text-slate-400 text-xs uppercase tracking-wider mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start h-8 text-slate-300 hover:text-white hover:bg-slate-800">
              <FileText className="h-3 w-3 mr-2" />
              <span className="text-xs">Download CV</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start h-8 text-slate-300 hover:text-white hover:bg-slate-800">
              <Github className="h-3 w-3 mr-2" />
              <span className="text-xs">GitHub Profile</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start h-8 text-slate-300 hover:text-white hover:bg-slate-800">
              <ExternalLink className="h-3 w-3 mr-2" />
              <span className="text-xs">Live Portfolio</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
