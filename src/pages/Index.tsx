
import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Overview from '@/components/sections/Overview';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  MessageSquare, 
  Send,
  Bot,
} from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Portia's AI assistant. Ask me anything about her technical expertise, work experience, or career journey!"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { type: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "Portia is a skilled Full Stack Developer with 4+ years of comprehensive experience. She's proficient in React.js, Angular, Python/Django, and has worked across multiple industries.",
        "Her technical expertise spans the entire development stack - from frontend frameworks like React and Angular to backend technologies including Python, Django, PHP, and Laravel.",
        "Currently pursuing advanced certifications through ALX's ProDev Back-End Developer program, focusing on microservices, CI/CD pipelines, and security best practices.",
        "Portia has hands-on experience in agile environments, having worked with cross-functional teams at companies like Mlab CodeTribe and Aveng Trident Steel.",
        "She has experience with modern development tools including Docker, Kubernetes, Redis, GraphQL, and has strong expertise in database design and optimization.",
        "Her educational background includes certifications in Full Stack Development, MERN Stack, and she's currently pursuing a Higher Certificate in Software Development at STADIO.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: 'bot', content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'certifications':
        return <Certifications />;
      default:
        return <Overview />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex w-full">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <div className="flex-1 flex">
            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
              {renderContent()}
            </div>

            {/* Right Sidebar - AI Chat */}
            <div className="w-80 bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700">
              <div className="h-full flex flex-col">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-900 dark:text-white flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-violet-500" />
                    AI Assistant
                  </h3>
                </div>
                
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-violet-600 text-white' 
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                        }`}>
                          <div className="flex items-start space-x-2">
                            {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-violet-600" />}
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-4 w-4 text-violet-600" />
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-violet-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                
                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about Portia's experience..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="border-slate-300 dark:border-slate-600 focus:ring-violet-500"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-violet-600 hover:bg-violet-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
