
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
  Pause
} from 'lucide-react';

const CodingJourney: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2024);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(new Set());

  const journeyData = [
    {
      year: 2020,
      title: "The Beginning",
      subtitle: "First Line of Code",
      description: "Started my coding journey with HTML and CSS, building my first static website.",
      technologies: ["HTML", "CSS", "JavaScript"],
      achievement: "Built first portfolio website",
      color: "bg-blue-500",
      icon: Code2
    },
    {
      year: 2021,
      title: "Frontend Foundations",
      subtitle: "React & Modern JS",
      description: "Dove deep into React.js and modern JavaScript, creating interactive web applications.",
      technologies: ["React.js", "ES6+", "Bootstrap", "Git"],
      achievement: "Completed 5+ React projects",
      color: "bg-cyan-500",
      icon: Rocket
    },
    {
      year: 2022,
      title: "Full Stack Development",
      subtitle: "Backend & Databases",
      description: "Expanded to backend development with Python Django and database management.",
      technologies: ["Python", "Django", "MySQL", "REST APIs"],
      achievement: "Built first full-stack application",
      color: "bg-green-500",
      icon: GitBranch
    },
    {
      year: 2023,
      title: "Professional Growth",
      subtitle: "Industry Experience",
      description: "Started professional career, working on enterprise applications and agile teams.",
      technologies: ["Angular", "Laravel", "Redis", "Docker"],
      achievement: "Joined Mlab CodeTribe",
      color: "bg-purple-500",
      icon: Trophy
    },
    {
      year: 2024,
      title: "Advanced Specialization",
      subtitle: "Modern Architecture",
      description: "Focusing on microservices, cloud technologies, and advanced development practices.",
      technologies: ["Kubernetes", "Microservices", "GraphQL", "CI/CD"],
      achievement: "ALX ProDev Program",
      color: "bg-violet-500",
      icon: Star
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentYear(prev => {
          const nextYear = prev + 1;
          if (nextYear > 2024) {
            setIsPlaying(false);
            return 2024;
          }
          setAnimatedItems(prev => new Set([...prev, nextYear]));
          return nextYear;
        });
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePlayJourney = () => {
    setCurrentYear(2020);
    setAnimatedItems(new Set([2020]));
    setIsPlaying(true);
  };

  const resetJourney = () => {
    setCurrentYear(2024);
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
              <div className="text-2xl font-bold">4+</div>
              <div className="text-sm opacity-90">Years Coding</div>
            </div>
            <div>
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm opacity-90">Technologies</div>
            </div>
            <div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-90">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm opacity-90">Lines of Code</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodingJourney;
