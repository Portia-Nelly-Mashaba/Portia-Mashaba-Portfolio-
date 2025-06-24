
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
      company: 'Mlab CodeTribe',
      role: 'Mobile & Web Developer (Trainee)',
      period: 'May 2024 - May 2025',
      location: 'Tembisa',
      type: 'Current Position',
      status: 'active',
      description: 'Developing full-stack applications using modern frameworks including React.js, React Native, Node.js, and Firebase. Working extensively with REST APIs and practicing agile methodologies.',
      achievements: [
        'Built and deployed multiple full-stack applications with 99% uptime',
        'Mastered React Native for cross-platform mobile development',
        'Implemented agile practices including sprints, stand-ups, and code reviews',
        'Gained expertise in Firebase integration and real-time database management',
        'Contributed to team velocity improvement by 25% through code optimization'
      ],
      tech: ['React.js', 'React Native', 'Node.js', 'Firebase', 'REST APIs', 'Agile'],
      metrics: {
        projectsCompleted: 8,
        performance: '98%',
        teamSize: 6
      }
    },
    {
      company: 'Aveng Trident Steel',
      role: 'Frontend & SQL Developer | Software Tester',
      period: 'July 2024 - March 2025',
      location: 'Germiston',
      type: 'Contract',
      status: 'completed',
      description: 'Focused on Angular development, database optimization, and comprehensive testing strategies to improve system performance and reliability.',
      achievements: [
        'Developed responsive Angular interfaces improving user experience by 40%',
        'Optimized SQL queries reducing database response time by 60%',
        'Reduced system bugs by 45% through comprehensive testing protocols',
        'Enhanced UI responsiveness across all supported browsers and devices',
        'Implemented automated testing suite saving 20 hours per week'
      ],
      tech: ['Angular', 'SQL', 'TypeScript', 'Testing', 'Performance Optimization', 'SSRS'],
      metrics: {
        bugReduction: '45%',
        performanceImprovement: '60%',
        testCoverage: '85%'
      }
    },
    {
      company: 'Siyakha Consulting',
      role: 'Digital Developer Intern',
      period: 'November 2020 - June 2023',
      location: 'Sandton',
      type: 'Internship',
      status: 'completed',
      description: 'Comprehensive full-stack development experience using PHP and Laravel, with focus on quality assurance and collaborative development practices.',
      achievements: [
        'Completed 15+ full-stack development projects using Laravel framework',
        'Performed extensive QA testing resulting in 30% fewer production bugs',
        'Participated in code reviews improving team code quality standards',
        'Ensured 100% cross-browser compatibility for all web applications',
        'Mentored 3 junior developers in Laravel best practices'
      ],
      tech: ['Laravel', 'PHP', 'Git', 'Jira', 'QA Testing', 'MySQL'],
      metrics: {
        projectsDelivered: 15,
        bugReduction: '30%',
        mentees: 3
      }
    },
    {
      company: 'Ram Courier Transport',
      role: 'Help Desk Agent, IT Development',
      period: 'August 2015 - September 2020',
      location: 'Isando',
      type: 'Full-time',
      status: 'completed',
      description: 'Provided first-line support and helped maintain internal systems by generating SQL reports via SSRS. Supported software updates, logged and tracked bugs.',
      achievements: [
        'Maintained 99.5% system uptime through proactive monitoring',
        'Generated 200+ automated SQL reports improving business intelligence',
        'Resolved 95% of support tickets within SLA requirements',
        'Implemented bug tracking system reducing issue resolution time by 35%',
        'Trained 10+ staff members on new software implementations'
      ],
      tech: ['SSRS', 'SQL', 'System Administration', 'Bug Tracking', 'Technical Support'],
      metrics: {
        uptime: '99.5%',
        ticketResolution: '95%',
        staffTrained: 10
      }
    },
    {
      company: 'Khum MK Investment',
      role: 'IT Junior Specialist & Office Administrator',
      period: 'April 2014 - February 2015',
      location: 'Roodepoort',
      type: 'Full-time',
      status: 'completed',
      description: 'Responsible for general IT support, including software installations, troubleshooting, and ensuring seamless daily operations for the office.',
      achievements: [
        'Maintained IT infrastructure for 50+ employees',
        'Implemented new backup systems reducing data loss risk by 90%',
        'Streamlined software installation processes saving 5 hours per week',
        'Provided technical training to staff improving productivity by 25%',
        'Managed inventory and procurement of IT equipment'
      ],
      tech: ['Windows Administration', 'Network Management', 'Hardware Support', 'Software Installation'],
      metrics: {
        employeesSupported: 50,
        dataLossReduction: '90%',
        productivityIncrease: '25%'
      }
    }
  ];

  const StatusBadge = ({ status }) => {
    const colors = {
      active: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      completed: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    };
    
    return (
      <Badge className={colors[status]}>
        {status === 'active' ? 'Current' : 'Completed'}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Experience</h1>
        <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">
          9+ Years Experience
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
