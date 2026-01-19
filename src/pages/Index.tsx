
import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Overview from '@/components/sections/Overview';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import SmartTerminal from '@/components/SmartTerminal';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [skillsTab, setSkillsTab] = useState('frontend');

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'skills':
        return <Skills activeTab={skillsTab} />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'certifications':
        return <Certifications />;
      default:
        return <Overview />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex w-full">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} setSkillsTab={setSkillsTab} />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <div className="flex-1 flex">
            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
              {renderContent()}
            </div>

            {/* Right Sidebar - Smart Terminal */}
            <div className="w-80 border-l border-slate-200 dark:border-slate-700">
              <SmartTerminal />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
