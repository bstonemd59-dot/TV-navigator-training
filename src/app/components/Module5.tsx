import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Label } from '@/app/components/ui/label';
import { AlertCircle, CheckCircle2, BarChart3, TrendingUp, Target, Award } from 'lucide-react';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
//import metricsImage from 'figma:asset/da436306a4f5fd02bffd4e9438c09b6878455fd3.png';

interface Module5Props {
  onComplete: () => void;
}

export default function Module5({ onComplete }: Module5Props) {
  const [currentTab, setCurrentTab] = useState('content');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the first clinical navigator metric measured?",
      options: [
        "A) Number of patients screened",
        "B) Patient Experience / Protocol Adherence - Treatment compliance",
        "C) Financial barriers only",
        "D) Number of phone calls made"
      ],
      correct: "B",
      explanation: "The first metric measured is Patient Experience / Protocol Adherence, which tracks treatment compliance—ensuring patients stay on track with their trial protocols."
    },
    {
      id: 2,
      question: "What does SDOH stand for in the context of navigator metrics?",
      options: [
        "A) Standard Delivery of Healthcare",
        "B) Social Determinants of Health",
        "C) Systematic Documentation of History",
        "D) Statistical Data on Hospitalization"
      ],
      correct: "B",
      explanation: "SDOH stands for Social Determinants of Health, which are the conditions in environments where people live, learn, work, and play that affect health outcomes."
    },
    {
      id: 3,
      question: "According to the metrics, how is navigator intervention frequency measured?",
      options: [
        "A) Only weekly interventions",
        "B) Number of NAV interventions per week/month with a patient (documented via phone, text, or visit)",
        "C) Annual reviews only",
        "D) Only in-person visits"
      ],
      correct: "B",
      explanation: "Navigator interventions are measured by the number of interventions per week/month with a patient to maintain protocol compliance, documented through various communication types (phone, text, or visit)."
    },
    {
      id: 4,
      question: "What are the specific 'barriers to care' that navigators list according to Impact of SDOH?",
      options: [
        "A) Only financial barriers",
        "B) Financial, Insurance, Transportation, Communication/Language, Knowledge deficits, Employment/Disability, Psychosocial, Childcare, Physical mobility, Complex care coordination",
        "C) Only transportation issues",
        "D) Medical conditions only"
      ],
      correct: "B",
      explanation: "The NAV will list specific barriers including: Financial, Insurance, Transportation, Communication/Language, Knowledge deficits, Employment/Disability, Psychosocial (fear, anxiety, etc.), Childcare, Physical (mobility issues), and Complex care coordination."
    },
    {
      id: 5,
      question: "What is measured under 'Patient recruitment through NAV engagement'?",
      options: [
        "A) Only the number of patients contacted",
        "B) Number of patients engaged, number of patients educated on CT's & the protocol per month (NAV's patient accrual rate)",
        "C) Only patients who complete trials",
        "D) Geographic distribution only"
      ],
      correct: "B",
      explanation: "This metric measures the number of patients engaged, the number educated on clinical trials and protocols per month, which represents the Navigator's patient accrual rate."
    },
    {
      id: 6,
      question: "How is the screening process measured in navigator metrics?",
      options: [
        "A) Only eligible patients",
        "B) Number of patients screened, number of patients meeting inclusion criteria and number of patients excluded",
        "C) Only phone screenings",
        "D) Final enrollment numbers only"
      ],
      correct: "B",
      explanation: "The screening metric comprehensively tracks the number of patients screened, the number meeting inclusion criteria, AND the number excluded, providing a complete picture of the screening funnel."
    },
    {
      id: 7,
      question: "What does 'Number of patients being navigated (coached)' measure?",
      options: [
        "A) Only new patients",
        "B) Patients being navigated (coached) and retained in the trial",
        "C) Patients who dropped out",
        "D) Only patients in Phase I trials"
      ],
      correct: "B",
      explanation: "This metric measures the number of patients being actively navigated (coached) and successfully retained in the trial, demonstrating the navigator's ongoing impact."
    },
    {
      id: 8,
      question: "How is navigator productivity measured according to the metrics?",
      options: [
        "A) Hours worked per week",
        "B) Number of documented phone calls, emails, and consults objectively and by each NAV",
        "C) Only successful enrollments",
        "D) Patient satisfaction scores only"
      ],
      correct: "B",
      explanation: "Navigator productivity is measured objectively through the number of documented phone calls, emails, and consults, tracked both overall and by each individual navigator."
    }
  ];

  const handleQuizSubmit = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
    
    if (score >= 6) {
      setTimeout(() => {
        onComplete();
      }, 3000);
    }
  };

  const coreMetrics = [
    {
      number: 1,
      title: 'Patient Experience / Protocol Adherence',
      description: 'Treatment compliance - Ensuring patients stay on track',
      icon: '👤',
      color: 'from-blue-500 to-cyan-500',
      details: 'Measures how well patients adhere to trial protocols and their overall experience'
    },
    {
      number: 2,
      title: 'Impact of SDOH on CT Participation',
      description: 'NAV will list specific "barriers to care" prior to each scheduled protocol contact',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500',
      barriers: [
        'Financial',
        'Insurance',
        'Transportation',
        'Communication/Language',
        'Knowledge deficits',
        'Employment/Disability',
        'Psychosocial (fear, anxiety, etc.)',
        'Childcare',
        'Physical (mobility issues)',
        'Complex care coordination'
      ]
    },
    {
      number: 3,
      title: 'Navigator Intervention Frequency',
      description: 'Number of NAV interventions per week/month with a patient to maintain protocol compliance',
      icon: '📞',
      color: 'from-green-500 to-emerald-500',
      details: 'Document type of communication - phone, text, or visit'
    },
    {
      number: 4,
      title: 'Patient Recruitment Through NAV Engagement',
      description: 'Number of patients engaged, number of patients educated on CTs & the protocol per month',
      icon: '📈',
      color: 'from-orange-500 to-red-500',
      details: '(NAV\'s patient accrual rate)'
    },
    {
      number: 5,
      title: 'Screening Metrics',
      description: 'Number of patients screened, number of patients meeting inclusion criteria and number of patients excluded',
      icon: '🔍',
      color: 'from-indigo-500 to-purple-500',
      details: 'Comprehensive tracking of the screening funnel'
    },
    {
      number: 6,
      title: 'Patients Being Navigated (Coached)',
      description: 'Number of patients being navigated (coached) and retained in the trial',
      icon: '🤝',
      color: 'from-pink-500 to-rose-500',
      details: 'Demonstrates ongoing navigator impact and retention'
    },
    {
      number: 7,
      title: 'Navigator Productivity',
      description: 'Number of documented phone calls, emails, and consults objectively and by each NAV',
      icon: '📊',
      color: 'from-teal-500 to-cyan-500',
      details: 'Tracks workload and engagement levels across the team'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="border-2 border-indigo-500 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-8 h-8" />
            <Badge variant="secondary" className="text-lg px-3 py-1">Module 5</Badge>
          </div>
          <CardTitle className="text-3xl">Metrics & Performance Excellence</CardTitle>
          <CardDescription className="text-indigo-100">
            Measuring success and driving continuous improvement
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs value={currentTab} onValueChange={setCurrentTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="content">📚 Learning Content</TabsTrigger>
              <TabsTrigger value="quiz">✅ Knowledge Check</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-6">
              {/* Introduction */}
              <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                    Why Metrics Matter 📊
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    Welcome to your final module! You've learned <em>what</em> clinical navigation is and 
                    <em>how</em> to do it. Now let's talk about measuring <strong>success</strong>. Metrics 
                    aren't just numbers—they're the proof that your work is making a real difference!
                  </p>
                  
                  <Alert className="bg-indigo-100 border-indigo-300">
                    <Target className="h-4 w-4 text-indigo-600" />
                    <AlertDescription className="text-indigo-900">
                      <strong>Important Note:</strong> This document is based on the AONN Academy of Oncology 
                      Nurse & Patient Navigators: Standardized Metrics Source Document and The ACS AONN Navigation 
                      Metrics Toolkit. It's a living document that will evolve based on team input and trial scope!
                    </AlertDescription>
                  </Alert>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                      <p className="font-semibold mb-2 text-center">📈 Demonstrate Value</p>
                      <p className="text-sm text-slate-600 text-center">
                        Show sponsors and PIs the tangible impact of navigation
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                      <p className="font-semibold mb-2 text-center">🎯 Identify Gaps</p>
                      <p className="text-sm text-slate-600 text-center">
                        Spot areas for improvement and optimize your approach
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                      <p className="font-semibold mb-2 text-center">⭐ Celebrate Wins</p>
                      <p className="text-sm text-slate-600 text-center">
                        Recognize achievements and build team morale
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-5 rounded-lg">
                    <p className="font-semibold text-lg mb-2">💡 Remember:</p>
                    <p>
                      Each metric measured will be based on the protocol and scope of a given clinical trial. 
                      What you measure might vary, but the principles of tracking, analyzing, and improving 
                      remain constant!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* The 7 Core Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">The 7 Core Clinical Navigator Metrics 🎯</CardTitle>
                  <CardDescription>
                    These standardized metrics track your impact and drive excellence
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  {coreMetrics.map((metric) => (
                    <div key={metric.number} className={`bg-gradient-to-r ${metric.color} p-1 rounded-lg`}>
                      <div className="bg-white p-5 rounded-lg">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="flex flex-col items-center gap-2">
                            <Badge className={`bg-gradient-to-br ${metric.color} text-xl px-3 py-2`}>
                              {metric.number}
                            </Badge>
                            <span className="text-3xl">{metric.icon}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl mb-2">{metric.title}</h3>
                            <p className="text-slate-700 mb-2">{metric.description}</p>
                            
                            {metric.details && (
                              <p className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded">
                                💡 {metric.details}
                              </p>
                            )}
                            
                            {metric.barriers && (
                              <div className="mt-3">
                                <p className="text-sm font-semibold mb-2">Specific Barriers Tracked:</p>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {metric.barriers.map((barrier, idx) => (
                                    <div key={idx} className="flex gap-2 text-sm text-slate-700 bg-slate-50 p-2 rounded">
                                      <span className="text-purple-600">•</span>
                                      <span>{barrier}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Visual Reference */}
              <Card className="border-2 border-purple-300">
                <CardHeader>
                  <CardTitle>📊 TruVision Clinical Navigation Metrics Reference</CardTitle>
                  <CardDescription>
                    Your complete metrics toolkit at a glance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={metricsImage} 
                    alt="TruVision Clinical Navigation Metrics"
                    className="w-full rounded-lg border-2 border-slate-200 shadow-lg"
                  />
                  <p className="text-sm text-slate-600 mt-3 italic">
                    💡 <strong>Pro Tip:</strong> This reference shows how all metrics work together as a complete system!
                  </p>
                </CardContent>
              </Card>

              {/* Practical Application */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Putting Metrics into Practice 🛠️
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-5 rounded-lg border-2 border-green-200">
                    <h4 className="font-semibold text-lg mb-3">📝 Daily Tracking</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Document every patient interaction immediately (phone, text, email, visit)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Record barriers identified during each contact</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Track interventions provided and their outcomes</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Update patient status in EHR system (screening, enrolled, navigating, retained)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg border-2 border-blue-200">
                    <h4 className="font-semibold text-lg mb-3">📅 Weekly Reviews</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>Calculate your patient accrual rate (new patients engaged and educated)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>Review protocol adherence for all active patients</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>Identify patterns in barriers across your patient population</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>Check retention rates and follow up on any concerning drops</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg border-2 border-purple-200">
                    <h4 className="font-semibold text-lg mb-3">📊 Monthly Analysis</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Compile screening funnel data (screened → eligible → enrolled)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Calculate average interventions per patient per month</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Review productivity metrics (calls, emails, consults) by navigator</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>Present findings to research team with recommendations</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Success Stories */}
              <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-red-50">
                <CardHeader>
                  <CardTitle>🌟 Metrics in Action: Real Impact Stories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold mb-2">📈 Story 1: Identifying Transportation Gaps</p>
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Situation:</strong> Monthly SDOH metrics showed transportation as the #1 barrier, 
                      affecting 45% of patients in a breast cancer trial.
                    </p>
                    <p className="text-sm text-green-700">
                      <strong>Action & Impact:</strong> Navigator team partnered with a local rideshare company 
                      for trial-funded transportation. Result: Protocol adherence improved from 72% to 91% over 
                      3 months, and retention increased by 23%! 🚗✨
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="font-semibold mb-2">💡 Story 2: Optimizing Navigator Workload</p>
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Situation:</strong> Productivity metrics revealed Navigator A was handling 50+ 
                      patients while Navigator B had only 20, causing burnout and uneven service quality.
                    </p>
                    <p className="text-sm text-green-700">
                      <strong>Action & Impact:</strong> Management redistributed patient load more evenly and 
                      hired a third navigator. Team satisfaction increased, and average intervention frequency 
                      improved from 2.1 to 4.5 contacts per patient per month! ⚖️🎯
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-semibold mb-2">🎊 Story 3: Proving Navigator Value</p>
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Situation:</strong> A sponsor questioned the cost-effectiveness of the navigation 
                      program for a Phase III cardiovascular trial.
                    </p>
                    <p className="text-sm text-green-700">
                      <strong>Action & Impact:</strong> Navigators presented 12-month metrics showing: 89% 
                      retention rate (vs. 65% industry average), 95% protocol adherence, and successful 
                      enrollment of 42% diverse populations (vs. 18% trial average). Program funding not only 
                      continued but expanded to 3 additional trials! 📊🏆
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Using Data for Improvement */}
              <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-pink-600" />
                    Continuous Improvement Cycle 🔄
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg mb-4">
                    Metrics aren't just for reporting—they're your roadmap to excellence! Use this cycle:
                  </p>

                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <Badge className="bg-blue-500 text-lg px-3 py-2">1</Badge>
                      <div className="flex-1">
                        <p className="font-semibold">📊 Collect Data</p>
                        <p className="text-sm text-slate-600">Track all 7 core metrics consistently</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Badge className="bg-purple-500 text-lg px-3 py-2">2</Badge>
                      <div className="flex-1">
                        <p className="font-semibold">🔍 Analyze Trends</p>
                        <p className="text-sm text-slate-600">Look for patterns, outliers, and opportunities</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Badge className="bg-green-500 text-lg px-3 py-2">3</Badge>
                      <div className="flex-1">
                        <p className="font-semibold">💡 Identify Solutions</p>
                        <p className="text-sm text-slate-600">Brainstorm improvements with your team</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Badge className="bg-orange-500 text-lg px-3 py-2">4</Badge>
                      <div className="flex-1">
                        <p className="font-semibold">🚀 Implement Changes</p>
                        <p className="text-sm text-slate-600">Test new approaches systematically</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Badge className="bg-pink-500 text-lg px-3 py-2">5</Badge>
                      <div className="flex-1">
                        <p className="font-semibold">📈 Measure Impact</p>
                        <p className="text-sm text-slate-600">Track whether changes improved outcomes</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Badge className="bg-indigo-500 text-lg px-3 py-2">6</Badge>
                      <div className="flex-1">
                        <p className="font-semibold">🔄 Repeat</p>
                        <p className="text-sm text-slate-600">Continuous improvement is a journey, not a destination!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Takeaways */}
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300">
                <CardHeader>
                  <CardTitle>🎓 Key Takeaways</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Seven core metrics track navigator impact comprehensively</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>SDOH (Social Determinants of Health) barriers must be documented prior to each contact</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Metrics include patient experience, barrier identification, intervention frequency, recruitment, screening, retention, and productivity</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Document all interactions immediately—if it's not documented, it didn't happen!</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Use data to prove value, identify gaps, and drive continuous improvement</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Metrics are a living system that adapts based on trial scope and team input</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Your tracked impact demonstrates the irreplaceable value of clinical navigation!</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button 
                  size="lg"
                  onClick={() => setCurrentTab('quiz')}
                  className="bg-gradient-to-r from-indigo-600 to-blue-600"
                >
                  Ready for the Final Quiz? 🎯
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="quiz" className="space-y-6">
              {!quizSubmitted ? (
                <>
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Answer all 8 questions to test your knowledge. You need 6 correct answers (75%) to pass. Good luck! 🍀
                    </AlertDescription>
                  </Alert>

                  {quizQuestions.map((q, index) => (
                    <Card key={q.id} className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Question {index + 1} of {quizQuestions.length}
                        </CardTitle>
                        <CardDescription className="text-base text-slate-700">
                          {q.question}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <RadioGroup
                          value={quizAnswers[q.id]}
                          onValueChange={(value) => setQuizAnswers({ ...quizAnswers, [q.id]: value })}
                        >
                          {q.options.map((option) => {
                            const optionLetter = option.charAt(0);
                            return (
                              <div key={option} className="flex items-center space-x-2 p-3 rounded hover:bg-slate-50">
                                <RadioGroupItem value={optionLetter} id={`q${q.id}-${optionLetter}`} />
                                <Label htmlFor={`q${q.id}-${optionLetter}`} className="cursor-pointer flex-1">
                                  {option}
                                </Label>
                              </div>
                            );
                          })}
                        </RadioGroup>
                      </CardContent>
                    </Card>
                  ))}

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600"
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  >
                    Submit Quiz 📝
                  </Button>
                </>
              ) : (
                <div className="space-y-6">
                  <Alert className={quizScore >= 6 ? "bg-green-50 border-green-500" : "bg-orange-50 border-orange-500"}>
                    <AlertDescription className="text-lg">
                      {quizScore >= 6 ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                          <span className="font-semibold text-green-900">
                            Congratulations! 🎉 You scored {quizScore}/{quizQuestions.length} ({Math.round((quizScore/quizQuestions.length)*100)}%)
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-6 h-6 text-orange-600" />
                          <span className="font-semibold text-orange-900">
                            You scored {quizScore}/{quizQuestions.length} ({Math.round((quizScore/quizQuestions.length)*100)}%). 
                            Review the material and try again!
                          </span>
                        </div>
                      )}
                    </AlertDescription>
                  </Alert>

                  {quizQuestions.map((q, index) => {
                    const userAnswer = quizAnswers[q.id];
                    const isCorrect = userAnswer === q.correct;
                    
                    return (
                      <Card key={q.id} className={`border-2 ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg flex-1">
                              Question {index + 1}: {q.question}
                            </CardTitle>
                            {isCorrect ? (
                              <Badge className="bg-green-500">✓ Correct</Badge>
                            ) : (
                              <Badge variant="destructive">✗ Incorrect</Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div>
                            <p className="text-sm text-slate-600">Your answer: <strong>{userAnswer}</strong></p>
                            {!isCorrect && (
                              <p className="text-sm text-green-600">Correct answer: <strong>{q.correct}</strong></p>
                            )}
                          </div>
                          <div className="bg-blue-50 p-3 rounded border border-blue-200">
                            <p className="text-sm"><strong>Explanation:</strong> {q.explanation}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}

                  {quizScore >= 6 && (
                    <Alert className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-0">
                      <AlertDescription className="text-center">
                        <p className="text-lg font-semibold mb-2">Module Complete! 🎊</p>
                        <p>You've completed all training modules! Returning to the course overview to celebrate your achievement...</p>
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}