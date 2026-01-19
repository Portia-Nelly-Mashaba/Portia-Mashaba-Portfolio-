
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen,
  Award,
  TrendingUp,
  Star
} from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'ALX Africa',
      degree: 'ProDev Back-End Developer',
      period: '2025',
      location: 'Online',
      status: 'in_progress',
      progress: 75,
      description: 'Advanced SQL, Python Programming (Async, Generators, Decorators), Unit & Integration Testing (Pytest), CI/CD Pipelines (GitHub Actions, Jenkins), Docker & Kubernetes, Microservices Architecture, Redis, GraphQL, Network Traffic Analysis, and Security Best Practices (SQL Injection, JWT, OAuth, API Security).',
      majors: ['Advanced SQL', 'Python Programming', 'Unit & Integration Testing', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Microservices Architecture', 'Redis', 'GraphQL', 'Network Traffic Analysis', 'Security Best Practices'],
      gpa: 'In Progress',
      credits: 'Ongoing',
      highlights: [
        'Advanced SQL and Python Programming with Async, Generators, Decorators',
        'Unit & Integration Testing with Pytest',
        'CI/CD Pipelines (GitHub Actions, Jenkins)',
        'Docker & Kubernetes Container Orchestration',
        'Microservices Architecture Design',
        'Redis Caching and Session Management',
        'GraphQL API Development',
        'Network Traffic Analysis and Monitoring',
        'Security Best Practices (SQL Injection, JWT, OAuth, API Security)'
      ]
    },
    {
      institution: 'University of South Africa (UNISA)',
      degree: 'Diploma in Information Technology',
      period: '2025 - 2027',
      location: 'Online',
      status: 'enrolled',
      progress: 10,
      description: 'Majors: Software Development and System Design',
      majors: ['Software Development', 'System Design'],
      gpa: 'In Progress',
      credits: 'Ongoing',
      highlights: [
        'Software Development methodologies',
        'System Design and Architecture',
        'Information Technology fundamentals',
        'Professional development in IT'
      ]
    },
    {
      institution: 'Power Learn Project',
      degree: 'Software Development Certificate',
      period: '2022 - 2023',
      location: 'Online',
      status: 'completed',
      progress: 100,
      description: 'Majors: Python and Django, Database (SQL and NoSQL), Flutter and Dart, HTML, CSS and Javascript',
      majors: ['Python', 'Django', 'Database (SQL and NoSQL)', 'Flutter', 'Dart', 'HTML', 'CSS', 'Javascript'],
      gpa: 'Completed',
      credits: 'Full Qualification',
      highlights: [
        'Python and Django framework development',
        'Database design with SQL and NoSQL',
        'Flutter and Dart mobile development',
        'HTML, CSS and JavaScript frontend development',
        'Full-stack application development'
      ]
    },
    {
      institution: 'Ekurhuleni West College',
      degree: 'NCV Level 4: Information Technology and Computer Science',
      period: '2011 - 2013',
      location: 'Ekurhuleni',
      status: 'completed',
      progress: 100,
      description: 'Majors: Software Development and ICT',
      majors: ['Software Development', 'Information Communication Technology'],
      gpa: 'Completed',
      credits: 'Full Qualification',
      highlights: [
        'Software Development fundamentals',
        'Information Communication Technology',
        'Programming basics',
        'Computer Science principles'
      ]
    },
    {
      institution: 'Bokamoso Secondary School',
      degree: 'Matric (Grade 12) Certificate',
      period: '2004 - 2008',
      location: 'Tembisa',
      status: 'completed',
      progress: 100,
      description: 'Secondary education completion',
      majors: ['Grade 12 Subjects'],
      gpa: 'Completed',
      credits: 'Full Qualification',
      highlights: [
        'Secondary education completion',
        'Foundation for further studies'
      ]
    }
  ];

  const onlineCourses = [
    {
      platform: 'ALX Africa',
      course: 'Professional Foundations',
      period: '2024',
      status: 'completed',
      focus: ['Professional Communication', 'Team Collaboration', 'Leadership', 'Problem Solving'],
      certification: true,
      rating: 4.9
    },
    {
      platform: 'Udemy',
      course: 'MERN Stack Development',
      period: '2023',
      status: 'completed',
      focus: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      certification: true,
      rating: 4.8
    },
    {
      platform: 'Udemy',
      course: 'Laravel Development',
      period: '2022',
      status: 'completed',
      focus: ['Laravel', 'PHP', 'MVC Architecture', 'API Development'],
      certification: true,
      rating: 4.7
    },
    {
      platform: 'Udemy',
      course: 'MySQL Mastery',
      period: '2023',
      status: 'completed',
      focus: ['MySQL', 'Query Optimization', 'Database Security', 'Performance Tuning'],
      certification: true,
      rating: 4.9
    },
    {
      platform: 'AWS (Udacity)',
      course: 'AI Generative Certificate',
      period: '2024',
      status: 'completed',
      focus: ['Generative AI', 'AWS Services', 'AI Applications'],
      certification: true,
      rating: 4.8
    },
    {
      platform: 'FNB (IT Varsity)',
      course: 'Full-Stack Development',
      period: '2023',
      status: 'completed',
      focus: ['Full-Stack Development', 'Web Technologies'],
      certification: true,
      rating: 4.7
    },
    {
      platform: 'ALX Africa',
      course: 'Data Engineering',
      period: '2025',
      status: 'in_progress',
      focus: ['Data Engineering', 'Data Analysis', 'ETL Processes'],
      certification: false,
      rating: 0
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'enrolled':
      case 'in_progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'completed':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Education & Learning</h1>
        <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">
          Continuous Learner
        </Badge>
      </div>

      {/* Formal Education */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
          <GraduationCap className="h-5 w-5 mr-2 text-violet-500" />
          Formal Education
        </h2>
        
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-slate-900 dark:text-white">
                      {edu.degree}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(edu.status)}>
                    {edu.status === 'enrolled' || edu.status === 'in_progress' ? 'Current' : 'Completed'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Progress for current studies */}
                  {(edu.status === 'enrolled' || edu.status === 'in_progress') && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Progress</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{edu.progress}%</span>
                      </div>
                      <Progress value={edu.progress} className="h-2" />
                    </div>
                  )}

                  {/* Academic Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                      <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">GPA</div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{edu.gpa}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                      <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">Credits</div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{edu.credits}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                      <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">Status</div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">
                        {edu.status === 'enrolled' || edu.status === 'in_progress' ? 'Active' : 'Graduate'}
                      </div>
                    </div>
                  </div>

                  {/* Major Subjects */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Major Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.majors.map((major, idx) => (
                        <Badge key={idx} variant="outline" className="bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300">
                          {major}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2"></div>
                          <span className="text-slate-700 dark:text-slate-300 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Online Courses & Certifications */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
          <Award className="h-5 w-5 mr-2 text-violet-500" />
          Online Courses & Professional Development
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {onlineCourses.map((course, index) => (
            <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg text-slate-900 dark:text-white">
                      {course.course}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-medium">{course.platform}</span>
                      <span>•</span>
                      <span>{course.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {course.focus.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(course.status)}>
                      {course.certification ? 'Certified' : 'Completed'}
                    </Badge>
                    {course.certification && (
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <Award className="h-4 w-4 mr-1" />
                        <span className="text-sm">Certificate Earned</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
