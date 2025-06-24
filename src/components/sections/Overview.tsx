
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Code2, 
  Calendar, 
  Award, 
  Users,
  Star,
  GitBranch,
  Activity
} from 'lucide-react';

const Overview: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '4+', icon: Calendar, color: 'text-blue-500', trend: '+12%' },
    { label: 'Projects Completed', value: '25+', icon: Code2, color: 'text-green-500', trend: '+8%' },
    { label: 'Technologies', value: '15+', icon: Award, color: 'text-purple-500', trend: '+15%' },
    { label: 'Certifications', value: '6+', icon: Star, color: 'text-orange-500', trend: '+3%' }
  ];

  const recentActivity = [
    { action: 'Completed ProDev Back-End Developer certification', time: '2 days ago', type: 'certification' },
    { action: 'Updated Portfolio of Evidence project', time: '1 week ago', type: 'project' },
    { action: 'Started Higher Certificate in Software Development', time: '2 weeks ago', type: 'education' },
    { action: 'Enhanced SQL optimization skills', time: '3 weeks ago', type: 'skill' }
  ];

  const topSkills = [
    { name: 'React.js', level: 92, category: 'Frontend' },
    { name: 'Python/Django', level: 90, category: 'Backend' },
    { name: 'SQL/MySQL', level: 92, category: 'Database' },
    { name: 'Angular', level: 88, category: 'Frontend' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">{stat.trend}</span>
                  </div>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Professional Summary */}
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white flex items-center">
              <Users className="h-5 w-5 mr-2 text-violet-500" />
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Dynamic and detail-oriented Full Stack Developer with <strong>4+ years of proven experience</strong> in 
              frontend development (Angular, React.js), backend integration (PHP, Laravel, Django, Python), and SQL database design.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                Full Stack
              </Badge>
              <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                Agile
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">
                Problem Solving
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white flex items-center">
              <Activity className="h-5 w-5 mr-2 text-violet-500" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'certification' ? 'bg-orange-500' :
                    activity.type === 'project' ? 'bg-blue-500' :
                    activity.type === 'education' ? 'bg-green-500' : 'bg-purple-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-900 dark:text-white">{activity.action}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Skills */}
      <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-white flex items-center">
            <GitBranch className="h-5 w-5 mr-2 text-violet-500" />
            Top Skills Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-900 dark:text-white">{skill.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                <Progress value={skill.level} className="h-2" />
                <p className="text-xs text-slate-500 dark:text-slate-400">{skill.level}% proficiency</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
