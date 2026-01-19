
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from './ThemeProvider';
import { 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  Settings,
  Plus,
  History,
  Download,
  Github,
  Linkedin
} from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/documents/Portia Mashaba Resume.pdf';
    link.download = 'Portia Mashaba Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PM</span>
          </div>
          <span className="font-semibold text-slate-900 dark:text-white">Portia Mashaba Portfolio</span>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search skills, projects, experience..."
            className="pl-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:ring-violet-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-slate-600 dark:text-slate-300"
          onClick={handleDownloadCV}
          title="Download CV"
        >
          <Download className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-slate-600 dark:text-slate-300"
          onClick={() => window.open('https://github.com/Portia-Nelly-Mashaba', '_blank')}
          title="GitHub Profile"
        >
          <Github className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-slate-600 dark:text-slate-300"
          onClick={() => window.open('https://www.linkedin.com/in/portia-mashaba-674a68131/', '_blank')}
          title="LinkedIn Profile"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleTheme}
          className="text-slate-600 dark:text-slate-300"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-300" title="Settings">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
