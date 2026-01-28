import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Label } from '@/app/components/ui/label';
import { AlertCircle, CheckCircle2, Microscope, Users, Shield, TrendingUp } from 'lucide-react';
import { Alert, AlertDescription } from '@/app/components/ui/alert';

interface Module1Props {
  onComplete: () => void;
}

export default function Module1({ onComplete }: Module1Props) {
  const [currentTab, setCurrentTab] = useState('content');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary focus of Phase I clinical trials?",
      options: [
        "A) Testing effectiveness in large populations",
        "B) Determining safety profile and appropriate dosing",
        "C) Post-marketing surveillance",
        "D) Comparing to existing gold standard treatments"
      ],
      correct: "B",
      explanation: "Phase I trials focus on initial safety assessment and determining the appropriate dosage range, typically with 20-100 participants."
    },
    {
      id: 2,
      question: "How many participants typically enroll in Phase III clinical trials?",
      options: [
        "A) 20-100",
        "B) 100-300",
        "C) 300-3,000+",
        "D) Only after FDA approval"
      ],
      correct: "C",
      explanation: "Phase III trials are large-scale studies involving 300 to several thousand participants across multiple international centers to confirm efficacy and monitor rare side effects."
    },
    {
      id: 3,
      question: "Why is diversity in clinical trial populations now considered a regulatory imperative as of 2026?",
      options: [
        "A) It's just a recommendation, not required",
        "B) Biological variations can cause different responses to treatments across populations",
        "C) It makes trials more expensive",
        "D) Only for marketing purposes"
      ],
      correct: "B",
      explanation: "As of January 2026, the FDA requires strict Diversity Action Plans because genetic, environmental, and lifestyle factors can cause different groups to respond differently to the same drug, ensuring safety and efficacy across all populations."
    },
    {
      id: 4,
      question: "When do Phase IV trials occur?",
      options: [
        "A) Before any human testing",
        "B) During the FDA approval process",
        "C) After the drug has been approved and released to market",
        "D) Only if Phase III shows problems"
      ],
      correct: "C",
      explanation: "Phase IV trials are post-marketing surveillance studies that track long-term safety, real-world effectiveness, and optimal use in broad populations after FDA approval."
    },
    {
      id: 5,
      question: "What is a key reason clinical trials are essential for drug development?",
      options: [
        "A) They are cheaper than laboratory testing",
        "B) They can identify side effects that cannot be predicted by lab or animal testing",
        "C) They are optional for FDA approval",
        "D) They only test for effectiveness, not safety"
      ],
      correct: "B",
      explanation: "Clinical trials are essential because they identify potential side effects and adverse reactions in humans that cannot be predicted solely from laboratory or animal testing."
    },
    {
      id: 6,
      question: "What methodology is commonly used in Phase II trials?",
      options: [
        "A) Only observational studies",
        "B) Randomized controlled trials (RCTs) with placebo or standard treatment comparison",
        "C) Single-arm studies only",
        "D) Post-marketing surveillance"
      ],
      correct: "B",
      explanation: "Phase II trials often use randomized controlled trials (RCTs) where some participants receive the new drug while others receive a placebo or standard treatment to test preliminary effectiveness."
    },
    {
      id: 7,
      question: "What change has the FDA made regarding Phase III trials as of 2026?",
      options: [
        "A) They now require three Phase III trials",
        "B) Phase III trials are no longer needed",
        "C) They sometimes allow a single high-quality Phase III trial for approval",
        "D) They only accept international trials"
      ],
      correct: "C",
      explanation: "In 2026, the FDA has shown increased flexibility, sometimes allowing a single high-quality Phase III trial for approval rather than the traditional requirement of two trials."
    },
    {
      id: 8,
      question: "What does pharmacokinetics, studied in Phase I, refer to?",
      options: [
        "A) How effective the drug is at treating disease",
        "B) How the body metabolizes and excretes the treatment",
        "C) The cost of producing the drug",
        "D) The drug's comparison to competitors"
      ],
      correct: "B",
      explanation: "Pharmacokinetics refers to how the body processes the drug - including absorption, distribution, metabolism, and excretion - which is a key focus of Phase I safety studies."
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
    
    if (score >= 6) { // 75% passing grade
      setTimeout(() => {
        onComplete();
      }, 3000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="border-2 border-blue-500 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Microscope className="w-8 h-8" />
            <Badge variant="secondary" className="text-lg px-3 py-1">Module 1</Badge>
          </div>
          <CardTitle className="text-3xl">Clinical Trials 101: The Foundation of Modern Medicine</CardTitle>
          <CardDescription className="text-blue-100">
            Understanding the scientific cornerstone of treatment development
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
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="w-6 h-6 text-blue-600" />
                    Why Clinical Trials Matter 🔬
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">
                    Clinical trials are the scientific cornerstone of modern medicine! They provide the 
                    evidence-based foundation required for developing new drugs, medical devices, and 
                    diagnostic tools. Without rigorous clinical trials, we wouldn't have the safe, 
                    effective treatments that save lives every day.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold">Safety First</h4>
                      </div>
                      <p className="text-sm text-slate-600">
                        Identify side effects and adverse reactions that can't be predicted by lab testing alone
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-cyan-200">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                        <h4 className="font-semibold">Proven Effectiveness</h4>
                      </div>
                      <p className="text-sm text-slate-600">
                        Provide statistical proof that treatments achieve their therapeutic goals
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-purple-600" />
                        <h4 className="font-semibold">Regulatory Approval</h4>
                      </div>
                      <p className="text-sm text-slate-600">
                        Generate robust data required by the FDA for market authorization
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold">Advancing Science</h4>
                      </div>
                      <p className="text-sm text-slate-600">
                        Lead to new understandings of disease biology and personalized treatments
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* The Four Phases */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">The Four Phases: A Clinical Trial Journey 🎯</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Phase I */}
                  <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-500">Phase I</Badge>
                      <h3 className="font-bold text-lg">Safety & Dosage Discovery</h3>
                    </div>
                    <div className="space-y-2 text-slate-700">
                      <p><strong>👥 Participants:</strong> Small group (20-100) of healthy volunteers or patients with advanced disease</p>
                      <p><strong>🎯 Focus:</strong> Determining initial safety profile, side effects, and appropriate dosing range</p>
                      <p><strong>🔬 Process:</strong> Researchers study pharmacokinetics—how the body metabolizes and excretes the treatment</p>
                      <p className="text-sm italic bg-white p-2 rounded border border-blue-200">
                        💡 <strong>Navigator Note:</strong> Phase I participants are true pioneers! They're the first humans to try a new treatment.
                      </p>
                    </div>
                  </div>

                  {/* Phase II */}
                  <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-purple-500">Phase II</Badge>
                      <h3 className="font-bold text-lg">Efficacy & Side Effects Testing</h3>
                    </div>
                    <div className="space-y-2 text-slate-700">
                      <p><strong>👥 Participants:</strong> Several hundred people (100-300) living with the target condition</p>
                      <p><strong>🎯 Focus:</strong> Preliminary testing of effectiveness and continued safety monitoring</p>
                      <p><strong>🔬 Process:</strong> Often uses randomized controlled trials (RCTs) with placebo or standard treatment comparison</p>
                      <p className="text-sm italic bg-white p-2 rounded border border-purple-200">
                        💡 <strong>Navigator Note:</strong> This is where we start to see if the treatment actually works!
                      </p>
                    </div>
                  </div>

                  {/* Phase III */}
                  <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-orange-500">Phase III</Badge>
                      <h3 className="font-bold text-lg">Therapeutic Confirmation</h3>
                    </div>
                    <div className="space-y-2 text-slate-700">
                      <p><strong>👥 Participants:</strong> Large-scale groups (300-3,000+) across multiple international centers</p>
                      <p><strong>🎯 Focus:</strong> Confirming efficacy, monitoring rare side effects, and comparing to existing "gold standard" therapies</p>
                      <p><strong>🔬 Process:</strong> These "pivotal trials" provide primary data for regulatory approval</p>
                      <p className="text-sm italic bg-white p-2 rounded border border-orange-200">
                        💡 <strong>2026 Update:</strong> The FDA now sometimes allows a single high-quality Phase III trial for approval instead of requiring two!
                      </p>
                    </div>
                  </div>

                  {/* Phase IV */}
                  <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-500">Phase IV</Badge>
                      <h3 className="font-bold text-lg">Post-Marketing Surveillance</h3>
                    </div>
                    <div className="space-y-2 text-slate-700">
                      <p><strong>👥 Participants:</strong> The general public using the treatment after FDA approval</p>
                      <p><strong>🎯 Focus:</strong> Tracking long-term safety, real-world effectiveness, and optimal use in broad populations</p>
                      <p><strong>🔬 Process:</strong> Monitoring rare or late-developing side effects that only emerge after widespread use</p>
                      <p className="text-sm italic bg-white p-2 rounded border border-green-200">
                        💡 <strong>Navigator Note:</strong> The research doesn't stop at approval—continuous monitoring keeps patients safe!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Diversity Section */}
              <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Users className="w-7 h-7 text-purple-600" />
                    The Critical Importance of Diversity 🌍
                  </CardTitle>
                  <CardDescription className="text-lg">
                    As of 2026, diversity is no longer optional—it's a regulatory and scientific imperative!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="bg-purple-100 border-purple-300">
                    <AlertCircle className="h-4 w-4 text-purple-600" />
                    <AlertDescription className="text-purple-900">
                      <strong>Breaking Change:</strong> Since January 2026, the FDA requires sponsors to submit 
                      detailed Diversity Action Plans documenting strategies for recruiting underrepresented groups.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        🧬 Biological Variation
                      </h4>
                      <p className="text-slate-700">
                        Genetic, environmental, and lifestyle factors can cause different groups to respond 
                        differently to the same drug. For example, certain blood pressure medications show 
                        varying efficacy between white and Black patients.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        🛡️ Safety Assurance
                      </h4>
                      <p className="text-slate-700">
                        Historical trends of using mostly white male participants led to higher rates of 
                        adverse drug reactions in women, as dosages weren't calibrated for female biology. 
                        We must do better!
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        ⚖️ Equity and Trust
                      </h4>
                      <p className="text-slate-700">
                        Including diverse groups helps reduce health disparities and builds trust within 
                        communities that have historically faced exclusion or mistreatment in research.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg">
                    <p className="font-semibold text-lg mb-2">🌟 Your Role as a Navigator</p>
                    <p>
                      You'll be on the front lines of building trust and breaking down barriers in diverse 
                      communities. This isn't just about meeting regulatory requirements—it's about ensuring 
                      every person has access to potentially life-saving treatments!
                    </p>
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
                      <span>Clinical trials have 4 distinct phases, each with specific goals and participant populations</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Phase III trials provide the pivotal data for FDA approval</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Diversity in clinical trials is now a regulatory requirement as of 2026</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Different populations can respond differently to treatments due to biological variations</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✅</span>
                      <span>Your work as a navigator helps ensure equitable access to groundbreaking research</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button 
                  size="lg"
                  onClick={() => setCurrentTab('quiz')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
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
                    <Alert className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                      <AlertDescription className="text-center">
                        <p className="text-lg font-semibold mb-2">Module Complete! 🎊</p>
                        <p>You've mastered Clinical Trials 101. Moving you back to the course overview...</p>
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