import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Label } from '@/app/components/ui/label';
import { AlertCircle, CheckCircle2, UserCheck, Heart, Stethoscope, GraduationCap, Users, MessageSquare, Shield } from 'lucide-react';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
//import ctnRolesImage from 'figma:asset/85a8925c470d1034e71f65d6aed16bfd6006637b.png';

interface Module3Props {
  onComplete: () => void;
}

export default function Module3({ onComplete }: Module3Props) {
  const [currentTab, setCurrentTab] = useState('content');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    {
      id: 1,
      question: "What type of professional background is required for a Clinical Trial Navigator (CTN)?",
      options: [
        "A) Business administration background",
        "B) Clinically trained individual with medical background",
        "C) Marketing and communications",
        "D) No specific background required"
      ],
      correct: "B",
      explanation: "A CTN must be a clinically trained individual with a medical background who is responsible for identifying and addressing barriers to clinical trial enrollment and retention."
    },
    {
      id: 2,
      question: "In the 'Barriers to Care' role, what is a primary responsibility of the navigator?",
      options: [
        "A) Prescribing medications",
        "B) Screening patients for barriers to enrollment and retention",
        "C) Conducting laboratory tests",
        "D) Managing the research budget"
      ],
      correct: "B",
      explanation: "In the Barriers to Care role, navigators screen patients for barriers to enrollment and retention, and arrange transportation for research appointments."
    },
    {
      id: 3,
      question: "How many general roles and responsibilities are outlined for Clinical Trial Navigators?",
      options: [
        "A) 4 roles",
        "B) 5 roles",
        "C) 6 roles",
        "D) 8 roles"
      ],
      correct: "C",
      explanation: "There are 6 general roles: Barriers to Care, Education, Psychosocial Support, Communication/Care Coordination, and Advocacy."
    },
    {
      id: 4,
      question: "What is a key education responsibility of navigators?",
      options: [
        "A) Teaching medical students",
        "B) Educating patients about the trial process, including purpose, risks, and benefits",
        "C) Only providing written materials",
        "D) Conducting pharmaceutical research"
      ],
      correct: "B",
      explanation: "Navigators educate patients and the healthcare team about the trial process, including the purpose of clinical trials, risks and benefits of participation, and receiving treatment through a trial."
    },
    {
      id: 5,
      question: "In providing psychosocial support, what do navigators address?",
      options: [
        "A) Only physical health concerns",
        "B) Fears, concerns, and anxiety about clinical trials",
        "C) Financial investments",
        "D) Legal matters only"
      ],
      correct: "B",
      explanation: "Navigators provide psychosocial support by addressing patients' fears, concerns, and anxiety about clinical trials, helping them feel more comfortable with participation."
    },
    {
      id: 6,
      question: "Who do navigators serve as a liaison between?",
      options: [
        "A) Only between patients and doctors",
        "B) Research teams, care teams, and patients",
        "C) Only pharmaceutical companies and patients",
        "D) Insurance companies and hospitals"
      ],
      correct: "B",
      explanation: "Navigators serve as a liaison between research teams, care teams, and patients, connecting patients with trial coordinators and research staff while helping arrange appointments."
    },
    {
      id: 7,
      question: "What is included in the advocacy role of clinical navigators?",
      options: [
        "A) Only financial advocacy",
        "B) Identifying resources to aid trial participants",
        "C) Voting on behalf of patients",
        "D) Making medical decisions for patients"
      ],
      correct: "B",
      explanation: "In the advocacy role, navigators identify resources to aid trial participants, acting as advocates for patients' needs throughout their trial participation."
    },
    {
      id: 8,
      question: "According to the routine scope of work, navigators should coordinate multidisciplinary care from when?",
      options: [
        "A) Only during treatment",
        "B) After diagnosis is confirmed",
        "C) From the time of diagnosis throughout treatment",
        "D) Only at the end of the trial"
      ],
      correct: "C",
      explanation: "One of the nine routine responsibilities is to coordinate multidisciplinary care from the time of diagnosis throughout treatment, ensuring comprehensive support."
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

  const roles = [
    {
      title: 'Barriers to Care',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      responsibilities: [
        'Screen patients for barriers to enrollment and retention',
        'Arrange transportation for research appointments',
        'Identify and address logistical challenges'
      ]
    },
    {
      title: 'Education',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
      responsibilities: [
        'Educate patients and healthcare teams about the trial process',
        'Explain the purpose of clinical trials clearly',
        'Address myths and fears about clinical trials',
        'Communicate risks and benefits of participation'
      ]
    },
    {
      title: 'Psychosocial Support',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      responsibilities: [
        'Address fears, concerns, and anxiety about clinical trials',
        'Provide emotional support throughout the journey',
        'Help patients cope with the trial experience'
      ]
    },
    {
      title: 'Communication & Care Coordination',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-500',
      responsibilities: [
        'Serve as liaison between research teams, care teams, and patients',
        'Connect patients with trial coordinators and research staff',
        'Help arrange appointments and coordinate schedules',
        'Quickly schedule surgical and medical consults as required'
      ]
    },
    {
      title: 'Advocacy',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      responsibilities: [
        'Identify resources to aid trial participants',
        'Advocate for patient needs and concerns',
        'Ensure patients have access to necessary support'
      ]
    }
  ];

  const scopeOfWork = [
    'Provide education and support to the patient and family',
    'Assess barriers to care and provide intervention resources',
    'Participate in the psychosocial distress screening process',
    'Identify the special needs of the patient and delegate to appropriate support staff',
    'Enhance the patient\'s understanding of treatment options available',
    'Coordinate multidisciplinary care from the time of diagnosis throughout treatment',
    'Improve knowledge of resources for survivors',
    'Serve as a resource for the community on health issues, prevention, screening, treatment, and research',
    'Facilitate patient care plan recommendations by the physician'
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="border-2 border-orange-500 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="flex items-center gap-3 mb-2">
            <UserCheck className="w-8 h-8" />
            <Badge variant="secondary" className="text-lg px-3 py-1">Module 3</Badge>
          </div>
          <CardTitle className="text-3xl">Navigator Roles & Responsibilities</CardTitle>
          <CardDescription className="text-orange-100">
            What it takes to be an exceptional clinical navigator
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
              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="w-6 h-6 text-orange-600" />
                    Who Is a Clinical Trial Navigator? 🩺
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="bg-orange-100 border-orange-300">
                    <UserCheck className="h-4 w-4 text-orange-600" />
                    <AlertDescription className="text-orange-900">
                      <strong>Definition:</strong> A CTN is a <strong>clinically trained individual</strong> who 
                      is responsible for identifying and addressing barriers to timely and appropriate clinical 
                      trial enrollment and retention. The CTN guides the patient through the clinical trial 
                      continuum from pre-screening through trial completion.
                    </AlertDescription>
                  </Alert>

                  <p className="text-lg">
                    As a clinical navigator, you act as a <strong>central point of contact</strong> for patients 
                    and coordinate all components involved in a clinical trial. Your medical background allows 
                    you to work effectively with:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                      <p className="font-semibold mb-2">🏥 Clinical Teams</p>
                      <p className="text-sm text-slate-600">
                        Oncologists, nurses, medical professionals, and radiation specialists
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                      <p className="font-semibold mb-2">🤝 Support Services</p>
                      <p className="text-sm text-slate-600">
                        Social workers, patient education, community support, and financial assistance
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-5 rounded-lg">
                    <p className="font-semibold text-lg mb-2">💫 You Are The Hub</p>
                    <p>
                      More specifically, the nurse navigator acts as a <strong>critical member of the 
                      multidisciplinary team</strong>. This person has a clinical background and is essential 
                      to coordinating all aspects of patient care throughout their trial journey!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* The 6 Core Roles */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">The 5 Core Roles of Clinical Navigators 🎭</CardTitle>
                  <CardDescription>
                    Every day, you'll wear multiple hats to support your patients
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {roles.map((role, index) => {
                    const Icon = role.icon;
                    return (
                      <div key={index} className={`bg-gradient-to-r ${role.color} p-1 rounded-lg`}>
                        <div className="bg-white p-4 rounded-lg">
                          <div className="flex items-start gap-3 mb-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${role.color}`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-xl mb-2">{role.title}</h3>
                              <ul className="space-y-2">
                                {role.responsibilities.map((resp, idx) => (
                                  <li key={idx} className="flex gap-2 text-slate-700">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Routine Scope of Work */}
              <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="text-2xl">Your Routine Scope of Work 📋</CardTitle>
                  <CardDescription className="text-lg">
                    Nine core responsibilities that define your daily impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {scopeOfWork.map((item, index) => (
                      <div key={index} className="flex gap-3 p-3 bg-white rounded-lg border-2 border-purple-200">
                        <Badge className="bg-purple-500 h-fit">{index + 1}</Badge>
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-purple-600 text-white p-4 rounded-lg">
                    <p className="font-semibold mb-2">🌟 Remember:</p>
                    <p className="text-sm">
                      These responsibilities work together to create a comprehensive support system for every 
                      patient. You're not just managing logistics—you're changing lives and making groundbreaking 
                      research accessible to everyone!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Visual Reference */}
              <Card className="border-2 border-blue-300">
                <CardHeader>
                  <CardTitle>📊 Clinical Trial Navigator Role Reference</CardTitle>
                  <CardDescription>
                    Your complete guide to navigator roles and activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={ctnRolesImage} 
                    alt="Clinical Trial Navigator Roles and Responsibilities"
                    className="w-full rounded-lg border-2 border-slate-200 shadow-lg"
                  />
                  <p className="text-sm text-slate-600 mt-3 italic">
                    💡 <strong>Pro Tip:</strong> Keep this reference handy—it outlines the full scope of your role!
                  </p>
                </CardContent>
              </Card>

              {/* Skills & Qualities */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Essential Skills & Qualities 💪
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-green-900">Clinical Competencies</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex gap-2">
                          <span>✓</span>
                          <span>Strong medical/nursing background</span>
                        </li>
                        <li className="flex gap-2">
                          <span>✓</span>
                          <span>Understanding of research protocols</span>
                        </li>
                        <li className="flex gap-2">
                          <span>✓</span>
                          <span>Knowledge of clinical trial phases</span>
                        </li>
                        <li className="flex gap-2">
                          <span>✓</span>
                          <span>Ability to assess patient needs</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-green-900">Interpersonal Skills</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex gap-2">
                          <span>✓</span>
                          <span>Exceptional communication abilities</span>
                        </li>
                        <li className="flex gap-2">
                          <span>✓</span>
                          <span>Cultural sensitivity and awareness</span>
                        </li>
                        <li className="flex gap-2">
                          <span>✓</span>
                          <span>Empathy and active listening</span>
                        </li>
                        <li className="flex gap-2">
                          <span>✓</span>
                          <span>Problem-solving mindset</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Success Story Example */}
              <Card className="border-2 border-pink-300 bg-gradient-to-br from-pink-50 to-rose-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-pink-600" />
                    Putting It All Together: A Day in the Life 📅
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                    <p className="font-semibold mb-2">Morning (9 AM - 12 PM)</p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Review new patient referrals and screen for eligibility</li>
                      <li>• Call three patients to schedule initial consultations</li>
                      <li>• Coordinate transportation for a patient with mobility issues</li>
                      <li>• Meet with research team about upcoming protocol</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                    <p className="font-semibold mb-2">Afternoon (1 PM - 5 PM)</p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Conduct initial patient education session explaining trial process</li>
                      <li>• Address fears and concerns with a nervous patient</li>
                      <li>• Arrange childcare support for single parent participant</li>
                      <li>• Follow up with patients on adverse events and vital signs</li>
                      <li>• Document all navigation activities in EHR system</li>
                    </ul>
                  </div>

                  <p className="text-sm italic text-slate-600 bg-white p-3 rounded border border-pink-300">
                    💝 Every day is different, but the mission remains the same: remove barriers, provide support, 
                    and ensure every patient has equal access to potentially life-saving research!
                  </p>
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
                      <span>CTNs must be clinically trained professionals with medical backgrounds</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Navigators perform 5 core roles: Barriers to Care, Education, Psychosocial Support, Communication/Care Coordination, and Advocacy</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Your routine scope includes 9 key responsibilities from education to care coordination</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>You serve as the central point of contact and coordinate the multidisciplinary team</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Success requires both clinical competence and strong interpersonal skills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button 
                  size="lg"
                  onClick={() => setCurrentTab('quiz')}
                  className="bg-gradient-to-r from-orange-600 to-red-600"
                >
                  Ready for the Quiz? 🎯
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
                    <Alert className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                      <AlertDescription className="text-center">
                        <p className="text-lg font-semibold mb-2">Module Complete! 🎊</p>
                        <p>You've mastered Navigator Roles & Responsibilities. Moving you back to the course overview...</p>
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
