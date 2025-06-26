
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';
import { Zap, Target } from 'lucide-react';

const SkillsRadar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('overall');

  const skillCategories = {
    overall: [
      { skill: 'Frontend', level: 92, fullMark: 100 },
      { skill: 'Backend', level: 88, fullMark: 100 },
      { skill: 'Database', level: 85, fullMark: 100 },
      { skill: 'DevOps', level: 75, fullMark: 100 },
      { skill: 'Mobile', level: 82, fullMark: 100 },
      { skill: 'Testing', level: 87, fullMark: 100 },
    ],
    frontend: [
      { skill: 'React', level: 92, fullMark: 100 },
      { skill: 'Angular', level: 88, fullMark: 100 },
      { skill: 'Vue', level: 75, fullMark: 100 },
      { skill: 'TypeScript', level: 90, fullMark: 100 },
      { skill: 'CSS/SASS', level: 95, fullMark: 100 },
      { skill: 'Responsive', level: 92, fullMark: 100 },
    ],
    backend: [
      { skill: 'Python', level: 90, fullMark: 100 },
      { skill: 'PHP', level: 85, fullMark: 100 },
      { skill: 'Node.js', level: 80, fullMark: 100 },
      { skill: 'APIs', level: 88, fullMark: 100 },
      { skill: 'GraphQL', level: 75, fullMark: 100 },
      { skill: 'Microservices', level: 70, fullMark: 100 },
    ]
  };

  const categoryButtons = [
    { id: 'overall', label: 'Overall', color: 'bg-violet-500' },
    { id: 'frontend', label: 'Frontend', color: 'bg-blue-500' },
    { id: 'backend', label: 'Backend', color: 'bg-green-500' },
  ];

  return (
    <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-900 dark:text-white flex items-center">
            <Target className="h-5 w-5 mr-2 text-violet-500" />
            Skills Radar
          </CardTitle>
          <Badge variant="secondary" className="bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300">
            Interactive
          </Badge>
        </div>
        
        <div className="flex space-x-2 mt-4">
          {categoryButtons.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`${selectedCategory === category.id ? category.color : ''} hover:${category.color}`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={skillCategories[selectedCategory]}>
              <PolarGrid className="stroke-slate-200 dark:stroke-slate-700" />
              <PolarAngleAxis 
                dataKey="skill" 
                className="text-slate-600 dark:text-slate-400 text-sm"
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                className="text-slate-400 dark:text-slate-500 text-xs"
              />
              <Radar
                name="Skills"
                dataKey="level"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.2}
                strokeWidth={2}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Skill breakdown */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          {skillCategories[selectedCategory].map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {skill.skill}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-violet-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400 w-8">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsRadar;
