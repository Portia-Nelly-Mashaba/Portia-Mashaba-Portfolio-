
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
  ExternalLink,
  Building,
  Clock,
  Users,
  Target,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Portia's AI assistant. Ask me anything about her technical expertise, work experience, or career journey!"
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

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { type: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "Portia is a skilled Full Stack Developer with 4+ years of comprehensive experience. She's proficient in React.js, Angular, Python/Django, and has worked across multiple industries from consulting to steel manufacturing.",
        "Her technical expertise spans the entire development stack - from frontend frameworks like React and Angular to backend technologies including Python, Django, PHP, and Laravel. She's also experienced in database design and optimization.",
        "Currently pursuing advanced certifications through ALX's ProDev Back-End Developer program, focusing on microservices, CI/CD pipelines, and security best practices. She's also enrolled in a Higher Certificate in Software Development.",
        "Portia has hands-on experience in agile environments, having worked with cross-functional teams at companies like Mlab CodeTribe and Aveng Trident Steel. She's skilled in performance optimization and testing methodologies.",
        "Her project portfolio includes full-stack applications with focus on responsive design, performance optimization, and modern UI/UX principles. She's deployed applications using modern cloud platforms and follows industry best practices."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: 'bot', content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-blue-200">
                <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold">
                  PM
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Portia Mashaba
                </h1>
                <p className="text-sm text-slate-600">Full Stack Developer & Software Engineer</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="border-slate-300 hover:bg-slate-50">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-slate-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Card */}
            <Card className="bg-white border-slate-200">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4 border-3 border-blue-200">
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold">
                      PM
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg font-bold text-slate-900 mb-2">Portia Mashaba</h2>
                  <p className="text-slate-600 text-sm mb-4">Dynamic Full Stack Developer</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                    Ivory Park, Midrand
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Phone className="h-4 w-4 mr-2 text-slate-400" />
                    0815194600
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Mail className="h-4 w-4 mr-2 text-slate-400" />
                    pnpnelly@gmail.com
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <h3 className="font-semibold text-slate-900 text-sm">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">English</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">Sepedi</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">Isizulu</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  View GitHub
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Portfolio
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6 space-y-6">
            {/* Professional Summary */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>Professional Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  Dynamic and detail-oriented Full Stack Developer with <strong>4+ years of proven experience</strong> in 
                  frontend development (Angular, React.js), backend integration (PHP, Laravel, Django, Python), and SQL database design. 
                  Adept at building scalable web applications and performing rigorous testing. Skilled in cross-functional collaboration, 
                  agile delivery, and UI/UX design with a passion for modern frameworks and continuous learning.
                </p>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <Code2 className="h-5 w-5 text-blue-600" />
                  <span>Technical Expertise</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {technicalSkills.map((category, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-slate-900 mb-3">{category.category}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-slate-900">{skill.name}</span>
                              <span className="text-xs text-slate-500">{skill.experience}</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <span>Professional Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {workExperience.map((exp, index) => (
                    <div key={index} className="relative">
                      {index !== workExperience.length - 1 && (
                        <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-slate-200"></div>
                      )}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <Building className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-slate-900">{exp.role}</h3>
                              <p className="text-blue-600 font-medium">{exp.company}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-slate-500 mb-3">
                            <Clock className="h-4 w-4 mr-1" />
                            {exp.period} • {exp.location}
                          </div>
                          <p className="text-slate-700 text-sm mb-3">{exp.description}</p>
                          
                          <div className="mb-3">
                            <h4 className="font-medium text-slate-900 text-sm mb-2">Key Achievements:</h4>
                            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
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

            {/* Featured Project */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span>Featured Project</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {projects.map((project) => (
                  <div key={project.id} className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-900 text-lg">{project.title}</h3>
                        <p className="text-sm text-slate-500">{project.url}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-slate-700">{project.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg">
                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900">{project.metrics.performance}</p>
                        <p className="text-xs text-slate-600">Performance</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900">{project.metrics.accessibility}</p>
                        <p className="text-xs text-slate-600">Accessibility</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900">{project.metrics.seo}</p>
                        <p className="text-xs text-slate-600">SEO Score</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-blue-200 text-blue-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* AI Assistant */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <span>AI Assistant</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-64 p-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-100 text-slate-800'
                        }`}>
                          <div className="flex items-start space-x-2">
                            {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-blue-600" />}
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-slate-100 p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-4 w-4 text-blue-600" />
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                <Separator />
                <div className="p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about Portia's experience..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="border-slate-300 focus:ring-blue-500"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education & Certifications */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span>Education & Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-slate-900 text-sm">{cert.name}</h4>
                        <Badge 
                          variant={cert.status === 'Completed' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {cert.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-600 mb-1">{cert.provider} • {cert.year}</p>
                      <p className="text-xs text-slate-500">{cert.focus}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Metrics */}
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-slate-900">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <span>Portfolio Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">This Month</span>
                    <span className="text-green-600 text-sm font-medium">+28%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Profile Views</span>
                      <span className="font-medium text-slate-900">1,247</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">CV Downloads</span>
                      <span className="font-medium text-slate-900">89</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Project Visits</span>
                      <span className="font-medium text-slate-900">456</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{width: '72%'}}></div>
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
