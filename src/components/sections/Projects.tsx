import React, { useState, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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
import portfolioHomeImage from '@/assets/portfolio-of-evidence/home.png';
import portfolioAboutImage from '@/assets/portfolio-of-evidence/about.png';
import portfolioSkillsImage from '@/assets/portfolio-of-evidence/skills.png';
import portfolioProjectsImage from '@/assets/portfolio-of-evidence/projects.png';
import devNotesHomeImage from '@/assets/dev-notes/home.png';
import devNotesErrorImage from '@/assets/dev-notes/error.png';
import devNotesCommunityImage from '@/assets/dev-notes/community.png';
import hotelAppHome1Image from '@/assets/hotel-app/home screen 1.PNG';
import hotelAppHome2Image from '@/assets/hotel-app/home screen 2.PNG';
import hotelAppBookingImage from '@/assets/hotel-app/booking screen.PNG';
import documentQAImage1 from '@/assets/document-q-a-service/image1.png';
import documentQAImage2 from '@/assets/document-q-a-service/image (1).png';
import newsAppImage1 from '@/assets/newsapp/pic1 (1).PNG';
import newsAppImage2 from '@/assets/newsapp/pic2 (1).PNG';
import newsAppImage3 from '@/assets/newsapp/pic3 (1).PNG';
import geoGalleryImage1 from '@/assets/gallery/pic1 (2).png';
import geoGalleryImage2 from '@/assets/gallery/pic2 (2).png';
import geoGalleryImage3 from '@/assets/gallery/pic3 (2).png';
import geoGalleryImage4 from '@/assets/gallery/pic4 (1).png';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const projects = [
    {
      id: 1,
      title: 'Portfolio of Evidence',
      description: 'A comprehensive showcase of development projects featuring modern UI/UX design, responsive layouts, and performance optimization. Built with React.js and deployed on Vercel with CI/CD integration.',
      url: 'https://portfolio-of-evidence-teal.vercel.app',
      github: 'https://github.com/Portia-Nelly-Mashaba/portfolio-of-evidence',
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
      images: [
        portfolioHomeImage,
        portfolioAboutImage,
        portfolioSkillsImage,
        portfolioProjectsImage
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Dev Notes',
      description: 'AI-powered developer notes app for managing code snippets, error solutions, and learning resources with intelligent search and collaboration. Built with React, TypeScript, and modern web technologies.',
      url: 'https://dev-notes-theta.vercel.app',
      github: 'https://github.com/Portia-Nelly-Mashaba/Dev-Notes-',
      tech: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Monaco Editor'],
      status: 'In Development',
      category: 'Web Application',
      metrics: {
        performance: '95%',
        accessibility: '92%',
        seo: '98%',
        users: '500+',
        features: '10+'
      },
      features: [
        'Note management with syntax highlighting and code snippets',
        'Error logging and solution tracking system',
        'AI-powered assistance and intelligent suggestions',
        'Neural search across notes using semantic search',
        'Knowledge graph visualization for note relationships',
        'Collaboration features for team sharing',
        'GitHub integration for repository sync',
        'Gamified karma system with achievements'
      ],
      images: [
        devNotesHomeImage,
        devNotesErrorImage,
        devNotesCommunityImage
      ],
      featured: true
    },
    {
      id: 3,
      title: 'Hotel Booking App',
      description: 'A comprehensive hotel booking application built with React.js and Redux, featuring room search, booking management, and admin dashboard. Users can search for rooms, make reservations, and complete payments, while admins can manage rooms, bookings, and users.',
      url: 'https://hotel-app-v2.vercel.app',
      github: 'https://github.com/Portia-Nelly-Mashaba/Hotel-App-v2',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'Firestore', 'Firebase Authentication'],
      status: 'Beta Testing',
      category: 'Web Application',
      metrics: {
        performance: '94%',
        features: '15+',
        bookingSystem: 'Full',
        users: '1000+',
        rooms: '50+'
      },
      features: [
        'Advanced room search with filters (Check-in, Check-out, Adults, Kids)',
        'Room details page with reviews and reservation form',
        'Booking summary and checkout with payment gateway integration',
        'User authentication and profile management',
        'Admin dashboard for room, booking, and user management',
        'Real-time booking management with Firestore database',
        'Responsive design optimized for all devices',
        'Dynamic promotional sliders and room card displays'
      ],
      images: [
        hotelAppHome1Image,
        hotelAppHome2Image,
        hotelAppBookingImage
      ],
      featured: true
    },
    {
      id: 4,
      title: 'News App',
      description: 'A React.js news application that fetches and displays the latest news articles from various categories using NewsAPI. Features category filtering, search functionality, article bookmarking, and social sharing capabilities.',
      url: 'https://news-app-jade-zeta.vercel.app',
      github: 'https://github.com/Portia-Nelly-Mashaba/News-App',
      tech: ['React.js', 'CSS', 'NewsAPI', 'JavaScript', 'HTML'],
      status: 'Live Production',
      category: 'Web Application',
      metrics: {
        performance: '91%',
        apiIntegration: 'NewsAPI',
        categories: 'Multiple',
        features: '8+',
        articles: 'Real-time'
      },
      features: [
        'Latest news articles from various categories (Business, Technology, Health, Entertainment, Sports)',
        'Category filtering with dynamic article updates',
        'Search functionality with keyword-based news fetching',
        'Article details page with full content and source information',
        'Bookmark articles to save as favorites',
        'Share articles via email, social media, or copy URL',
        'Responsive design optimized for mobile, tablet, and desktop',
        'Error handling with fallback content for API failures'
      ],
      images: [
        newsAppImage1,
        newsAppImage2,
        newsAppImage3
      ],
      featured: false
    },
    {
      id: 5,
      title: 'Geo-Gallery',
      description: 'A React Native mobile gallery application with geolocation features and SQLite database integration. Users can view images in grid or list format, tag images with location data, and display image locations on an interactive map.',
      url: '',
      github: 'https://github.com/Portia-Nelly-Mashaba/Geo-Gallery',
      tech: ['React Native', 'SQLite', 'Geolocation API', 'Google Maps', 'JavaScript'],
      status: 'Live Production',
      category: 'Mobile Application',
      metrics: {
        platform: 'Cross-platform',
        database: 'SQLite',
        features: '10+',
        geolocation: 'Enabled',
        storage: 'Local'
      },
      features: [
        'Image gallery with grid and list view formats',
        'Full-screen image viewing and gallery carousel',
        'Automatic geolocation tagging for images',
        'Interactive map display with image location markers',
        'SQLite database for local image metadata storage',
        'CRUD operations for image management',
        'Search and filter images by location, date, or metadata',
        'Pinch-to-zoom and swipe gestures for navigation',
        'Offline accessibility with local database storage',
        'Secure permission handling for geolocation and storage'
      ],
      images: [
        geoGalleryImage1,
        geoGalleryImage2,
        geoGalleryImage3,
        geoGalleryImage4
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Restaurant Reservation',
      description: 'A React Native mobile application with Node.js and MongoDB backend that allows users to search for restaurants, view available reservation slots, and make bookings. Includes an admin dashboard for restaurant owners to manage reservations and restaurant details.',
      url: '',
      github: 'https://github.com/Portia-Nelly-Mashaba/restaurant-reservation-app-v2',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Firebase Cloud Messaging'],
      status: 'Prototype',
      category: 'Mobile Application',
      metrics: {
        platform: 'Cross-platform',
        backend: 'Node.js',
        database: 'MongoDB',
        features: '12+',
        payment: 'Integrated'
      },
      features: [
        'Restaurant search by location, cuisine, or criteria',
        'View restaurant details with ratings and reviews',
        'Make reservations with calendar-based slot selection',
        'Manage, edit, or cancel reservations',
        'Secure online payments via integrated payment gateway',
        'Push notifications for reservation reminders',
        'Feedback and review system for restaurants',
        'Admin dashboard for reservation and slot management',
        'Restaurant analytics with charts and data visualization',
        'Role-based authentication with secure access control',
        'Real-time updates for reservation status',
        'Mobile responsive design for smartphones and tablets'
      ],
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 7,
      title: 'Document Q&A Service',
      description: 'A React TypeScript application for uploading documents and asking questions about them using Google Generative AI (Gemini). Features document upload, Q&A functionality with AI integration, and intelligent fallback to mock data when API is unavailable.',
      url: 'https://document-q-a-service-app.vercel.app',
      github: 'https://github.com/Portia-Nelly-Mashaba/Document-Q-A-Service-App',
      tech: ['React.js', 'TypeScript', 'Google Generative AI', 'Gemini API', 'Vite', 'CSS'],
      status: 'Live Production',
      category: 'Web Application',
      metrics: {
        performance: '93%',
        aiIntegration: 'Gemini Pro',
        responseTime: '500-3000ms',
        features: '10+',
        accuracy: 'High'
      },
      features: [
        'Document upload and management with multiple format support (PDF, DOCX, TXT, JSON)',
        'AI-powered Q&A using Google Generative AI (Gemini Pro)',
        'Intelligent fallback system with mock data when API unavailable',
        'Response metadata tracking (source, response time, model used)',
        'Q&A history with search functionality and export capabilities',
        'Debug panel for API testing and connectivity verification',
        'Dark/Light mode support with responsive design',
        'Error handling with user-friendly notifications',
        'Debounced search for optimal performance',
        'Keyboard shortcuts for enhanced user experience'
      ],
      images: [
        documentQAImage1,
        documentQAImage2
      ],
      featured: true
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
                        {project.category === 'Mobile Application' && (
                          <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                            <Smartphone className="h-3 w-3 mr-1" />
                            Mobile App
                          </Badge>
                        )}
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
                          <Badge key={idx} variant="outline" className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground border-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Features</h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      {project.url && (
                        <Button 
                          size="sm" 
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => window.open(project.url, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Live Demo
                        </Button>
                      )}
                      {project.github && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-3 w-3 mr-1" />
                          Source Code
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setSelectedProject(project.id)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Details
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
                    <div className="flex items-center space-x-2 flex-wrap">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      {project.category === 'Mobile Application' && (
                        <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                          <Smartphone className="h-3 w-3 mr-1" />
                          Mobile App
                        </Badge>
                      )}
                    </div>
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
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setSelectedProject(project.id)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => project.github && window.open(project.github, '_blank')}
                      >
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

      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (() => {
            const project = projects.find(p => p.id === selectedProject);
            if (!project) return null;
            const CategoryIcon = getCategoryIcon(project.category);
            
            return (
              <>
                <DialogHeader>
                  <div className="flex items-center space-x-2">
                    <CategoryIcon className="h-6 w-6 text-violet-500" />
                    <DialogTitle className="text-2xl text-slate-900 dark:text-white">
                      {project.title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-base pt-2">
                    {project.description}
                  </DialogDescription>
                  <div className="flex items-center space-x-2 pt-2 flex-wrap">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline">
                      {project.category}
                    </Badge>
                    {project.category === 'Mobile Application' && (
                      <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                        <Smartphone className="h-3 w-3 mr-1" />
                        Mobile App
                      </Badge>
                    )}
                  </div>
                </DialogHeader>

                <div className="space-y-6 py-4">
                  {/* Project Images Carousel */}
                  {((project.images && project.images.length > 0) || project.image) && (
                    <div className="w-full relative">
                      <Carousel 
                        className="w-full"
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                        plugins={[
                          Autoplay({
                            delay: 6000,
                            stopOnInteraction: false,
                          }),
                        ]}
                      >
                        <CarouselContent className="-ml-0">
                          {(project.images && project.images.length > 0 
                            ? project.images 
                            : [project.image]
                          ).map((image, idx) => (
                            <CarouselItem key={idx} className="pl-0">
                              <div className="w-full rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg relative">
                                <img 
                                  src={image} 
                                  alt={`${project.title} - Screenshot ${idx + 1}`}
                                  className="w-full h-auto object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {((project.images && project.images.length > 1)) && (
                          <>
                            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none h-10 w-10 rounded-full z-10" />
                            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none h-10 w-10 rounded-full z-10" />
                          </>
                        )}
                      </Carousel>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* All Features */}
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                    {project.url && (
                      <Button 
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Live Site
                      </Button>
                    )}
                    {project.github && (
                      <Button 
                        variant="outline" 
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
