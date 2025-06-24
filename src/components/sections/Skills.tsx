
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code2, 
  Database, 
  Globe, 
  Palette,
  Shield,
  Cog,
  Smartphone,
  Cloud
} from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'React.js', level: 92, experience: '3+ years', color: 'bg-blue-500' },
    { name: 'Angular', level: 88, experience: '2+ years', color: 'bg-red-500' },
    { name: 'JavaScript/TypeScript', level: 90, experience: '4+ years', color: 'bg-yellow-500' },
    { name: 'HTML/CSS', level: 95, experience: '5+ years', color: 'bg-orange-500' },
    { name: 'Python/Django', level: 90, experience: '3+ years', color: 'bg-green-500' },
    { name: 'PHP/Laravel', level: 85, experience: '3+ years', color: 'bg-purple-500' },
    { name: 'Node.js', level: 80, experience: '2+ years', color: 'bg-green-600' },
    { name: 'REST APIs', level: 88, experience: '3+ years', color: 'bg-indigo-500' }
  ];

  const designSkills = [
    { name: 'UI/UX Design', level: 85, experience: '3+ years', color: 'bg-pink-500' },
    { name: 'Responsive Design', level: 92, experience: '4+ years', color: 'bg-cyan-500' },
    { name: 'Wireframing', level: 78, experience: '2+ years', color: 'bg-gray-500' },
    { name: 'Prototyping', level: 75, experience: '2+ years', color: 'bg-teal-500' },
    { name: 'Cross-browser Compatibility', level: 88, experience: '4+ years', color: 'bg-emerald-500' },
    { name: 'Accessibility (WCAG)', level: 82, experience: '2+ years', color: 'bg-lime-500' }
  ];

  const databaseSkills = [
    { name: 'SQL/MySQL', level: 92, experience: '4+ years', color: 'bg-blue-600' },
    { name: 'NoSQL/MongoDB', level: 78, experience: '2+ years', color: 'bg-green-700' },
    { name: 'Redis', level: 75, experience: '1+ years', color: 'bg-red-600' },
    { name: 'Database Design', level: 88, experience: '3+ years', color: 'bg-purple-600' },
    { name: 'Query Optimization', level: 85, experience: '3+ years', color: 'bg-indigo-600' },
    { name: 'SSRS Reporting', level: 80, experience: '2+ years', color: 'bg-yellow-600' }
  ];

  const devOpsSkills = [
    { name: 'Git/GitHub', level: 90, experience: '4+ years', color: 'bg-gray-700' },
    { name: 'Docker', level: 75, experience: '1+ years', color: 'bg-blue-700' },
    { name: 'Kubernetes', level: 70, experience: '1+ years', color: 'bg-blue-800' },
    { name: 'CI/CD Pipelines', level: 78, experience: '2+ years', color: 'bg-green-800' },
    { name: 'Jenkins', level: 72, experience: '1+ years', color: 'bg-orange-700' },
    { name: 'Firebase', level: 82, experience: '2+ years', color: 'bg-yellow-700' }
  ];

  const mobileSkills = [
    { name: 'React Native', level: 85, experience: '2+ years', color: 'bg-cyan-600' },
    { name: 'Flutter/Dart', level: 78, experience: '1+ years', color: 'bg-blue-400' },
    { name: 'Mobile UI/UX', level: 82, experience: '2+ years', color: 'bg-pink-600' },
    { name: 'App Store Deployment', level: 75, experience: '1+ years', color: 'bg-gray-600' },
    { name: 'AsyncStorage', level: 80, experience: '2+ years', color: 'bg-purple-700' }
  ];

  const testingSkills = [
    { name: 'Unit Testing', level: 85, experience: '3+ years', color: 'bg-emerald-600' },
    { name: 'Integration Testing', level: 82, experience: '2+ years', color: 'bg-teal-600' },
    { name: 'Functional Testing', level: 88, experience: '3+ years', color: 'bg-lime-600' },
    { name: 'PyTest', level: 80, experience: '2+ years', color: 'bg-green-700' },
    { name: 'QA Testing', level: 90, experience: '4+ years', color: 'bg-cyan-700' },
    { name: 'Bug Tracking', level: 85, experience: '3+ years', color: 'bg-red-700' }
  ];

  const SkillCategory = ({ skills, icon: Icon, title }) => (
    <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="text-slate-900 dark:text-white flex items-center">
          <Icon className="h-5 w-5 mr-2 text-violet-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                  <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {skill.experience}
                  </Badge>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}%</span>
                </div>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Skills & Expertise</h1>
        <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">
          15+ Technologies
        </Badge>
      </div>

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="devops">DevOps</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="technical" className="mt-6">
          <SkillCategory skills={technicalSkills} icon={Code2} title="Frontend & Backend Development" />
        </TabsContent>
        
        <TabsContent value="design" className="mt-6">
          <SkillCategory skills={designSkills} icon={Palette} title="UI/UX & Design" />
        </TabsContent>
        
        <TabsContent value="database" className="mt-6">
          <SkillCategory skills={databaseSkills} icon={Database} title="Database & Data Management" />
        </TabsContent>
        
        <TabsContent value="devops" className="mt-6">
          <SkillCategory skills={devOpsSkills} icon={Cloud} title="DevOps & Cloud Technologies" />
        </TabsContent>
        
        <TabsContent value="mobile" className="mt-6">
          <SkillCategory skills={mobileSkills} icon={Smartphone} title="Mobile Development" />
        </TabsContent>
        
        <TabsContent value="testing" className="mt-6">
          <SkillCategory skills={testingSkills} icon={Shield} title="Testing & Quality Assurance" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Skills;
