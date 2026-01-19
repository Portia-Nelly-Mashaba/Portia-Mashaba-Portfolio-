
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink,
  TrendingUp,
  CheckCircle2,
  Building
} from 'lucide-react';

const Experience: React.FC = () => {
  const workExperience = [
    {
      company: 'Siyakha Consulting',
      role: 'Full Stack Developer',
      period: 'May 2024 - November 2025',
      location: 'Sandton - Remote',
      type: 'Full-time',
      status: 'completed',
      description: 'Contributed to full-stack development using Laravel, PHP, and SQL, integrating APIs for complex business solutions. Collaborated on DevOps practices, including CI/CD pipeline setup, automated deployment, and environment configuration for streamlined delivery and system reliability. Worked within an Agile team using Git and Jira. Delivered responsive applications with PWA functionality. Performed QA testing, debugging, and code reviews.',
      achievements: [
        'Contributed to full-stack development using Laravel, PHP, and SQL',
        'Integrated APIs for complex business solutions',
        'Collaborated on DevOps practices including CI/CD pipeline setup',
        'Worked within an Agile team using Git and Jira',
        'Delivered responsive applications with PWA functionality',
        'Performed QA testing, debugging, and code reviews'
      ],
      tech: ['Laravel', 'PHP', 'SQL', 'REST APIs', 'CI/CD', 'Git', 'Jira', 'PWA', 'QA Testing'],
      metrics: {
        projectsCompleted: 'Multiple',
        teamCollaboration: 'Agile',
        qualityAssurance: 'Active'
      }
    },
    {
      company: 'Mlab CodeTribe',
      role: 'Mobile & Web Developer',
      period: 'July 2024 - March 2025',
      location: 'Tembisa',
      type: 'Trainee',
      status: 'completed',
      description: 'Developed and deployed full-stack applications using React.js, React Native, Node.js, and Firebase, with a strong focus on REST API integrations and microservices-based design. Gained exposure to PWA development, ensuring responsive and scalable web solutions. Participated in Agile practices (sprints, stand-ups) and collaborated in team environments to deliver production-ready applications.',
      achievements: [
        'Developed and deployed full-stack applications using React.js, React Native, Node.js, and Firebase',
        'Focused on REST API integrations and microservices-based design',
        'Gained exposure to PWA development',
        'Participated in Agile practices (sprints, stand-ups)',
        'Collaborated in team environments to deliver production-ready applications'
      ],
      tech: ['React.js', 'React Native', 'Node.js', 'Firebase', 'REST APIs', 'Microservices', 'PWA', 'Agile'],
      metrics: {
        applicationsDeployed: 'Multiple',
        teamCollaboration: 'Agile',
        productionReady: 'Yes'
      }
    },
    {
      company: 'Tshikamisava Holdings',
      role: 'Freelance Web & Mobile Developer',
      period: 'November 2020 - April 2024',
      location: 'Remote',
      type: 'Freelance',
      status: 'completed',
      description: 'Designed and delivered full-stack web and mobile solutions using Python, Django, React.js, Angular, React Native, Node.js, Flutter, and Firebase. Integrated REST APIs and SDKs and implemented PWA features to improve user experience across devices. Worked with SQL/NoSQL databases and applied microservices-driven design to build scalable applications. Participated in Agile practices, ensuring quality delivery through unit, integration, and functional testing. Contributed to projects involving data analysis and AI-driven features, ensuring solutions were efficient, secure, and production-ready.',
      achievements: [
        'Designed and delivered full-stack web and mobile solutions',
        'Integrated REST APIs and SDKs',
        'Implemented PWA features to improve user experience',
        'Worked with SQL/NoSQL databases',
        'Applied microservices-driven design to build scalable applications',
        'Participated in Agile practices with quality delivery through testing',
        'Contributed to projects involving data analysis and AI-driven features'
      ],
      tech: ['Python', 'Django', 'React.js', 'Angular', 'React Native', 'Node.js', 'Flutter', 'Firebase', 'REST APIs', 'SQL/NoSQL', 'Microservices', 'PWA', 'Agile'],
      metrics: {
        projectsDelivered: 'Multiple',
        technologies: '10+',
        qualityAssurance: 'Comprehensive'
      }
    },
    {
      company: 'Ram Courier Transport',
      role: 'Help Desk Agent, IT Development: First Line Support, Mobile Device Developer & Software Tester',
      period: 'August 2015 - September 2020',
      location: 'Isando',
      type: 'Full-time',
      status: 'completed',
      description: 'Worked as a first-line support and IT development resource. Specialized in mobile device application support, software testing, and data analysis. Contributed to maintaining internal systems, generating SQL reports using SSRS, and ensuring accurate operational data for business teams. Assisted in the development and support of .NET (C#) and Python-based applications. Integrated APIs to enhance mobile and reporting solutions. Performed thorough bug tracking and validation. Collaborated with developers to deploy software updates, installations, and system enhancements. Ensured smooth business operations and reliable mobile application performance across the company.',
      achievements: [
        'Provided first-line support and IT development',
        'Specialized in mobile device application support, software testing, and data analysis',
        'Generated SQL reports using SSRS',
        'Assisted in development and support of .NET (C#) and Python-based applications',
        'Integrated APIs to enhance mobile and reporting solutions',
        'Performed thorough bug tracking and validation',
        'Collaborated with developers to deploy software updates and system enhancements'
      ],
      tech: ['SSRS', 'SQL', '.NET (C#)', 'Python', 'Mobile Device Support', 'Software Testing', 'Bug Tracking', 'API Integration'],
      metrics: {
        systemUptime: 'Maintained',
        reportsGenerated: 'Multiple',
        supportProvided: 'First Line'
      }
    },
    {
      company: 'Khum MK Investment',
      role: 'IT Junior Specialist & Office Administrator',
      period: 'April 2014 - February 2015',
      location: 'Roodepoort',
      type: 'Full-time',
      status: 'completed',
      description: 'Responsible for general IT support, including software installations and troubleshooting. Ensured seamless daily operations for the office.',
      achievements: [
        'Provided general IT support',
        'Handled software installations and troubleshooting',
        'Ensured seamless daily operations for the office'
      ],
      tech: ['IT Support', 'Software Installation', 'Troubleshooting', 'Office Administration'],
      metrics: {
        operationsMaintained: 'Daily',
        supportProvided: 'General IT'
      }
    }
  ];

  const StatusBadge = ({ status }) => {
    return (
      <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
        Completed
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Experience</h1>
        <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">
          10+ Years Experience
        </Badge>
      </div>

      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-violet-500" />
                    <CardTitle className="text-xl text-slate-900 dark:text-white">
                      {job.role}
                    </CardTitle>
                    <StatusBadge status={job.status} />
                  </div>
                  <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {job.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(job.metrics).map(([key, value]) => (
                    <div key={key} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </span>
                      </div>
                      <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2"></div>
                        <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
