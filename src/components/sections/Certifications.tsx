
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Calendar, 
  ExternalLink,
  CheckCircle2,
  Clock,
  Star,
  TrendingUp,
  Globe,
  Code2,
  Database,
  Shield
} from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'ProDev Back-End Developer',
      provider: 'ALX',
      year: '2025',
      status: 'In Progress',
      progress: 75,
      credentialId: 'ALX-BD-2025-001',
      expiryDate: 'No Expiry',
      focus: [
        'Advanced Python Programming (Async, Generators, Decorators)',
        'Unit & Integration Testing with Pytest',
        'CI/CD Pipelines (GitHub Actions, Jenkins)',
        'Docker & Kubernetes Container Orchestration',
        'Microservices Architecture Design',
        'Redis Caching and Session Management',
        'GraphQL API Development',
        'Network Traffic Analysis and Monitoring',
        'Security Best Practices (SQL Injection, JWT, OAuth)',
        'API Security and Authentication'
      ],
      skills: ['Python', 'Docker', 'Kubernetes', 'CI/CD', 'Microservices', 'Security'],
      category: 'Backend Development',
      level: 'Advanced',
      hours: 240,
      projects: 6
    },
    {
      name: 'Higher Certificate in Software Development',
      provider: 'STADIO Higher Education',
      year: '2025-2026',
      status: 'Enrolled',
      progress: 15,
      credentialId: 'STADIO-SD-2025',
      expiryDate: 'No Expiry',
      focus: [
        'Software Development Methodologies',
        'System Design and Architecture',
        'Database Design and Management',
        'Object-Oriented Programming',
        'Web Application Development',
        'Software Testing and Quality Assurance',
        'Project Management in Software Development',
        'Data Structures and Algorithms'
      ],
      skills: ['Software Design', 'System Architecture', 'Database Design', 'OOP'],
      category: 'Software Development',
      level: 'Intermediate',
      hours: 720,
      projects: 12
    },
    {
      name: 'Full Stack Application Development',
      provider: 'Power Learn Project',
      year: '2022-2023',
      status: 'Completed',
      progress: 100,
      credentialId: 'PLP-FSAD-2023-456',
      expiryDate: 'No Expiry',
      focus: [
        'Python Programming Fundamentals',
        'Django Framework Development',
        'Database Design with SQL and NoSQL',
        'Frontend Integration with HTML/CSS/JS',
        'RESTful API Development',
        'Version Control with Git',
        'Deployment and DevOps Basics'
      ],
      skills: ['Python', 'Django', 'SQL', 'REST APIs', 'Git'],
      category: 'Full Stack',
      level: 'Intermediate',
      hours: 180,
      projects: 8
    },
    {
      name: 'MERN Stack Development',
      provider: 'Udemy',
      year: '2023',
      status: 'Completed',
      progress: 100,
      credentialId: 'UC-MERN-2023-789',
      expiryDate: 'No Expiry',
      focus: [
        'MongoDB Database Design and Operations',
        'Express.js Server Development',
        'React.js Frontend Development',
        'Node.js Backend Programming',
        'Authentication and Authorization',
        'State Management with Redux',
        'Real-time Features with Socket.io'
      ],
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux'],
      category: 'Full Stack',
      level: 'Intermediate',
      hours: 65,
      projects: 4
    },
    {
      name: 'Laravel Development Mastery',
      provider: 'Udemy',
      year: '2022',
      status: 'Completed',
      progress: 100,
      credentialId: 'UC-LARAVEL-2022-123',
      expiryDate: 'No Expiry',
      focus: [
        'Laravel Framework Architecture',
        'Eloquent ORM and Database Relations',
        'Authentication and Authorization',
        'API Development with Laravel',
        'Testing with PHPUnit',
        'Package Development',
        'Performance Optimization'
      ],
      skills: ['Laravel', 'PHP', 'Eloquent ORM', 'API Development', 'Testing'],
      category: 'Backend Development',
      level: 'Intermediate',
      hours: 45,
      projects: 3
    },
    {
      name: 'MySQL Database Administration',
      provider: 'Udemy',
      year: '2023',
      status: 'Completed',
      progress: 100,
      credentialId: 'UC-MYSQL-2023-456',
      expiryDate: 'No Expiry',
      focus: [
        'Database Installation and Configuration',
        'Query Optimization and Performance Tuning',
        'Database Security and User Management',
        'Backup and Recovery Strategies',
        'Replication and High Availability',
        'Monitoring and Maintenance'
      ],
      skills: ['MySQL', 'Database Administration', 'Performance Tuning', 'Security'],
      category: 'Database',
      level: 'Advanced',
      hours: 35,
      projects: 2
    },
    {
      name: 'Professional Foundations',
      provider: 'ALX',
      year: '2024',
      status: 'Completed',
      progress: 100,
      credentialId: 'ALX-PF-2024-789',
      expiryDate: 'No Expiry',
      focus: [
        'Professional Communication Skills',
        'Team Collaboration and Leadership',
        'Problem-Solving Methodologies',
        'Time Management and Productivity',
        'Professional Ethics in Technology',
        'Career Development Planning'
      ],
      skills: ['Communication', 'Leadership', 'Problem Solving', 'Team Work'],
      category: 'Professional Skills',
      level: 'Foundation',
      hours: 40,
      projects: 0
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Enrolled':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Backend Development':
        return Database;
      case 'Full Stack':
        return Globe;
      case 'Software Development':
        return Code2;
      case 'Database':
        return Database;
      case 'Professional Skills':
        return Star;
      default:
        return Award;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Foundation':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const stats = [
    { label: 'Total Certifications', value: certifications.length, icon: Award },
    { label: 'Completed', value: certifications.filter(c => c.status === 'Completed').length, icon: CheckCircle2 },
    { label: 'In Progress', value: certifications.filter(c => c.status === 'In Progress').length, icon: Clock },
    { label: 'Total Hours', value: certifications.reduce((sum, c) => sum + c.hours, 0), icon: TrendingUp }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications & Credentials</h1>
        <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">
          {certifications.length} Certifications
        </Badge>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
                <stat.icon className="h-8 w-8 text-violet-500" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certifications List */}
      <div className="space-y-4">
        {certifications.map((cert, index) => {
          const CategoryIcon = getCategoryIcon(cert.category);
          return (
            <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CategoryIcon className="h-5 w-5 text-violet-500" />
                      <CardTitle className="text-xl text-slate-900 dark:text-white">
                        {cert.name}
                      </CardTitle>
                    </div>
                    <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4" />
                        <span className="font-medium">{cert.provider}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={getStatusColor(cert.status)}>
                      {cert.status}
                    </Badge>
                    <Badge className={getLevelColor(cert.level)} variant="outline">
                      {cert.level}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Progress for ongoing certifications */}
                  {(cert.status === 'In Progress' || cert.status === 'Enrolled') && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Progress</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{cert.progress}%</span>
                      </div>
                      <Progress value={cert.progress} className="h-2" />
                    </div>
                  )}

                  {/* Certification Details */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                      <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">Category</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{cert.category}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                      <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">Hours</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{cert.hours}h</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                      <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">Projects</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{cert.projects}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                      <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">Credential ID</div>
                      <div className="text-xs font-mono text-slate-900 dark:text-white">{cert.credentialId}</div>
                    </div>
                  </div>

                  {/* Core Skills */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Core Skills Acquired</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      Focus Areas & Learning Outcomes
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cert.focus.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  {cert.status === 'Completed' && (
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Verify Certificate
                      </Button>
                      <Button size="sm" variant="outline">
                        <Award className="h-3 w-3 mr-1" />
                        View Credential
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
