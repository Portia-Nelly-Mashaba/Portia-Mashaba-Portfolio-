
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar,
  MapPin,
  Trophy,
  Zap,
  GitBranch,
  Code2,
  Rocket,
  Star,
  Play,
  Pause,
  Briefcase
} from 'lucide-react';

const CodingJourney: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(new Set());

  const journeyData = [
    {
      year: 2013,
      title: "IT Graduate",
      subtitle: "NCV Level 4 Certificate",
      description: "Completed NCV Level 4 in Information Technology and Computer Science at Ekurhuleni West College, focusing on Software Development and ICT fundamentals. This marked the beginning of my professional IT journey.",
      technologies: ["Software Development", "ICT", "Programming Fundamentals", "Database Design"],
      achievement: "NCV Level 4 Certificate - Ekurhuleni West College",
      color: "bg-cyan-500",
      icon: Rocket
    },
    {
      year: 2015,
      title: "IT Development & Support",
      subtitle: "Help Desk Agent, IT Development",
      description: "Joined Ram Courier Transport as Help Desk Agent and IT Development resource. Specialized in mobile device application support, software testing, and data analysis. Contributed to maintaining internal systems, generating SQL reports using SSRS, and ensuring accurate operational data. Assisted in development and support of .NET (C#) and Python-based applications.",
      technologies: ["SSRS", "SQL", ".NET (C#)", "Python", "Mobile Device Support", "Software Testing", "Bug Tracking", "API Integration"],
      achievement: "Help Desk Agent, IT Development - Ram Courier Transport (2015-2020)",
      color: "bg-green-500",
      icon: Briefcase
    },
    {
      year: 2020,
      title: "Development Focus",
      subtitle: "Freelance Developer",
      description: "Began freelance career at Tshikamisava Holdings, designing and delivering full-stack web and mobile solutions using Python, Django, React.js, Angular, React Native, Flutter, and Firebase.",
      technologies: ["Python", "Django", "React.js", "Angular", "React Native", "Flutter", "Firebase"],
      achievement: "Freelance Web & Mobile Developer - Tshikamisava Holdings",
      color: "bg-purple-500",
      icon: Trophy
    },
    {
      year: 2023,
      title: "Formal Training",
      subtitle: "Software Development Certificate",
      description: "Completed Software Development Certificate at Power Learn Project, mastering Python, Django, Database (SQL/NoSQL), Flutter, Dart, HTML, CSS, and JavaScript.",
      technologies: ["Python", "Django", "SQL/NoSQL", "Flutter", "Dart", "HTML", "CSS", "JavaScript"],
      achievement: "Software Development Certificate - Power Learn Project",
      color: "bg-orange-500",
      icon: Star
    },
    {
      year: 2024,
      title: "Professional Growth",
      subtitle: "Full Stack & Mobile Developer",
      description: "Joined Mlab CodeTribe as Mobile & Web Developer, developing full-stack applications with React.js, React Native, Node.js, and Firebase. Also started at Siyakha Consulting as Full Stack Developer, working with Laravel, PHP, SQL, and CI/CD pipelines.",
      technologies: ["React.js", "React Native", "Node.js", "Firebase", "Laravel", "PHP", "SQL", "CI/CD"],
      achievement: "Mlab CodeTribe & Siyakha Consulting - Full Stack Developer",
      color: "bg-violet-500",
      icon: Zap
    },
    {
      year: 2025,
      title: "Advanced Specialization",
      subtitle: "ProDev Back-End Developer",
      description: "Enrolled in ALX Africa ProDev Back-End Developer program, focusing on Advanced SQL, Python (Async, Generators, Decorators), Unit & Integration Testing, CI/CD, Docker, Kubernetes, Microservices, Redis, GraphQL, and Security Best Practices. Also enrolled in UNISA Diploma in Information Technology.",
      technologies: ["Advanced SQL", "Python", "Docker", "Kubernetes", "Microservices", "Redis", "GraphQL", "CI/CD", "Security"],
      achievement: "ALX ProDev Program & UNISA Diploma - Ongoing",
      color: "bg-pink-500",
      icon: Star
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentYear(prev => {
          const nextYear = prev + 1;
          if (nextYear > 2025) {
            setIsPlaying(false);
            return 2025;
          }
          setAnimatedItems(prev => new Set([...prev, nextYear]));
          return nextYear;
        });
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePlayJourney = () => {
    setCurrentYear(2013);
    setAnimatedItems(new Set([2013]));
    setIsPlaying(true);
  };

  const resetJourney = () => {
    setCurrentYear(2025);
    setAnimatedItems(new Set());
    setIsPlaying(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Coding Journey</h2>
          <p className="text-slate-600 dark:text-slate-400">My evolution as a developer</p>
        </div>
        <div className="flex space-x-2">
          <Button 
            onClick={handlePlayJourney} 
            disabled={isPlaying}
            className="bg-violet-600 hover:bg-violet-700"
          >
            <Play className="h-4 w-4 mr-2" />
            {isPlaying ? 'Playing...' : 'Play Journey'}
          </Button>
          <Button 
            onClick={resetJourney} 
            variant="outline"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-cyan-500"></div>
        
        <div className="space-y-8">
          {journeyData.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentYear >= item.year;
            const isAnimated = animatedItems.has(item.year);
            
            return (
              <div 
                key={item.year}
                className={`relative flex items-start space-x-6 transition-all duration-1000 ${
                  isActive ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-4'
                } ${isAnimated ? 'animate-pulse' : ''}`}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${item.color} transition-all duration-500 ${
                  isActive ? 'scale-100 shadow-lg' : 'scale-75'
                }`}>
                  <Icon className="h-8 w-8 text-white" />
                  {isAnimated && (
                    <div className="absolute inset-0 rounded-full bg-white opacity-25 animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <Card className={`flex-1 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 transition-all duration-500 ${
                  isActive ? 'shadow-lg border-violet-200 dark:border-violet-800' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Calendar className="h-4 w-4 text-violet-500" />
                          <Badge variant="outline" className="bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300">
                            {item.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-slate-900 dark:text-white">
                          {item.title}
                        </CardTitle>
                        <p className="text-violet-600 dark:text-violet-400 font-medium">
                          {item.subtitle}
                        </p>
                      </div>
                      {isActive && currentYear === item.year && (
                        <Zap className="h-6 w-6 text-yellow-500 animate-bounce" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {item.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                          <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                          Key Achievement
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {item.achievement}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                          Technologies Learned
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className={`${item.color.replace('bg-', 'bg-').replace('-500', '-50')} dark:${item.color.replace('bg-', 'bg-').replace('-500', '-900/20')} text-slate-700 dark:text-slate-300 transition-all duration-300 ${
                                isActive ? 'scale-100' : 'scale-95'
                              }`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <Card className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm opacity-90">Technologies</div>
            </div>
            <div>
              <div className="text-2xl font-bold">7+</div>
              <div className="text-sm opacity-90">Certifications</div>
            </div>
            <div>
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm opacity-90">Learning Journey</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodingJourney;