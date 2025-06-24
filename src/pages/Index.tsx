import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Overview from '@/components/sections/Overview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  Code2, 
  Database, 
  Globe, 
  MessageSquare, 
  Briefcase, 
  GraduationCap,
  Star,
  Github,
  Mail,
  Phone,
  MapPin,
  Send,
  Bot,
  TrendingUp,
  Calendar,
  Award,
  ExternalLink,
  Building,
  Clock,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Portia's AI assistant. Ask me anything about her technical expertise, work experience, or career journey!"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { type: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "Portia is a skilled Full Stack Developer with 4+ years of comprehensive experience. She's proficient in React.js, Angular, Python/Django, and has worked across multiple industries.",
        "Her technical expertise spans the entire development stack - from frontend frameworks like React and Angular to backend technologies including Python, Django, PHP, and Laravel.",
        "Currently pursuing advanced certifications through ALX's ProDev Back-End Developer program, focusing on microservices, CI/CD pipelines, and security best practices.",
        "Portia has hands-on experience in agile environments, having worked with cross-functional teams at companies like Mlab CodeTribe and Aveng Trident Steel.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: 'bot', content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const technicalSkills = [
    { 
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 92, experience: '3+ years' },
        { name: 'Angular', level: 88, experience: '2+ years' },
        { name: 'JavaScript/TypeScript', level: 90, experience: '4+ years' },
        { name: 'HTML/CSS', level: 95, experience: '5+ years' }
      ]
    },
    { 
      category: 'Backend Development',
      skills: [
        { name: 'Python/Django', level: 90, experience: '3+ years' },
        { name: 'PHP/Laravel', level: 85, experience: '3+ years' },
        { name: 'Node.js', level: 80, experience: '2+ years' },
        { name: 'REST APIs', level: 88, experience: '3+ years' }
      ]
    },
    { 
      category: 'Database & Tools',
      skills: [
        { name: 'SQL/MySQL', level: 92, experience: '4+ years' },
        { name: 'NoSQL', level: 78, experience: '2+ years' },
        { name: 'Git/Jira', level: 85, experience: '4+ years' },
        { name: 'Firebase', level: 82, experience: '2+ years' }
      ]
    }
  ];

  const workExperience = [
    {
      company: 'Mlab CodeTribe',
      role: 'Mobile & Web Developer (Trainee)',
      period: 'May 2024 - May 2025',
      location: 'Tembisa',
      type: 'Current Position',
      description: 'Developing full-stack applications using modern frameworks including React.js, React Native, Node.js, and Firebase. Working extensively with REST APIs and practicing agile methodologies.',
      achievements: [
        'Built and deployed multiple full-stack applications',
        'Mastered React Native for mobile development',
        'Implemented agile practices including sprints and stand-ups',
        'Gained expertise in Firebase integration'
      ],
      tech: ['React.js', 'React Native', 'Node.js', 'Firebase', 'REST APIs']
    },
    {
      company: 'Aveng Trident Steel',
      role: 'Frontend & SQL Developer | Software Tester',
      period: 'July 2024 - March 2025',
      location: 'Germiston',
      type: 'Contract',
      description: 'Focused on Angular development, database optimization, and comprehensive testing strategies to improve system performance and reliability.',
      achievements: [
        'Developed responsive Angular interfaces',
        'Optimized SQL queries improving performance by 40%',
        'Reduced system bugs through comprehensive testing',
        'Enhanced UI responsiveness across platforms'
      ],
      tech: ['Angular', 'SQL', 'TypeScript', 'Testing', 'Performance Optimization']
    },
    {
      company: 'Siyakha Consulting',
      role: 'Digital Developer Intern',
      period: 'November 2020 - June 2023',
      location: 'Sandton',
      type: 'Internship',
      description: 'Comprehensive full-stack development experience using PHP and Laravel, with focus on quality assurance and collaborative development practices.',
      achievements: [
        'Completed full-stack development projects',
        'Performed extensive QA testing and bug resolution',
        'Participated in code reviews and team collaboration',
        'Ensured cross-browser compatibility'
      ],
      tech: ['Laravel', 'PHP', 'Git', 'Jira', 'QA Testing']
    }
  ];

  const certifications = [
    { 
      name: 'ProDev Back-End Developer', 
      provider: 'ALX', 
      year: '2025',
      status: 'In Progress',
      focus: 'Advanced Python, Microservices, CI/CD, Security'
    },
    { 
      name: 'Higher Certificate in Software Development', 
      provider: 'STADIO Higher Education', 
      year: '2025-2026',
      status: 'Enrolled',
      focus: 'Software Development & System Design'
    },
    { 
      name: 'Full Stack Application Development', 
      provider: 'Power Learn Project', 
      year: '2022-2023',
      status: 'Completed',
      focus: 'Python, Django, Database Design'
    },
    { 
      name: 'MERN Stack Development', 
      provider: 'Udemy', 
      year: '2023',
      status: 'Completed',
      focus: 'MongoDB, Express, React, Node.js'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Portfolio of Evidence',
      description: 'A comprehensive showcase of development projects featuring modern UI/UX design, responsive layouts, and performance optimization.',
      url: 'portfolio-of-evidence-teal.vercel.app',
      tech: ['React.js', 'Tailwind CSS', 'Vercel', 'Responsive Design'],
      status: 'Live Production',
      metrics: {
        performance: '98%',
        accessibility: '95%',
        seo: '100%'
      },
      features: [
        'Responsive design across all devices',
        'Optimized performance and loading times',
        'Modern UI/UX implementation',
        'Cross-browser compatibility'
      ]
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '4+', icon: Calendar, color: 'text-blue-500' },
    { label: 'Projects Completed', value: '25+', icon: CheckCircle, color: 'text-green-500' },
    { label: 'Technologies Mastered', value: '15+', icon: Code2, color: 'text-purple-500' },
    { label: 'Certifications', value: '6+', icon: Award, color: 'text-orange-500' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'skills':
        return (
          <div className="space-y-6">
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Frontend</h3>
                    <div className="space-y-3">
                      {['React.js', 'Angular', 'JavaScript/TypeScript', 'HTML/CSS'].map((skill) => (
                        <div key={skill} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-sm text-slate-700 dark:text-slate-300">{skill}</span>
                            <span className="text-xs text-slate-500">90%</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Add more skill categories */}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return <Overview />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <div className="flex-1 flex">
            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
              {renderContent()}
            </div>

            {/* Right Sidebar - AI Chat */}
            <div className="w-80 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700">
              <div className="h-full flex flex-col">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-900 dark:text-white flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-violet-500" />
                    AI Assistant
                  </h3>
                </div>
                
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-violet-600 text-white' 
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                        }`}>
                          <div className="flex items-start space-x-2">
                            {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-violet-600" />}
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-4 w-4 text-violet-600" />
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about Portia's experience..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="border-slate-300 dark:border-slate-600 focus:ring-violet-500"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-violet-600 hover:bg-violet-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
