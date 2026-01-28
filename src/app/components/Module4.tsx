import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Label } from '@/app/components/ui/label';
import { AlertCircle, CheckCircle2, Clipboard, Phone, Calendar, FileText, Clock, Target } from 'lucide-react';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
//import navigationActivitiesImage from 'figma:asset/2384bc9bc32c819b3b6af4bc5a015274f6332070.png';

interface Module4Props {
  onComplete: () => void;
}

export default function Module4({ onComplete }: Module4Props) {
  const [currentTab, setCurrentTab] = useState('content');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    {
      id: 1,
      question: "When should the Initial Contact be made with a newly diagnosed patient?",
      options: [
        "A) Within one month of diagnosis",
        "B) Within 1 (one) week of pathology diagnosis or referral from another clinic",
        "C) Only after treatment starts",
        "D) Within 48 hours following initial surgery"
      ],
      correct: "B",
      explanation: "Ideal navigation requires meeting with patients in-person to complete intake and social needs assessments within 1 week of pathology diagnosis or referral from another clinic for initial appointment."
    },
    {
      id: 2,
      question: "What is the IDEAL timeframe for communication with the healthcare team after initial consultation?",
      options: [
        "A) Within one month",
        "B) Within 48 hours following initial consultation",
        "C) Only when the patient requests it",
        "D) After treatment completion"
      ],
      correct: "B",
      explanation: "Ideal navigation requires communicating with the healthcare team by email, phone, or in-person throughout the trial, especially within 48 hours following initial consultation with any new oncologist."
    },
    {
      id: 3,
      question: "How often should navigators attempt to reach patients during active navigation care?",
      options: [
        "A) Once per month",
        "B) Only when patients call",
        "C) Once daily (one attempt/day for 3 consecutive days), including '1 in the evening' hours",
        "D) Once per week"
      ],
      correct: "C",
      explanation: "Navigators should attempt to reach patients by preferred contact method, usually including '1 in the evening' hours, following up/follow-up letter from hospital. This means once daily for 3 consecutive days with one attempt during evening hours."
    },
    {
      id: 4,
      question: "According to the minimum recommendations, when should navigators speak to patients by phone to complete intake and social needs assessment?",
      options: [
        "A) Within 1 week of diagnosis or referral",
        "B) Within 1 (one) week of initial patient consult or treatment appointment",
        "C) Within one month",
        "D) Any time before treatment"
      ],
      correct: "B",
      explanation: "The minimum recommendation is to speak to patients by phone to complete intake and social needs assessment within 1 (one) week of initial patient consult or treatment appointment."
    },
    {
      id: 5,
      question: "When should navigators track patients from diagnosis through major treatment transitions?",
      options: [
        "A) Only during surgery",
        "B) Within 1 week of diagnosis, then at intervals during treatment (at least twice during cancer treatment)",
        "C) Only at the beginning and end of treatment",
        "D) Every day throughout treatment"
      ],
      correct: "B",
      explanation: "Navigators should track patients within 1 week of diagnosis, then 2) within 1 (one) month from diagnosis to surgery, 3) from surgery to chemo, 4) from chemo to radiation, etc., with at least twice during cancer treatment as minimum."
    },
    {
      id: 6,
      question: "What is included in the 'Administrative Tasks' navigation activity?",
      options: [
        "A) Only identifying eligible patients",
        "B) Identifying eligible patients, reviewing patient information in EHR, and entering information in electronic health systems",
        "C) Only documenting navigation activities",
        "D) Only scheduling appointments"
      ],
      correct: "B",
      explanation: "Administrative Tasks include three key components: 1) Identifying eligible patients, 2) Reviewing patient information in EHR to check eligibility criteria, and 3) Entering information in electronic health systems (e.g., Epic, etc.)."
    },
    {
      id: 7,
      question: "What does 'Direct Patient Contact' navigation activity involve?",
      options: [
        "A) Only phone calls",
        "B) Only in-person meetings",
        "C) Phone calls, in-person contact, video calls, texts, and emails",
        "D) Written letters only"
      ],
      correct: "C",
      explanation: "Direct Patient Contact encompasses multiple communication methods including phone calls, in-person contact with patients and families, video calls, text messages, and emails to maintain comprehensive patient engagement."
    },
    {
      id: 8,
      question: "According to ideal navigation standards, when should navigators communicate with the current oncologist for patients on active treatment?",
      options: [
        "A) Once per year",
        "B) Within 1 week following initial consultation and at least quarterly through treatment",
        "C) Only at the end of treatment",
        "D) Every day"
      ],
      correct: "B",
      explanation: "For patients on active treatment (if patient is on chemo, radiation treatment or biologic therapy), navigators should speak to the current oncologist within 1 week following initial consultation and at least quarterly through treatment, with halfway through treatment recommended and again halfway through radiation and/or biologic therapy."
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

  const navigationActivities = [
    {
      title: 'Administrative Tasks',
      icon: Clipboard,
      color: 'from-blue-500 to-cyan-500',
      activities: [
        'Identifying eligible patients',
        'Reviewing patient information in EHR to check eligibility criteria for specific clinical trials',
        'Entering information in electronic health systems (e.g., Epic, etc.)'
      ],
      description: 'The foundation of organized, effective navigation'
    },
    {
      title: 'Documenting Navigation Activities',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      activities: [
        'Detailed documentation of all patient interactions',
        'Recording barrier assessments and interventions',
        'Maintaining comprehensive patient records in EHR',
        'Tracking navigation outcomes and follow-ups'
      ],
      description: 'Essential for continuity of care and compliance'
    },
    {
      title: 'Direct Patient Contact',
      icon: Phone,
      color: 'from-green-500 to-emerald-500',
      activities: [
        'Phone calls with patients and families',
        'In-person meetings and consultations',
        'Video calls for remote support',
        'Text messages for quick updates',
        'Email communications',
        'Follow-up letters and correspondence'
      ],
      description: 'Building relationships and providing ongoing support'
    }
  ];

  const keyTimelines = [
    {
      phase: '1. Identify Eligible Patients',
      ideal: 'Newly diagnosed patients by reviewing pathology reports within the week for initial appointment',
      minimum: 'Input eligibility criteria in required EHR system for eligibility determination',
      timeframe: 'Weekly (within one week of diagnosis or referral)'
    },
    {
      phase: '2. Initial Contact (Formally Informed of Diagnosis)',
      ideal: 'Meet with patient in-person to complete intake and social needs assessments',
      minimum: 'Speak to patient by phone to complete intake and social needs assessment',
      timeframe: 'Within 1 week of diagnosis/referral OR treatment appointment'
    },
    {
      phase: '3. Communication with Healthcare Team',
      ideal: 'Communicate with team throughout trial; within 48 hours following initial consultation with new oncologist',
      minimum: 'Communicate with healthcare team; within 1 week following initial consultation/treatment and discuss critical patient navigation issues',
      timeframe: 'Within 48 hours (ideal) or 1 week (minimum)'
    },
    {
      phase: '4. Tracking Patients Over Time',
      ideal: 'Multiple touchpoints: 1) within one week of diagnosis, 2) surgery to chemo transition, 3) chemo to radiation, 4) during/after treatment',
      minimum: 'At initial intake and within 3 months from intake',
      timeframe: 'At least twice during treatment, ideally at each care transition'
    },
    {
      phase: '5. Number of Contact Attempts to Reach Patient',
      ideal: 'Once daily (one attempt/day for 3 consecutive days), including "1 in the evening" hours',
      minimum: 'Once daily (one attempt/day for 3 consecutive days) by phone at least 3 times on different days',
      timeframe: 'Daily for 3 consecutive days with varied timing'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="border-2 border-green-500 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-8 h-8" />
            <Badge variant="secondary" className="text-lg px-3 py-1">Module 4</Badge>
          </div>
          <CardTitle className="text-3xl">Patient Navigation Activities</CardTitle>
          <CardDescription className="text-green-100">
            Practical skills and timelines for exceptional patient support
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
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-green-600" />
                    Navigation in Action: From Theory to Practice 🎯
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    Now that you understand your roles and responsibilities, it's time to get practical! 
                    This module covers the <strong>specific activities</strong> you'll perform every day 
                    and the <strong>critical timelines</strong> that ensure no patient falls through the cracks.
                  </p>
                  
                  <Alert className="bg-green-100 border-green-300">
                    <Clock className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-900">
                      <strong>Timing Matters!</strong> You'll learn both <strong>ideal navigation standards</strong> 
                      (best practices) and <strong>minimum recommendations</strong> (baseline requirements). 
                      Always strive for ideal, but never fall below minimum!
                    </AlertDescription>
                  </Alert>

                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5 rounded-lg">
                    <p className="font-semibold text-lg mb-2">🎪 Think of it like a performance...</p>
                    <p>
                      Each navigation activity has its cues and timing. Master the rhythm, and you'll provide 
                      seamless support that patients can count on. Miss a beat, and a patient might struggle 
                      unnecessarily. Let's make sure every performance is outstanding! 🌟
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Three Core Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">The Three Core Navigation Activities 📋</CardTitle>
                  <CardDescription>
                    Every day, you'll engage in these fundamental activities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {navigationActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className={`bg-gradient-to-r ${activity.color} p-1 rounded-lg`}>
                        <div className="bg-white p-5 rounded-lg">
                          <div className="flex items-start gap-4 mb-3">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${activity.color}`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-xl mb-1">{activity.title}</h3>
                              <p className="text-sm text-slate-600 italic mb-3">{activity.description}</p>
                              <ul className="space-y-2">
                                {activity.activities.map((item, idx) => (
                                  <li key={idx} className="flex gap-2 text-slate-700">
                                    <span className="text-green-600 font-bold">•</span>
                                    <span>{item}</span>
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

              {/* Critical Timelines */}
              <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Clock className="w-7 h-7 text-purple-600" />
                    Critical Navigation Timelines ⏰
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Timing is everything! Here are your essential benchmarks for each navigation phase
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  {keyTimelines.map((timeline, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg border-2 border-purple-200">
                      <div className="flex items-start gap-3 mb-4">
                        <Badge className="bg-purple-600 text-lg px-3 py-1">{index + 1}</Badge>
                        <h3 className="font-bold text-lg text-purple-900 flex-1">{timeline.phase}</h3>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                          <p className="text-xs font-semibold text-green-700 uppercase mb-1">✨ Ideal Navigation</p>
                          <p className="text-sm text-slate-700">{timeline.ideal}</p>
                        </div>
                        
                        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                          <p className="text-xs font-semibold text-orange-700 uppercase mb-1">⚡ Minimum Required</p>
                          <p className="text-sm text-slate-700">{timeline.minimum}</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <p className="text-xs font-semibold text-blue-700 uppercase mb-1">⏱️ Timeframe</p>
                        <p className="text-sm font-semibold text-blue-900">{timeline.timeframe}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Visual Reference */}
              <Card className="border-2 border-blue-300">
                <CardHeader>
                  <CardTitle>📊 Navigation Activities Reference Chart</CardTitle>
                  <CardDescription>
                    Your complete guide to ideal vs. minimum navigation standards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={navigationActivitiesImage} 
                    alt="Patient Navigator Activities and Timelines"
                    className="w-full rounded-lg border-2 border-slate-200 shadow-lg"
                  />
                  <p className="text-sm text-slate-600 mt-3 italic">
                    💡 <strong>Pro Tip:</strong> Print this out and keep it at your desk! It's your navigation playbook.
                  </p>
                </CardContent>
              </Card>

              {/* Best Practices */}
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    Navigation Best Practices 💡
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        📞 Contact Strategy
                      </h4>
                      <ul className="space-y-1 text-sm text-slate-700">
                        <li>• Use patient's preferred communication method</li>
                        <li>• Include one evening attempt (work schedules!)</li>
                        <li>• Try 3 consecutive days before escalating</li>
                        <li>• Leave clear, friendly voicemails</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        📝 Documentation Tips
                      </h4>
                      <ul className="space-y-1 text-sm text-slate-700">
                        <li>• Document immediately after interactions</li>
                        <li>• Be specific about barriers identified</li>
                        <li>• Record all interventions and outcomes</li>
                        <li>• Note follow-up requirements</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        🤝 Team Coordination
                      </h4>
                      <ul className="space-y-1 text-sm text-slate-700">
                        <li>• Proactive communication with PI and team</li>
                        <li>• Share critical patient concerns promptly</li>
                        <li>• Attend team meetings regularly</li>
                        <li>• Use structured handoff processes</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        ⚡ Responsiveness
                      </h4>
                      <ul className="space-y-1 text-sm text-slate-700">
                        <li>• Respond to patient calls within 24 hours</li>
                        <li>• Address urgent concerns immediately</li>
                        <li>• Set clear expectations for response times</li>
                        <li>• Provide backup contact information</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Scenarios */}
              <Card className="border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-red-50">
                <CardHeader>
                  <CardTitle>🎬 Real-World Scenarios: Putting Knowledge into Action</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold mb-2">📞 Scenario 1: The Hard-to-Reach Patient</p>
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Situation:</strong> Maria hasn't returned your calls for initial intake assessment. 
                      It's been 5 days since her diagnosis.
                    </p>
                    <p className="text-sm text-green-700">
                      <strong>Action:</strong> Try calling once daily for 3 consecutive days, including one evening 
                      call. Leave detailed voicemails. Send a follow-up letter. Contact the referring physician 
                      to verify contact info. Escalate to supervisor if no response after documented attempts.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="font-semibold mb-2">🚗 Scenario 2: Transportation Barrier</p>
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Situation:</strong> During intake, John reveals he has no car and lives 45 miles from 
                      the research center. He's concerned about missing work for appointments.
                    </p>
                    <p className="text-sm text-green-700">
                      <strong>Action:</strong> Document the transportation barrier immediately. Research local 
                      transportation resources (trial-provided transport, community services, rideshare vouchers). 
                      Coordinate appointment scheduling to minimize missed work. Explore telehealth options for 
                      non-critical visits. Follow up within 48 hours with solutions.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-semibold mb-2">⏰ Scenario 3: Care Transition Tracking</p>
                    <p className="text-sm text-slate-700 mb-2">
                      <strong>Situation:</strong> Sarah completed surgery and is scheduled to start chemotherapy 
                      in 2 weeks. This is a critical transition point.
                    </p>
                    <p className="text-sm text-green-700">
                      <strong>Action:</strong> Contact Sarah within 1 week of surgery completion. Assess recovery 
                      and any new barriers. Coordinate with oncology team about chemo start date. Educate about 
                      what to expect during chemo. Ensure all pre-chemo requirements are met. Schedule follow-up 
                      call for within 48 hours after first chemo treatment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Takeaways */}
              <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-300">
                <CardHeader>
                  <CardTitle>🎓 Key Takeaways</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Three core activities: Administrative Tasks, Documentation, and Direct Patient Contact</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Initial contact should occur within 1 week of diagnosis or referral (ideal)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Communicate with healthcare team within 48 hours of consultations (ideal)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Track patients at critical care transitions (surgery to chemo, chemo to radiation, etc.)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Make 3 contact attempts over 3 consecutive days, including one evening attempt</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Always strive for ideal standards, never fall below minimum requirements</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Document everything—if it's not documented, it didn't happen!</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button 
                  size="lg"
                  onClick={() => setCurrentTab('quiz')}
                  className="bg-gradient-to-r from-green-600 to-emerald-600"
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
                    <Alert className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                      <AlertDescription className="text-center">
                        <p className="text-lg font-semibold mb-2">Module Complete! 🎊</p>
                        <p>You've mastered Patient Navigation Activities. Moving you back to the course overview...</p>
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
