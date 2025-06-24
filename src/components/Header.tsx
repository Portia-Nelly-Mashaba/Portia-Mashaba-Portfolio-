
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
  History
} from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PM</span>
          </div>
          <span className="font-semibold text-slate-900 dark:text-white">Portfolio Dashboard</span>
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
        <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-300">
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-300">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-300">
          <History className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleTheme}
          className="text-slate-600 dark:text-slate-300"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-300">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
