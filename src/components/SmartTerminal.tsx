import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Terminal, ChevronRight } from 'lucide-react';

interface TerminalLine {
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp?: Date;
}

interface PortfolioData {
  about: string[];
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  projects: {
    name: string;
    description: string;
    tech: string[];
    status: string;
  }[];
  experience: {
    company: string;
    role: string;
    period: string;
    achievements: string[];
  }[];
  education: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
}

const SmartTerminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: 'Welcome to Portia\'s Smart-AI Terminal! 🚀\nType "help" to see available commands or explore with bash-like commands.\n',
      timestamp: new Date()
    }
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [currentPath, setCurrentPath] = useState('/');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const portfolioData: PortfolioData = {
    about: [
      'Dynamic and detail-oriented Full-stack and Mobile Developer with proven experience',
      'Building cross-platform mobile applications using Flutter & Dart, React Native, and .NET (C#)',
      'Expertise in frontend development (Angular, React.js) and backend integration (PHP, Laravel, Django, Flask, Python)',
      'Strong background in SQL database design, cloud solutions (AWS), and rigorous testing practices',
      'Passionate about modern frameworks, mobile-first innovation, and solving complex technical challenges'
    ],
    skills: {
      frontend: ['React.js', 'Angular', 'JavaScript/TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Vue.js'],
      backend: ['Python/Django', 'PHP/Laravel', 'Node.js', 'REST APIs', 'GraphQL'],
      database: ['SQL/MySQL', 'NoSQL/MongoDB', 'Firebase', 'PostgreSQL', 'Redis'],
      tools: ['Git/GitHub', 'Docker', 'AWS', 'Linux', 'Kubernetes', 'CI/CD Pipelines']
    },
    projects: [
      {
        name: 'portfolio-evidence',
        description: 'A comprehensive showcase of development projects featuring modern UI/UX design',
        tech: ['React.js', 'Tailwind CSS', 'Vercel'],
        status: 'Live Production'
      },
      {
        name: 'ecommerce-dashboard',
        description: 'Admin dashboard for e-commerce management with real-time analytics',
        tech: ['Angular', 'Laravel', 'MySQL'],
        status: 'Live Production'
      },
      {
        name: 'hotel-booking-app',
        description: 'Full-stack hotel booking platform with secure payment integration',
        tech: ['React.js', 'Firebase', 'Stripe API'],
        status: 'Live Production'
      }
    ],
    experience: [
      {
        company: 'Siyakha Consulting',
        role: 'Full Stack Developer',
        period: 'May 2024 - November 2025',
        achievements: [
          'Full-stack development using Laravel, PHP, and SQL',
          'Integrated APIs for complex business solutions',
          'DevOps practices including CI/CD pipeline setup',
          'Worked within Agile team using Git and Jira'
        ]
      },
      {
        company: 'Mlab CodeTribe',
        role: 'Mobile & Web Developer',
        period: 'July 2024 - March 2025',
        achievements: [
          'Developed full-stack applications using React.js, React Native, Node.js, and Firebase',
          'REST API integrations and microservices-based design',
          'PWA development for responsive and scalable solutions'
        ]
      },
      {
        company: 'Tshikamisava Holdings',
        role: 'Freelance Web & Mobile Developer',
        period: 'November 2020 - April 2024',
        achievements: [
          'Designed full-stack web and mobile solutions',
          'Integrated REST APIs and SDKs',
          'Worked with SQL/NoSQL databases and microservices'
        ]
      }
    ],
    education: [
      'ProDev Back-End Developer - ALX Africa (2025)',
      'Diploma in Information Technology - UNISA (2025-2027)',
      'Software Development Certificate - Power Learn Project (2022-2023)',
      'NCV Level 4: Information Technology and Computer Science - Ekurhuleni West College (2011-2013)',
      'Matric (Grade 12) Certificate - Bokamoso Secondary School (2004-2008)'
    ],
    contact: {
      email: 'pnpnelly@gmail.com',
      linkedin: 'linkedin.com/in/portia-mashaba-674a68131',
      github: 'github.com/Portia-Nelly-Mashaba',
      location: '10695 Ivory Park, Midrand, 1685, South Africa'
    }
  };

  const commands = {
    help: () => `Available commands:
  ls [directory]     - List contents (try: ls projects, ls skills)
  cd <directory>     - Change directory
  cat <file>         - Display file contents
  pwd               - Show current directory
  clear             - Clear terminal
  whoami            - Show about me
  contact           - Display contact information
  tree              - Show directory structure
  
  Directories: /, /projects, /skills, /experience, /education
  Files: about.txt, resume.pdf, contact.txt`,

    ls: (args: string[]) => {
      const path = args[0] || currentPath;
      switch (path) {
        case '/':
        case '~':
          return 'about.txt  projects/  skills/  experience/  education/  contact.txt  resume.pdf';
        case 'projects':
        case '/projects':
          return portfolioData.projects.map(p => `${p.name}/`).join('  ');
        case 'skills':
        case '/skills':
          return 'frontend/  backend/  database/  tools/';
        case 'experience':
        case '/experience':
          return portfolioData.experience.map((exp, i) => `${exp.company.toLowerCase().replace(/\s+/g, '-')}.txt`).join('  ');
        case 'education':
        case '/education':
          return 'certifications.txt  courses.txt';
        default:
          return `ls: cannot access '${path}': No such file or directory`;
      }
    },

    cd: (args: string[]) => {
      if (!args[0]) return currentPath;
      const path = args[0];
      const validPaths = ['/', '~', 'projects', 'skills', 'experience', 'education'];
      if (validPaths.includes(path) || validPaths.includes(path.replace('/', ''))) {
        const newPath = path === '~' ? '/' : path.startsWith('/') ? path : `/${path}`;
        setCurrentPath(newPath);
        return `Changed directory to ${newPath}`;
      }
      return `cd: ${path}: No such file or directory`;
    },

    cat: (args: string[]) => {
      if (!args[0]) return 'cat: missing file operand';
      const file = args[0];
      
      switch (file) {
        case 'about.txt':
          return portfolioData.about.join('\n');
        case 'contact.txt':
          return `Email: ${portfolioData.contact.email}
LinkedIn: ${portfolioData.contact.linkedin}
GitHub: ${portfolioData.contact.github}
Location: ${portfolioData.contact.location}`;
        case 'resume.pdf':
          return 'Opening resume... (This would typically open a PDF viewer)\nDownload available at: /downloads/portia-resume.pdf';
        default:
          if (portfolioData.projects.find(p => p.name === file.replace('/', ''))) {
            const project = portfolioData.projects.find(p => p.name === file.replace('/', ''));
            return `${project?.name}
${project?.description}
Tech Stack: ${project?.tech.join(', ')}
Status: ${project?.status}`;
          }
          return `cat: ${file}: No such file or directory`;
      }
    },

    pwd: () => currentPath,

    clear: () => {
      setHistory([]);
      return '';
    },

    whoami: () => portfolioData.about.join('\n'),

    contact: () => `📧 Email: ${portfolioData.contact.email}
🔗 LinkedIn: ${portfolioData.contact.linkedin}
💻 GitHub: ${portfolioData.contact.github}
📍 Location: ${portfolioData.contact.location}`,

    tree: () => `📁 /
├── 📄 about.txt
├── 📄 contact.txt
├── 📄 resume.pdf
├── 📁 projects/
│   ├── 📁 portfolio-evidence/
│   ├── 📁 ecommerce-dashboard/
│   └── 📁 hotel-booking-app/
├── 📁 skills/
│   ├── 📁 frontend/
│   ├── 📁 backend/
│   ├── 📁 database/
│   └── 📁 tools/
├── 📁 experience/
│   ├── 📄 mlab-codetribe.txt
│   └── 📄 aveng-trident-steel.txt
└── 📁 education/
    ├── 📄 certifications.txt
    └── 📄 courses.txt`
  };

  const executeCommand = (input: string) => {
    const [cmd, ...args] = input.trim().split(' ');
    const command = cmd.toLowerCase();

    // Add command to history
    setHistory(prev => [...prev, {
      type: 'command',
      content: `portia@terminal:${currentPath}$ ${input}`,
      timestamp: new Date()
    }]);

    // Execute command
    if (commands[command as keyof typeof commands]) {
      const output = commands[command as keyof typeof commands](args);
      if (output && command !== 'clear') {
        setHistory(prev => [...prev, {
          type: 'output',
          content: output,
          timestamp: new Date()
        }]);
      }
    } else if (input.trim()) {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `bash: ${command}: command not found\nType 'help' for available commands.`,
        timestamp: new Date()
      }]);
    }

    setCurrentCommand('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Input is disabled - no auto-focus needed

  return (
    <Card className="h-full bg-slate-900 border-slate-700 text-green-400 font-mono">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-green-400 text-sm">
            <Terminal className="h-4 w-4 mr-2" />
            Smart-AI Terminal
          </CardTitle>
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 text-xs">
            Coming Soon
          </Badge>
        </div>
        <p className="text-xs text-slate-400 mt-2">This feature is under development and will be modified</p>
      </CardHeader>
      
      <CardContent className="p-0 h-[calc(100%-4rem)]">
        <ScrollArea className="h-full p-4" ref={scrollRef}>
          <div className="space-y-2 min-h-full">
            {history.map((line, index) => (
              <div key={index} className={`text-sm leading-relaxed ${
                line.type === 'command' ? 'text-green-400 font-bold' : 
                line.type === 'error' ? 'text-red-400' : 'text-slate-300'
              }`}>
                <pre className="whitespace-pre-wrap font-mono">{line.content}</pre>
              </div>
            ))}
            
            {/* Current command line - Disabled */}
            <div className="flex items-center text-green-400 font-bold opacity-50">
              <span className="text-sm mr-2">portia@terminal:{currentPath}$</span>
              <div className="flex-1 relative">
                <Input
                  ref={inputRef}
                  value=""
                  disabled
                  readOnly
                  className="bg-transparent border-none text-green-400 font-mono text-sm p-0 focus:ring-0 focus:outline-none cursor-not-allowed"
                  placeholder="Terminal disabled - Coming Soon"
                  autoComplete="off"
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-green-400/50"></div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SmartTerminal;