
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Github, 
  ExternalLink, 
  Star,
  Eye,
  Download,
  TrendingUp,
  Zap,
  Shield,
  Smartphone
} from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio of Evidence',
      description: 'A comprehensive showcase of development projects featuring modern UI/UX design, responsive layouts, and performance optimization. Built with React.js and deployed on Vercel with CI/CD integration.',
      url: 'portfolio-of-evidence-teal.vercel.app',
      github: 'github.com/portia/portfolio-evidence',
      tech: ['React.js', 'Tailwind CSS', 'Vercel', 'Responsive Design', 'Performance Optimization'],
      status: 'Live Production',
      category: 'Web Application',
      metrics: {
        performance: '98%',
        accessibility: '95%',
        seo: '100%',
        users: '1.2K',
        uptime: '99.9%'
      },
      features: [
        'Responsive design across all devices and screen sizes',
        'Optimized performance with lazy loading and code splitting',
        'Modern UI/UX implementation with smooth animations',
        'Cross-browser compatibility testing and optimization',
        'SEO optimized with meta tags and structured data',
        'Progressive Web App (PWA) capabilities'
      ],
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce management built with Angular and Laravel backend. Features real-time analytics, inventory management, and order processing capabilities.',
      url: 'demo-ecommerce-dashboard.com',
      github: 'github.com/portia/ecommerce-dashboard',
      tech: ['Angular', 'Laravel', 'MySQL', 'Chart.js', 'Bootstrap'],
      status: 'In Development',
      category: 'Dashboard',
      metrics: {
        performance: '92%',
        features: '15+',
        apiEndpoints: '25',
        users: '500+',
        dataPoints: '10K+'
      },
      features: [
        'Real-time sales analytics and reporting',
        'Advanced inventory management system',
        'Order processing and tracking workflow',
        'Customer relationship management tools',
        'Multi-role user access control',
        'Automated email notifications and alerts'
      ],
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management Mobile App',
      description: 'A cross-platform mobile application built with React Native for team collaboration and task management. Features offline capability, push notifications, and real-time synchronization.',
      url: 'app-store-link',
      github: 'github.com/portia/task-manager-mobile',
      tech: ['React Native', 'Firebase', 'Redux', 'AsyncStorage', 'Push Notifications'],
      status: 'Beta Testing',
      category: 'Mobile Application',
      metrics: {
        downloads: '2.5K',
        rating: '4.8/5',
        platforms: '2',
        users: '800+',
        retention: '85%'
      },
      features: [
        'Cross-platform compatibility (iOS and Android)',
        'Offline data synchronization capabilities',
        'Real-time collaboration and messaging',
        'Push notifications for task updates',
        'Advanced filtering and search functionality',
        'Data visualization with charts and reports'
      ],
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 4,
      title: 'AI-Powered Content Generator',
      description: 'A web application that leverages AI to generate content for blogs, social media, and marketing materials. Built with Python Django backend and React frontend with API integration.',
      url: 'ai-content-generator.demo.com',
      github: 'github.com/portia/ai-content-generator',
      tech: ['Django', 'React.js', 'OpenAI API', 'PostgreSQL', 'Docker'],
      status: 'Prototype',
      category: 'AI Application',
      metrics: {
        accuracy: '94%',
        apiCalls: '5K+',
        users: '200+',
        contentGenerated: '1K+',
        satisfaction: '4.7/5'
      },
      features: [
        'Multiple content types (blogs, social media, emails)',
        'AI-powered content optimization suggestions',
        'Template library with customizable formats',
        'Content scheduling and publishing integration',
        'Analytics and performance tracking',
        'Multi-language content generation support'
      ],
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 5,
      title: 'Financial Analytics Platform',
      description: 'A comprehensive financial data analysis platform built for small businesses. Features automated reporting, budget tracking, and predictive analytics using machine learning.',
      url: 'financial-analytics.demo.com',
      github: 'github.com/portia/financial-analytics',
      tech: ['Python', 'Flask', 'Machine Learning', 'Chart.js', 'SQLAlchemy'],
      status: 'Planning',
      category: 'Analytics Platform',
      metrics: {
        dataProcessed: '100K+',
        reports: '500+',
        accuracy: '96%',
        users: '150+',
        timesSaved: '40%'
      },
      features: [
        'Automated financial report generation',
        'Predictive analytics for budget forecasting',
        'Interactive data visualization dashboards',
        'Integration with popular accounting software',
        'Customizable alert system for financial thresholds',
        'Export capabilities to multiple formats (PDF, Excel, CSV)'
      ],
      image: '/placeholder.svg',
      featured: false
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live Production':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'In Development':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Beta Testing':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      case 'Prototype':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 'Planning':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Application':
        return Globe;
      case 'Mobile Application':
        return Smartphone;
      case 'Dashboard':
        return TrendingUp;
      case 'AI Application':
        return Zap;
      case 'Analytics Platform':
        return TrendingUp;
      default:
        return Globe;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Projects Portfolio</h1>
        <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">
          {projects.length} Projects
        </Badge>
      </div>

      {/* Featured Projects */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center">
          <Star className="h-5 w-5 mr-2 text-yellow-500" />
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.filter(project => project.featured).map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <Card key={project.id} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CategoryIcon className="h-5 w-5 text-violet-500" />
                        <CardTitle className="text-xl text-slate-900 dark:text-white">
                          {project.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Badge variant="outline">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                          <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-lg font-bold text-slate-900 dark:text-white">{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-3 w-3 mr-1" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* All Projects */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <Card key={project.id} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CategoryIcon className="h-4 w-4 text-violet-500" />
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          {project.title}
                        </CardTitle>
                      </div>
                      {project.featured && <Star className="h-4 w-4 text-yellow-500" />}
                    </div>
                    <Badge className={getStatusColor(project.status)} size="sm">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
