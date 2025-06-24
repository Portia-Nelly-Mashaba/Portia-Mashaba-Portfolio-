
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  Code2, 
  Database, 
  Globe, 
  MessageSquare, 
  User, 
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
  Eye,
  Download,
  Calendar,
  Award,
  Zap,
  Rocket,
  Heart,
  Coffee
} from 'lucide-react';

const Index = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Portia's AI assistant. Ask me anything about her experience, skills, or projects!"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const skills = [
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'Angular', level: 85, category: 'Frontend' },
    { name: 'JavaScript/TypeScript', level: 88, category: 'Frontend' },
    { name: 'Python', level: 92, category: 'Backend' },
    { name: 'Django', level: 87, category: 'Backend' },
    { name: 'PHP/Laravel', level: 83, category: 'Backend' },
    { name: 'SQL/MySQL', level: 90, category: 'Database' },
    { name: 'NoSQL', level: 78, category: 'Database' },
    { name: 'Git/Jira', level: 85, category: 'Tools' },
    { name: 'Testing (Unit/Integration)', level: 82, category: 'QA' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Portfolio of Evidence',
      description: 'A comprehensive portfolio showcasing development projects and achievements',
      url: 'portfolio-of-evidence-teal.vercel.app',
      tech: ['React.js', 'Tailwind CSS', 'Vercel'],
      status: 'Live',
      image: '🌟'
    }
  ];

  const experiences = [
    {
      company: 'Mlab CodeTribe',
      role: 'Mobile & Web Developer (Trainee)',
      period: 'May 2024 - May 2025',
      location: 'Tembisa',
      description: 'Full-stack development with React.js, React Native, Node.js, and Firebase. Worked with REST APIs and agile development practices.',
      tech: ['React.js', 'React Native', 'Node.js', 'Firebase']
    },
    {
      company: 'Aveng Trident Steel',
      role: 'Frontend & SQL Developer | Software Tester',
      period: 'July 2024 - March 2025',
      location: 'Germiston',
      description: 'Developed Angular interfaces, integrated RESTful APIs, improved SQL performance, and enhanced UI responsiveness.',
      tech: ['Angular', 'SQL', 'REST APIs', 'Testing']
    },
    {
      company: 'Siyakha Consulting',
      role: 'Digital Developer Intern',
      period: 'November 2020 - June 2023',
      location: 'Sandton',
      description: 'Full-stack development using Laravel and PHP, QA testing, bug resolution, and code reviews in an Agile environment.',
      tech: ['Laravel', 'PHP', 'Git', 'Jira']
    }
  ];

  const certifications = [
    { name: 'ProDev Back-End Developer', provider: 'ALX', year: '2025' },
    { name: 'Full Stack Application Development', provider: 'Power Learn Project', year: '2022-2023' },
    { name: 'MERN Stack Development', provider: 'Udemy', year: '2023' },
    { name: 'Laravel Development', provider: 'Udemy', year: '2023' },
    { name: 'MySQL Mastery', provider: 'Udemy', year: '2023' }
  ];

  const stats = [
    { label: 'Profile Views', value: '2,847', icon: Eye, trend: '+12%' },
    { label: 'Project Downloads', value: '1,234', icon: Download, trend: '+8%' },
    { label: 'GitHub Stars', value: '456', icon: Star, trend: '+15%' },
    { label: 'Years Experience', value: '4+', icon: Calendar, trend: 'Growing' }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { type: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Portia is a skilled Full Stack Developer with 4+ years of experience in React.js, Angular, Python, and Django. She's worked at companies like Mlab CodeTribe and Aveng Trident Steel.",
        "Her technical expertise includes frontend development with React.js and Angular, backend development with Python/Django and PHP/Laravel, plus strong SQL and testing skills.",
        "She's currently pursuing advanced certifications in Back-End Development through ALX and has completed multiple Udemy courses in MERN stack and Laravel development.",
        "Portia has hands-on experience with agile methodologies, REST APIs, and has worked on full-stack applications from conception to deployment.",
        "Her notable project includes a Portfolio of Evidence deployed on Vercel, showcasing her development skills and project management abilities."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: 'bot', content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-purple-400">
                <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold">
                  PM
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Portia Mashaba
                </h1>
                <p className="text-sm text-gray-300">Full Stack Developer</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Profile & Stats */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Card */}
            <Card className="bg-black/40 backdrop-blur-lg border-white/10">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-gradient-to-r from-purple-400 to-blue-400">
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-2xl font-bold">
                      PM
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold mb-2">Portia Mashaba</h2>
                  <p className="text-gray-300 mb-4">Dynamic Full Stack Developer</p>
                  <div className="flex items-center justify-center text-sm text-gray-400 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    Ivory Park, Midrand
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-400 mb-2">
                    <Phone className="h-4 w-4 mr-1" />
                    0815194600
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Mail className="h-4 w-4 mr-1" />
                    pnpnelly@gmail.com
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-400" />
                    <span className="text-sm">Cooking & Baking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">Learning New Tech</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Rocket className="h-4 w-4 text-blue-400" />
                    <span className="text-sm">Fitness & Sports</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-black/40 backdrop-blur-lg border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="h-5 w-5 text-purple-400" />
                      <span className="text-xs text-green-400">{stat.trend}</span>
                    </div>
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* About Section */}
            <Card className="bg-black/40 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-purple-400" />
                  <span>Professional Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Dynamic and detail-oriented Full Stack Developer with proven experience in frontend development (Angular, React.js), 
                  backend integration (PHP, Laravel, Django, Python), and SQL database design. Adept at building scalable web applications 
                  and performing rigorous testing. Skilled in cross-functional collaboration, agile delivery, and UI/UX design. 
                  Passionate about modern frameworks and lifelong learning, with a strong track record in problem-solving and innovation.
                </p>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="bg-black/40 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code2 className="h-5 w-5 text-purple-400" />
                  <span>Technical Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs border-purple-400 text-purple-400">
                          {skill.category}
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-700"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience Timeline */}
            <Card className="bg-black/40 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-purple-400" />
                  <span>Professional Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                      {index !== experiences.length - 1 && (
                        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                      )}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{exp.role}</h3>
                          <p className="text-purple-400 font-medium">{exp.company}</p>
                          <p className="text-sm text-gray-400 mb-2">{exp.period} • {exp.location}</p>
                          <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="bg-purple-900/50 text-purple-300 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="bg-black/40 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-purple-400" />
                  <span>Featured Projects</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                      <div className="p-4 rounded-lg bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{project.image}</div>
                            <div>
                              <h3 className="font-semibold text-lg group-hover:text-purple-400 transition-colors">
                                {project.title}
                              </h3>
                              <p className="text-sm text-gray-400">{project.url}</p>
                            </div>
                          </div>
                          <Badge className="bg-green-600/20 text-green-400 border-green-400/30">
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-blue-400 text-blue-400">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - AI Chat & Certifications */}
          <div className="lg:col-span-3 space-y-6">
            {/* AI Chat */}
            <Card className="bg-black/40 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-purple-400" />
                  <span>AI Assistant</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-64 p-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                            : 'bg-gray-700 text-gray-100'
                        }`}>
                          <div className="flex items-start space-x-2">
                            {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-purple-400" />}
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-700 p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-4 w-4 text-purple-400" />
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                <Separator className="bg-white/10" />
                <div className="p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about Portia's experience..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-black/40 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                  <span>Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-3 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/5">
                      <div className="flex items-start space-x-3">
                        <Award className="h-5 w-5 text-yellow-400 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">{cert.name}</h4>
                          <p className="text-xs text-gray-400">{cert.provider} • {cert.year}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Analytics Widget */}
            <Card className="bg-black/40 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                  <span>Portfolio Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">This Week</span>
                    <span className="text-green-400 text-sm">+23%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" style={{width: '67%'}}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-purple-400">89</div>
                      <div className="text-xs text-gray-400">Profile Visits</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-400">34</div>
                      <div className="text-xs text-gray-400">CV Downloads</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
