import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Progress } from '@/app/components/ui/progress';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { BookOpen, Award, Users, Target, BarChart3, CheckCircle2, Lock } from 'lucide-react';
import Module1 from '@/app/components/Module1';
import Module2 from '@/app/components/Module2';
import Module3 from '@/app/components/Module3';
import Module4 from '@/app/components/Module4';
import Module5 from '@/app/components/Module5';
import InstructorGuide from '@/app/components/InstructorGuide';
import logoImage from 'figma:asset/8626dd8a35e768b09f1e50494092357b2084e0b6.png';

export default function App() {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [completedModules, setCompletedModules] = useState<Set<number>>(new Set());
  const [viewMode, setViewMode] = useState<'student' | 'instructor'>('student');

  const modules = [
    {
      id: 1,
      title: 'Clinical Trials 101',
      description: 'Master the fundamentals of clinical research and trial phases',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      duration: '45 min + 15 min quiz'
    },
    {
      id: 2,
      title: 'TruVision Navigation Model',
      description: 'Discover our unique approach to patient navigation',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      duration: '45 min + 15 min quiz'
    },
    {
      id: 3,
      title: 'Navigator Roles & Responsibilities',
      description: 'Learn what makes a great clinical navigator',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      duration: '45 min + 15 min quiz'
    },
    {
      id: 4,
      title: 'Patient Navigation Activities',
      description: 'Practical skills for supporting patients through trials',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      duration: '45 min + 15 min quiz'
    },
    {
      id: 5,
      title: 'Metrics & Performance Excellence',
      description: 'Track success and drive continuous improvement',
      icon: BarChart3,
      color: 'from-indigo-500 to-blue-500',
      duration: '45 min + 15 min quiz'
    }
  ];

  const completionPercentage = (completedModules.size / modules.length) * 100;

  const handleModuleComplete = (moduleId: number) => {
    setCompletedModules(prev => new Set([...prev, moduleId]));
    setActiveModule(null);
  };

  const renderModuleContent = () => {
    if (!activeModule) return null;
    
    const moduleNum = parseInt(activeModule.replace('module', ''));
    
    switch (moduleNum) {
      case 1:
        return <Module1 onComplete={() => handleModuleComplete(1)} />;
      case 2:
        return <Module2 onComplete={() => handleModuleComplete(2)} />;
      case 3:
        return <Module3 onComplete={() => handleModuleComplete(3)} />;
      case 4:
        return <Module4 onComplete={() => handleModuleComplete(4)} />;
      case 5:
        return <Module5 onComplete={() => handleModuleComplete(5)} />;
      default:
        return null;
    }
  };

  if (activeModule) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto py-8 px-4">
          <Button 
            onClick={() => setActiveModule(null)}
            variant="outline"
            className="mb-6"
          >
            ← Back to Course Overview
          </Button>
          {renderModuleContent()}
        </div>
      </div>
    );
  }

  if (viewMode === 'instructor') {
    return <InstructorGuide onBack={() => setViewMode('student')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto py-12 px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img src={logoImage} alt="TruVision Clinical Research" className="h-24" />
          </div>
          <h1 className="text-5xl mb-4">
            TruVision Clinical Navigator Training
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Welcome to your comprehensive training program! Master the art of clinical navigation 
            and become an essential bridge between patients and groundbreaking research. 🚀
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 border-2 border-blue-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Your Training Progress</CardTitle>
                <CardDescription>
                  {completedModules.size} of {modules.length} modules completed
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setViewMode('instructor')}
                  className="gap-2"
                >
                  <Award className="w-4 h-4" />
                  Instructor Guide
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={completionPercentage} className="h-3 mb-2" />
            <p className="text-sm text-slate-600 text-center">
              {completionPercentage === 100 ? (
                <span className="text-green-600 font-semibold flex items-center justify-center gap-2">
                  <Award className="w-5 h-5" />
                  Congratulations! You've completed all modules! 🎉
                </span>
              ) : (
                `${completionPercentage.toFixed(0)}% Complete - Keep going!`
              )}
            </p>
          </CardContent>
        </Card>

        {/* Module Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((module) => {
            const Icon = module.icon;
            const isCompleted = completedModules.has(module.id);
            const isLocked = module.id > 1 && !completedModules.has(module.id - 1);
            
            return (
              <Card 
                key={module.id}
                className={`relative overflow-hidden transition-all hover:shadow-xl ${
                  isCompleted ? 'border-2 border-green-500' : 
                  isLocked ? 'opacity-60' : 'hover:scale-105'
                }`}
              >
                {isCompleted && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-green-500 gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Complete
                    </Badge>
                  </div>
                )}
                
                {isLocked && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="gap-1">
                      <Lock className="w-3 h-3" />
                      Locked
                    </Badge>
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${module.color}`} />
                
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${module.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline">Module {module.id}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <span>⏱️ {module.duration}</span>
                    </div>
                    
                    <Button 
                      className="w-full"
                      onClick={() => setActiveModule(`module${module.id}`)}
                      disabled={isLocked}
                    >
                      {isCompleted ? 'Review Module' : isLocked ? 'Complete Previous Module' : 'Start Module'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Learning Objectives */}
        <Card className="border-2 border-purple-200 bg-gradient-to-br from-white to-purple-50">
          <CardHeader>
            <CardTitle className="text-2xl">What You'll Learn 🎯</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-purple-900">Clinical Research Fundamentals</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Understanding the 4 phases of clinical trials</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>The critical importance of diverse patient populations</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Regulatory requirements and FDA compliance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 text-blue-900">Navigation Excellence</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>TruVision's barrier-personalized approach</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Building trust with diverse communities</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Measuring success through key performance metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
