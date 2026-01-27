import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Label } from '@/app/components/ui/label';
import { AlertCircle, CheckCircle2, Heart, Users, Target, Lightbulb } from 'lucide-react';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import navigationModelImage from 'figma:asset/e611d6b4fc73fe677d938ce1a667b9d3a909cf7c.png';

interface Module2Props {
  onComplete: () => void;
}

export default function Module2({ onComplete }: Module2Props) {
  const [currentTab, setCurrentTab] = useState('content');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    {
      id: 1,
      question: "What makes the TruVision Clinical Navigation model unique compared to a 'one size fits all' approach?",
      options: [
        "A) It's cheaper to implement",
        "B) It uses a barrier-personalized approach based on individual patient needs",
        "C) It only works with one type of patient",
        "D) It doesn't require coordination with the PI"
      ],
      correct: "B",
      explanation: "The TruVision model doesn't use a 'one size fits all' approach. Instead, it uses a team approach to provide navigation assistance based on the unique barriers each patient must overcome."
    },
    {
      id: 2,
      question: "How many core tenets guide the TruVision Clinical Navigation system?",
      options: [
        "A) 3 tenets",
        "B) 5 tenets",
        "C) 7 tenets",
        "D) 10 tenets"
      ],
      correct: "C",
      explanation: "The TruVision Clinical Navigation system is built on 7 core tenets that guide every aspect of patient support and navigation."
    },
    {
      id: 3,
      question: "What is the navigator's primary role in the TruVision model?",
      options: [
        "A) To replace the physician",
        "B) To become the personal assistant for the patient throughout their clinical trial journey",
        "C) To only handle transportation logistics",
        "D) To focus solely on drug tracking"
      ],
      correct: "B",
      explanation: "The clinical navigator becomes the personal assistant for the patient as they participate in what can be an overwhelming clinical trial experience."
    },
    {
      id: 4,
      question: "According to TruVision's approach, what barrier is specifically addressed regarding Black and Brown communities?",
      options: [
        "A) Language barriers only",
        "B) The trust barrier that exists regarding participation in medical research",
        "C) Only financial barriers",
        "D) Geographic distance only"
      ],
      correct: "B",
      explanation: "The TruVision system uses a team approach to help bridge the trust barrier that exists in Black and Brown communities regarding participation in medical research."
    },
    {
      id: 5,
      question: "What type of endpoint does clinical trial navigation have according to the tenets?",
      options: [
        "A) No defined endpoint",
        "B) Ends at patient enrollment",
        "C) A defined endpoint based on the close-out schedule of a specific trial",
        "D) Continues indefinitely"
      ],
      correct: "C",
      explanation: "Tenet #3 states that clinical trial navigation will have a defined endpoint based on the close-out schedule of a specific trial, providing clarity on the scope of support."
    },
    {
      id: 6,
      question: "What areas does the clinical trial navigation plan engage and support patients through?",
      options: [
        "A) Only medical care",
        "B) Only financial assistance",
        "C) Every contact from initial intake up to schedule and clinical elements of a specific trial",
        "D) Only after they're enrolled in the study"
      ],
      correct: "C",
      explanation: "Tenet #2 emphasizes that the navigation plan engages and supports patients through every contact from initial intake up through scheduling and all clinical elements of the trial."
    },
    {
      id: 7,
      question: "What must clinical trial navigators coordinate with for successful navigation?",
      options: [
        "A) Only the research coordinator",
        "B) Only the sponsor",
        "C) The PI (Principal Investigator) and his team",
        "D) No coordination is required"
      ],
      correct: "C",
      explanation: "Tenet #4 clearly states that clinical trial navigators will require coordination with the PI and his team for successful navigation."
    },
    {
      id: 8,
      question: "Which of the following is NOT mentioned as a barrier focus area in the TruVision navigation plan?",
      options: [
        "A) Lack of transportation",
        "B) Loss of income from missing work",
        "C) Language and communication barriers",
        "D) Patient's favorite foods"
      ],
      correct: "D",
      explanation: "Tenet #5 identifies specific barriers including transportation, childcare, loss of income, and mobility issues—but not food preferences."
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

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="border-2 border-purple-500 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-8 h-8" />
            <Badge variant="secondary" className="text-lg px-3 py-1">Module 2</Badge>
          </div>
          <CardTitle className="text-3xl">The TruVision Navigation Model</CardTitle>
          <CardDescription className="text-purple-100">
            Our unique, barrier-personalized approach to patient support
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
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                    What Makes TruVision Different? 💡
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    Welcome to the heart of what makes TruVision special! Our Clinical Navigation Model 
                    has been designed to be an <strong>easily adaptable, clinical patient navigation tool</strong> that 
                    integrates into a clinical trial's processes to support recruitment, improve study completion, 
                    and ultimately reduce disparities in clinical trial participation.
                  </p>
                  
                  <Alert className="bg-purple-100 border-purple-300">
                    <Target className="h-4 w-4 text-purple-600" />
                    <AlertDescription className="text-purple-900">
                      <strong>Key Philosophy:</strong> We DON'T believe in "one size fits all!" The TruVision 
                      model uses a team approach to provide navigation assistance based on the unique barriers 
                      each patient must overcome to successfully participate in a clinical study.
                    </AlertDescription>
                  </Alert>

                  <div className="bg-white p-5 rounded-lg border-2 border-pink-200">
                    <h4 className="font-semibold text-lg mb-3 text-purple-900">🌉 Building Bridges, Building Trust</h4>
                    <p className="text-slate-700">
                      Our model uses a <strong>"barrier-personalized"</strong> methodology to support patients 
                      through the entire clinical trial process. The clinical navigator becomes the 
                      <strong> personal assistant</strong> for the patient as they participate in what can be 
                      an overwhelming experience.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-5 rounded-lg">
                    <p className="font-semibold text-lg mb-2">🤝 Trust in Diverse Communities</p>
                    <p>
                      The TruVision system uses a team approach to help bridge the trust barrier that exists 
                      in Black and Brown communities regarding participation in medical research. Through 
                      personalized, culturally-sensitive support, we're changing the narrative!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* The 7 Tenets */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">The 7 Core Tenets of TruVision Navigation 🎯</CardTitle>
                  <CardDescription>
                    These principles guide everything we do as clinical navigators
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-blue-500 mt-1">1</Badge>
                      <div>
                        <h4 className="font-semibold mb-2">Protocol-Based Development</h4>
                        <p className="text-slate-700">
                          Clinical trial navigation will be developed based on the protocol design. Every 
                          trial is unique, and our navigation approach adapts accordingly!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-purple-500 mt-1">2</Badge>
                      <div>
                        <h4 className="font-semibold mb-2">Comprehensive Patient Engagement</h4>
                        <p className="text-slate-700">
                          The clinical trial navigation plan will engage and support a patient through 
                          <strong> every contact</strong> from initial intake up to schedule and clinical 
                          elements of a specific trial. We're with you from day one! 🌟
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-green-500 mt-1">3</Badge>
                      <div>
                        <h4 className="font-semibold mb-2">Defined Endpoint</h4>
                        <p className="text-slate-700">
                          The clinical trial navigation will have a defined endpoint based on the 
                          <strong> close-out schedule</strong> of a specific trial. We provide clarity and 
                          structure throughout the journey.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-orange-500 mt-1">4</Badge>
                      <div>
                        <h4 className="font-semibold mb-2">Team Coordination</h4>
                        <p className="text-slate-700">
                          The clinical trial navigators will require <strong>coordination with the PI 
                          and his team</strong> for successful navigation. We work as one unified team! 🤝
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-pink-500 mt-1">5</Badge>
                      <div>
                        <h4 className="font-semibold mb-2">Barrier Identification & Reduction</h4>
                        <p className="text-slate-700 mb-2">
                          The clinical trial navigation plan will focus on the identification and reduction 
                          of barriers (both real and perceived) faced by a patient participating in a clinical trial:
                        </p>
                        <ul className="space-y-1 text-sm text-slate-600 ml-4">
                          <li>• 🚗 Lack of transportation</li>
                          <li>• 👶 Lack of childcare</li>
                          <li>• 💰 Loss of income from missing work</li>
                          <li>• 🚶 Mobility issues</li>
                          <li>• 📱 Communication/language barriers</li>
                          <li>• 📚 Knowledge deficits</li>
                          <li>• 💼 Employment/disability concerns</li>
                          <li>• 😰 Psychosocial factors (fear, anxiety, etc.)</li>
                          <li>• 👨‍👩‍👧‍👦 Complex care coordination needs</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-indigo-500 mt-1">6</Badge>
                      <div>
                        <h4 className="font-semibold mb-2">Medication & Adherence Support</h4>
                        <p className="text-slate-700">
                          Clinical trial navigation will provide assistance with <strong>medication distribution, 
                          drug tracking (pill counting), adverse event reporting, checking vital signs, and 
                          phlebotomy</strong>. We ensure protocol compliance and patient safety! 💊
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-cyan-500 mt-1">7</Badge>
                      <div>
                        <h4 className="font-semibold mb-2">Patient Tracking & Adherence</h4>
                        <p className="text-slate-700">
                          The clinical navigators will assist with <strong>patient tracking and protocol 
                          adherence</strong>. We keep patients engaged and on track throughout their trial journey! 📊
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visual Reference */}
              <Card className="border-2 border-purple-300">
                <CardHeader>
                  <CardTitle>📋 TruVision Navigation Model Reference</CardTitle>
                  <CardDescription>
                    Here's the complete overview of our clinical navigation approach
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={navigationModelImage} 
                    alt="TruVision Clinical Navigation Model"
                    className="w-full rounded-lg border-2 border-slate-200 shadow-lg"
                  />
                  <p className="text-sm text-slate-600 mt-3 italic">
                    💡 <strong>Pro Tip:</strong> Save this image or take a screenshot—it's your quick reference guide!
                  </p>
                </CardContent>
              </Card>

              {/* The Navigator's Role */}
              <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-pink-600" />
                    Your Role: The Patient's Personal Assistant 👤
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    As a TruVision clinical navigator, you're not just a coordinator—you're a 
                    <strong> personal assistant, advocate, educator, and trusted partner</strong> in the 
                    patient's clinical trial journey.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        🎯 You Are The Bridge
                      </h4>
                      <p className="text-sm text-slate-700">
                        Between patients and the research team, between barriers and solutions, 
                        between fear and trust.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        💪 You Are The Support
                      </h4>
                      <p className="text-sm text-slate-700">
                        Helping patients overcome real barriers like transportation, childcare, 
                        and work conflicts.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        📚 You Are The Educator
                      </h4>
                      <p className="text-sm text-slate-700">
                        Explaining complex medical concepts, addressing fears, and ensuring 
                        informed participation.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        🤝 You Are The Advocate
                      </h4>
                      <p className="text-sm text-slate-700">
                        Representing patient needs, identifying resources, and ensuring equitable 
                        access to groundbreaking research.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Takeaways */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-300">
                <CardHeader>
                  <CardTitle>🎓 Key Takeaways</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>TruVision uses a barrier-personalized approach, NOT one-size-fits-all</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>The model is built on 7 core tenets that guide all navigation activities</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Navigators serve as personal assistants throughout the patient's trial journey</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Building trust in diverse communities is central to our mission</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Navigation addresses multiple barriers from transportation to psychosocial concerns</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Coordination with the PI and research team is essential for success</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button 
                  size="lg"
                  onClick={() => setCurrentTab('quiz')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600"
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
                    <Alert className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                      <AlertDescription className="text-center">
                        <p className="text-lg font-semibold mb-2">Module Complete! 🎊</p>
                        <p>You've mastered the TruVision Navigation Model. Moving you back to the course overview...</p>
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
