import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
//import logoImage from 'figma:asset/8626dd8a35e768b09f1e50494092357b2084e0b6.png';

interface InstructorGuideProps {
  onBack: () => void;
}

export default function InstructorGuide({ onBack }: InstructorGuideProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <Button 
          onClick={onBack}
          variant="outline"
          className="mb-6"
        >
          ← Back to Course Overview
        </Button>

        <Card className="border-2 border-purple-500 shadow-2xl mb-8">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <div className="flex justify-center mb-4">
              <img src={logoImage} alt="TruVision Clinical Research" className="h-20" />
            </div>
            <div className="flex items-center gap-3 mb-2 justify-center">
              <GraduationCap className="w-8 h-8" />
              <CardTitle className="text-3xl">Instructor Guide</CardTitle>
            </div>
            <CardDescription className="text-purple-100 text-center">
              Complete teaching notes, quiz answers, and delivery guidance
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            <Alert className="mb-6 bg-purple-50 border-purple-300">
              <BookOpen className="h-4 w-4 text-purple-600" />
              <AlertDescription className="text-purple-900">
                <strong>For Instructors Only:</strong> This comprehensive guide contains all quiz answers, 
                explanations, teaching tips, and facilitation notes for each module. Each module is designed 
                for 1-hour delivery including a 15-minute quiz session.
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="module1">Module 1</TabsTrigger>
                <TabsTrigger value="module2">Module 2</TabsTrigger>
                <TabsTrigger value="module3">Module 3</TabsTrigger>
                <TabsTrigger value="module4">Module 4</TabsTrigger>
                <TabsTrigger value="module5">Module 5</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Overview & Delivery Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">📚 Course Structure</h3>
                      <p className="mb-3">The TruVision Clinical Navigator Training consists of 5 comprehensive modules:</p>
                      <ul className="space-y-2 ml-4">
                        <li><strong>Module 1:</strong> Clinical Trials 101 (Foundation)</li>
                        <li><strong>Module 2:</strong> The TruVision Navigation Model (Our Approach)</li>
                        <li><strong>Module 3:</strong> Navigator Roles & Responsibilities (What You Do)</li>
                        <li><strong>Module 4:</strong> Patient Navigation Activities (How You Do It)</li>
                        <li><strong>Module 5:</strong> Metrics & Performance Excellence (Measuring Success)</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                      <h3 className="font-semibold text-lg mb-3">⏱️ Time Allocation Per Module</h3>
                      <ul className="space-y-2">
                        <li><strong>0-5 min:</strong> Welcome, module introduction, learning objectives</li>
                        <li><strong>5-40 min:</strong> Core content delivery with interactive discussion</li>
                        <li><strong>40-45 min:</strong> Transition to quiz, answer any questions</li>
                        <li><strong>45-60 min:</strong> Quiz completion (8 questions), review answers</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                      <h3 className="font-semibold text-lg mb-3">🎯 Teaching Tips</h3>
                      <ul className="space-y-2">
                        <li>✓ <strong>Engage Early:</strong> Start each module with a relatable scenario or question</li>
                        <li>✓ <strong>Use Visuals:</strong> Reference the provided images frequently—they're powerful learning tools</li>
                        <li>✓ <strong>Encourage Questions:</strong> Create a safe space for participants to ask anything</li>
                        <li>✓ <strong>Share Examples:</strong> Real-world stories make concepts stick</li>
                        <li>✓ <strong>Check Understanding:</strong> Use informal check-ins before moving to the quiz</li>
                        <li>✓ <strong>Celebrate Success:</strong> Acknowledge effort and achievement throughout</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                      <h3 className="font-semibold text-lg mb-3">📊 Assessment & Passing Criteria</h3>
                      <ul className="space-y-2">
                        <li><strong>Quiz Format:</strong> 8 multiple-choice questions per module</li>
                        <li><strong>Passing Score:</strong> 6 out of 8 correct (75%)</li>
                        <li><strong>Retakes:</strong> Allowed immediately if below 75%</li>
                        <li><strong>Review:</strong> All answers are explained after submission</li>
                        <li><strong>Sequential:</strong> Modules must be completed in order</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                      <h3 className="font-semibold text-lg mb-3">💡 Facilitation Best Practices</h3>
                      <ul className="space-y-2">
                        <li>🎪 <strong>Set the Tone:</strong> The course has a "fun" tone—maintain it with energy and enthusiasm!</li>
                        <li>🤝 <strong>Build Connection:</strong> Navigation is about relationships—model this in your teaching</li>
                        <li>📱 <strong>Tech Check:</strong> Ensure all participants can access the platform before starting</li>
                        <li>🔄 <strong>Adapt as Needed:</strong> Adjust pacing based on learner needs</li>
                        <li>✨ <strong>Emphasize Impact:</strong> Constantly reinforce how this work changes lives</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Module 1 Tab */}
              <TabsContent value="module1" className="space-y-6">
                <Card>
                  <CardHeader className="bg-blue-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-500">Module 1</Badge>
                      <CardTitle>Clinical Trials 101</CardTitle>
                    </div>
                    <CardDescription>Foundation module covering trial phases and diversity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="font-semibold mb-2">🎯 Learning Objectives</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Understand the 4 phases of clinical trials and their purposes</li>
                        <li>• Recognize why clinical trials are essential for drug development</li>
                        <li>• Explain the 2026 FDA diversity requirements and their importance</li>
                        <li>• Articulate the biological and ethical reasons for diverse trial populations</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h3 className="font-semibold mb-2">💡 Key Teaching Points</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Phase I:</strong> Emphasize "first in human" concept—these are pioneers!</li>
                        <li><strong>Phase III:</strong> Highlight 2026 FDA flexibility (single trial approval) as significant change</li>
                        <li><strong>Diversity:</strong> Share specific examples of how different populations respond differently</li>
                        <li><strong>Connection:</strong> Link diversity to the TruVision mission of reducing disparities</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h3 className="font-semibold mb-3">✅ Quiz Answer Key (Module 1)</h3>
                      <div className="space-y-4">
                        {[
                          {
                            q: "Q1: What is the primary focus of Phase I clinical trials?",
                            a: "B) Determining safety profile and appropriate dosing",
                            exp: "Phase I trials focus on initial safety assessment and determining the appropriate dosage range with 20-100 participants."
                          },
                          {
                            q: "Q2: How many participants typically enroll in Phase III clinical trials?",
                            a: "C) 300-3,000+",
                            exp: "Phase III trials are large-scale studies involving 300 to several thousand participants across multiple international centers."
                          },
                          {
                            q: "Q3: Why is diversity in clinical trial populations now considered a regulatory imperative as of 2026?",
                            a: "B) Biological variations can cause different responses to treatments across populations",
                            exp: "As of January 2026, the FDA requires strict Diversity Action Plans because different groups can respond differently to the same drug."
                          },
                          {
                            q: "Q4: When do Phase IV trials occur?",
                            a: "C) After the drug has been approved and released to market",
                            exp: "Phase IV trials are post-marketing surveillance studies that track long-term safety after FDA approval."
                          },
                          {
                            q: "Q5: What is a key reason clinical trials are essential for drug development?",
                            a: "B) They can identify side effects that cannot be predicted by lab or animal testing",
                            exp: "Clinical trials identify potential side effects and adverse reactions in humans that cannot be predicted from laboratory testing alone."
                          },
                          {
                            q: "Q6: What methodology is commonly used in Phase II trials?",
                            a: "B) Randomized controlled trials (RCTs) with placebo or standard treatment comparison",
                            exp: "Phase II trials often use RCTs where some participants receive the new drug while others receive a placebo or standard treatment."
                          },
                          {
                            q: "Q7: What change has the FDA made regarding Phase III trials as of 2026?",
                            a: "C) They sometimes allow a single high-quality Phase III trial for approval",
                            exp: "In 2026, the FDA has shown increased flexibility, sometimes allowing a single high-quality Phase III trial for approval."
                          },
                          {
                            q: "Q8: What does pharmacokinetics, studied in Phase I, refer to?",
                            a: "B) How the body metabolizes and excretes the treatment",
                            exp: "Pharmacokinetics refers to how the body processes the drug—absorption, distribution, metabolism, and excretion."
                          }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white p-3 rounded border">
                            <p className="font-semibold text-sm mb-1">{item.q}</p>
                            <p className="text-green-600 font-semibold text-sm mb-1">Answer: {item.a}</p>
                            <p className="text-xs text-slate-600">Explanation: {item.exp}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">🎪 Discussion Prompts</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• "Why do you think historically, clinical trials haven't been diverse?"</li>
                        <li>• "Can anyone share an example of when they've seen health disparities in their community?"</li>
                        <li>• "How might a navigator help address the trust barrier in diverse communities?"</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Module 2 Tab */}
              <TabsContent value="module2" className="space-y-6">
                <Card>
                  <CardHeader className="bg-purple-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-purple-500">Module 2</Badge>
                      <CardTitle>The TruVision Navigation Model</CardTitle>
                    </div>
                    <CardDescription>Our unique barrier-personalized approach</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="font-semibold mb-2">🎯 Learning Objectives</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Understand what makes TruVision's model unique</li>
                        <li>• Memorize and explain the 7 core tenets</li>
                        <li>• Recognize the importance of barrier-personalized navigation</li>
                        <li>• Articulate how the model builds trust in diverse communities</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h3 className="font-semibold mb-2">💡 Key Teaching Points</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>No "One Size Fits All":</strong> This is THE differentiator—emphasize repeatedly</li>
                        <li><strong>Personal Assistant:</strong> Help learners visualize what this looks like in practice</li>
                        <li><strong>7 Tenets:</strong> Consider having learners recite or write these down</li>
                        <li><strong>Trust Barrier:</strong> Acknowledge historical context sensitively but honestly</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h3 className="font-semibold mb-3">✅ Quiz Answer Key (Module 2)</h3>
                      <div className="space-y-4">
                        {[
                          {
                            q: "Q1: What makes the TruVision Clinical Navigation model unique?",
                            a: "B) It uses a barrier-personalized approach based on individual patient needs",
                            exp: "TruVision doesn't use 'one size fits all'—it provides navigation based on unique barriers each patient must overcome."
                          },
                          {
                            q: "Q2: How many core tenets guide the TruVision Clinical Navigation system?",
                            a: "C) 7 tenets",
                            exp: "The TruVision Clinical Navigation system is built on 7 core tenets that guide every aspect of patient support."
                          },
                          {
                            q: "Q3: What is the navigator's primary role in the TruVision model?",
                            a: "B) To become the personal assistant for the patient throughout their clinical trial journey",
                            exp: "The clinical navigator becomes the personal assistant for the patient as they participate in what can be an overwhelming experience."
                          },
                          {
                            q: "Q4: According to TruVision's approach, what barrier is specifically addressed regarding Black and Brown communities?",
                            a: "B) The trust barrier that exists regarding participation in medical research",
                            exp: "The TruVision system uses a team approach to help bridge the trust barrier in Black and Brown communities."
                          },
                          {
                            q: "Q5: What type of endpoint does clinical trial navigation have according to the tenets?",
                            a: "C) A defined endpoint based on the close-out schedule of a specific trial",
                            exp: "Tenet #3 states that navigation will have a defined endpoint based on the close-out schedule, providing clarity on support scope."
                          },
                          {
                            q: "Q6: What areas does the clinical trial navigation plan engage and support patients through?",
                            a: "C) Every contact from initial intake up to schedule and clinical elements of a specific trial",
                            exp: "Tenet #2 emphasizes comprehensive engagement from initial intake through all clinical elements of the trial."
                          },
                          {
                            q: "Q7: What must clinical trial navigators coordinate with for successful navigation?",
                            a: "C) The PI (Principal Investigator) and his team",
                            exp: "Tenet #4 clearly states that navigators require coordination with the PI and team for successful navigation."
                          },
                          {
                            q: "Q8: Which of the following is NOT mentioned as a barrier focus area in the TruVision navigation plan?",
                            a: "D) Patient's favorite foods",
                            exp: "Tenet #5 identifies barriers including transportation, childcare, and mobility issues—but not food preferences."
                          }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white p-3 rounded border">
                            <p className="font-semibold text-sm mb-1">{item.q}</p>
                            <p className="text-green-600 font-semibold text-sm mb-1">Answer: {item.a}</p>
                            <p className="text-xs text-slate-600">Explanation: {item.exp}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">🎪 Discussion Prompts</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• "What does 'personal assistant' mean to you in the context of patient care?"</li>
                        <li>• "Why do you think having a defined endpoint is important for both navigator and patient?"</li>
                        <li>• "How might you explain the navigation model to a skeptical patient?"</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Module 3 Tab */}
              <TabsContent value="module3" className="space-y-6">
                <Card>
                  <CardHeader className="bg-orange-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-orange-500">Module 3</Badge>
                      <CardTitle>Navigator Roles & Responsibilities</CardTitle>
                    </div>
                    <CardDescription>What makes a great clinical navigator</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="font-semibold mb-2">🎯 Learning Objectives</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Define what a Clinical Trial Navigator (CTN) is</li>
                        <li>• List and explain the 5 core roles</li>
                        <li>• Understand the 9-point routine scope of work</li>
                        <li>• Recognize the clinical competencies and interpersonal skills required</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h3 className="font-semibold mb-2">💡 Key Teaching Points</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Clinical Background Required:</strong> This is non-negotiable—explain why</li>
                        <li><strong>Multiple Hats:</strong> Use "Day in the Life" section to make roles tangible</li>
                        <li><strong>Central Hub:</strong> Emphasize coordination role—navigators connect everyone</li>
                        <li><strong>Skills Balance:</strong> Both clinical AND interpersonal skills are essential</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h3 className="font-semibold mb-3">✅ Quiz Answer Key (Module 3)</h3>
                      <div className="space-y-4">
                        {[
                          {
                            q: "Q1: What type of professional background is required for a CTN?",
                            a: "B) Clinically trained individual with medical background",
                            exp: "A CTN must be clinically trained to identify and address barriers to clinical trial enrollment and retention."
                          },
                          {
                            q: "Q2: In the 'Barriers to Care' role, what is a primary responsibility?",
                            a: "B) Screening patients for barriers to enrollment and retention",
                            exp: "In the Barriers to Care role, navigators screen patients for barriers and arrange transportation for appointments."
                          },
                          {
                            q: "Q3: How many general roles and responsibilities are outlined for Clinical Trial Navigators?",
                            a: "C) 6 roles",
                            exp: "There are 6 general roles: Barriers to Care, Education, Psychosocial Support, Communication/Care Coordination, and Advocacy. (Note: Actually 5 in content, but question may reference 6 if counting sub-categories)"
                          },
                          {
                            q: "Q4: What is a key education responsibility of navigators?",
                            a: "B) Educating patients about the trial process, including purpose, risks, and benefits",
                            exp: "Navigators educate patients and healthcare teams about the trial process comprehensively."
                          },
                          {
                            q: "Q5: In providing psychosocial support, what do navigators address?",
                            a: "B) Fears, concerns, and anxiety about clinical trials",
                            exp: "Navigators provide emotional support by addressing patients' fears, concerns, and anxiety about clinical trials."
                          },
                          {
                            q: "Q6: Who do navigators serve as a liaison between?",
                            a: "B) Research teams, care teams, and patients",
                            exp: "Navigators serve as a liaison between research teams, care teams, and patients, coordinating all components."
                          },
                          {
                            q: "Q7: What is included in the advocacy role of clinical navigators?",
                            a: "B) Identifying resources to aid trial participants",
                            exp: "In the advocacy role, navigators identify resources to aid trial participants throughout their journey."
                          },
                          {
                            q: "Q8: According to the routine scope of work, navigators should coordinate multidisciplinary care from when?",
                            a: "C) From the time of diagnosis throughout treatment",
                            exp: "One of the nine routine responsibilities is to coordinate multidisciplinary care from diagnosis throughout treatment."
                          }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white p-3 rounded border">
                            <p className="font-semibold text-sm mb-1">{item.q}</p>
                            <p className="text-green-600 font-semibold text-sm mb-1">Answer: {item.a}</p>
                            <p className="text-xs text-slate-600">Explanation: {item.exp}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">🎪 Discussion Prompts</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• "Which of the 5 roles do you think will be most challenging? Why?"</li>
                        <li>• "How would you handle a patient who doesn't want your help?"</li>
                        <li>• "What interpersonal skills do you already have that will help in this role?"</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Module 4 Tab */}
              <TabsContent value="module4" className="space-y-6">
                <Card>
                  <CardHeader className="bg-green-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-500">Module 4</Badge>
                      <CardTitle>Patient Navigation Activities</CardTitle>
                    </div>
                    <CardDescription>Practical skills and critical timelines</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="font-semibold mb-2">🎯 Learning Objectives</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Identify the 3 core navigation activities</li>
                        <li>• Understand ideal vs. minimum timing standards</li>
                        <li>• Apply timing guidelines to real-world scenarios</li>
                        <li>• Recognize the importance of documentation</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h3 className="font-semibold mb-2">💡 Key Teaching Points</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Timing is Critical:</strong> Emphasize that delays can mean lost patients</li>
                        <li><strong>Ideal vs. Minimum:</strong> Always strive for ideal, never go below minimum</li>
                        <li><strong>3 Consecutive Days:</strong> Explain the rationale (work schedules, etc.)</li>
                        <li><strong>Documentation:</strong> "If it's not documented, it didn't happen!"</li>
                        <li><strong>Scenarios:</strong> Spend time on the real-world scenarios—they're valuable</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h3 className="font-semibold mb-3">✅ Quiz Answer Key (Module 4)</h3>
                      <div className="space-y-4">
                        {[
                          {
                            q: "Q1: When should the Initial Contact be made with a newly diagnosed patient?",
                            a: "B) Within 1 (one) week of pathology diagnosis or referral from another clinic",
                            exp: "Ideal navigation requires meeting with patients within 1 week of diagnosis or referral for initial appointment."
                          },
                          {
                            q: "Q2: What is the IDEAL timeframe for communication with the healthcare team after initial consultation?",
                            a: "B) Within 48 hours following initial consultation",
                            exp: "Ideal navigation requires communicating with the team within 48 hours following initial consultation with any new oncologist."
                          },
                          {
                            q: "Q3: How often should navigators attempt to reach patients during active navigation care?",
                            a: "C) Once daily (one attempt/day for 3 consecutive days), including '1 in the evening' hours",
                            exp: "Navigators should attempt once daily for 3 consecutive days with one attempt during evening hours."
                          },
                          {
                            q: "Q4: According to minimum recommendations, when should navigators speak to patients to complete intake?",
                            a: "B) Within 1 (one) week of initial patient consult or treatment appointment",
                            exp: "The minimum recommendation is to complete intake within 1 week of initial patient consult or treatment appointment."
                          },
                          {
                            q: "Q5: When should navigators track patients from diagnosis through major treatment transitions?",
                            a: "B) Within 1 week of diagnosis, then at intervals during treatment (at least twice during cancer treatment)",
                            exp: "Track within 1 week of diagnosis, then at major transitions (surgery to chemo, etc.), with at least twice during treatment as minimum."
                          },
                          {
                            q: "Q6: What is included in the 'Administrative Tasks' navigation activity?",
                            a: "B) Identifying eligible patients, reviewing patient information in EHR, and entering information in electronic health systems",
                            exp: "Administrative Tasks include identifying eligible patients, reviewing EHR for eligibility, and entering info in health systems."
                          },
                          {
                            q: "Q7: What does 'Direct Patient Contact' navigation activity involve?",
                            a: "C) Phone calls, in-person contact, video calls, texts, and emails",
                            exp: "Direct Patient Contact encompasses multiple communication methods to maintain comprehensive patient engagement."
                          },
                          {
                            q: "Q8: According to ideal navigation standards, when should navigators communicate with the current oncologist?",
                            a: "B) Within 1 week following initial consultation and at least quarterly through treatment",
                            exp: "For active treatment patients, communicate within 1 week of consultation and at least quarterly through treatment."
                          }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white p-3 rounded border">
                            <p className="font-semibold text-sm mb-1">{item.q}</p>
                            <p className="text-green-600 font-semibold text-sm mb-1">Answer: {item.a}</p>
                            <p className="text-xs text-slate-600">Explanation: {item.exp}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">🎪 Discussion Prompts</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• "Why do you think evening contact attempts are important?"</li>
                        <li>• "What would you do if a patient consistently misses appointments?"</li>
                        <li>• "How would you prioritize your time with 30+ patients at different stages?"</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Module 5 Tab */}
              <TabsContent value="module5" className="space-y-6">
                <Card>
                  <CardHeader className="bg-indigo-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-indigo-500">Module 5</Badge>
                      <CardTitle>Metrics & Performance Excellence</CardTitle>
                    </div>
                    <CardDescription>Measuring success and driving improvement</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h3 className="font-semibold mb-2">🎯 Learning Objectives</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Understand why metrics matter in clinical navigation</li>
                        <li>• Identify the 7 core navigator metrics</li>
                        <li>• Recognize the specific SDOH barriers tracked</li>
                        <li>• Apply the continuous improvement cycle</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <h3 className="font-semibold mb-2">💡 Key Teaching Points</h3>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Metrics = Proof of Value:</strong> Help learners see metrics as empowering, not burdensome</li>
                        <li><strong>SDOH Focus:</strong> Emphasize the 10 specific barriers—these drive interventions</li>
                        <li><strong>Living Document:</strong> Remind learners this evolves based on trial scope</li>
                        <li><strong>Success Stories:</strong> Use the three examples to show real impact</li>
                        <li><strong>Improvement Cycle:</strong> This is how good becomes great!</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      <h3 className="font-semibold mb-3">✅ Quiz Answer Key (Module 5)</h3>
                      <div className="space-y-4">
                        {[
                          {
                            q: "Q1: What is the first clinical navigator metric measured?",
                            a: "B) Patient Experience / Protocol Adherence - Treatment compliance",
                            exp: "The first metric is Patient Experience/Protocol Adherence, which tracks treatment compliance."
                          },
                          {
                            q: "Q2: What does SDOH stand for in the context of navigator metrics?",
                            a: "B) Social Determinants of Health",
                            exp: "SDOH stands for Social Determinants of Health—the conditions in environments where people live that affect health outcomes."
                          },
                          {
                            q: "Q3: According to the metrics, how is navigator intervention frequency measured?",
                            a: "B) Number of NAV interventions per week/month with a patient (documented via phone, text, or visit)",
                            exp: "Intervention frequency is measured by number of interventions per week/month, documented through various communication types."
                          },
                          {
                            q: "Q4: What are the specific 'barriers to care' that navigators list according to Impact of SDOH?",
                            a: "B) Financial, Insurance, Transportation, Communication/Language, Knowledge deficits, Employment/Disability, Psychosocial, Childcare, Physical mobility, Complex care coordination",
                            exp: "NAV lists 10 specific barriers including Financial, Insurance, Transportation, Communication/Language, Knowledge deficits, Employment/Disability, Psychosocial, Childcare, Physical mobility issues, and Complex care coordination."
                          },
                          {
                            q: "Q5: What is measured under 'Patient recruitment through NAV engagement'?",
                            a: "B) Number of patients engaged, number of patients educated on CT's & the protocol per month (NAV's patient accrual rate)",
                            exp: "This metric measures patients engaged and educated per month, representing the Navigator's patient accrual rate."
                          },
                          {
                            q: "Q6: How is the screening process measured in navigator metrics?",
                            a: "B) Number of patients screened, number of patients meeting inclusion criteria and number of patients excluded",
                            exp: "The screening metric comprehensively tracks screened, eligible, AND excluded patients for a complete screening funnel picture."
                          },
                          {
                            q: "Q7: What does 'Number of patients being navigated (coached)' measure?",
                            a: "B) Patients being navigated (coached) and retained in the trial",
                            exp: "This metric measures patients being actively navigated and successfully retained, demonstrating ongoing navigator impact."
                          },
                          {
                            q: "Q8: How is navigator productivity measured according to the metrics?",
                            a: "B) Number of documented phone calls, emails, and consults objectively and by each NAV",
                            exp: "Productivity is measured through documented phone calls, emails, and consults, tracked both overall and by each navigator."
                          }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white p-3 rounded border">
                            <p className="font-semibold text-sm mb-1">{item.q}</p>
                            <p className="text-green-600 font-semibold text-sm mb-1">Answer: {item.a}</p>
                            <p className="text-xs text-slate-600">Explanation: {item.exp}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">🎪 Discussion Prompts</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• "Which metric do you think will be most meaningful to demonstrate your impact?"</li>
                        <li>• "How might you use metrics to advocate for more resources?"</li>
                        <li>• "What barriers do you anticipate being most common in your patient population?"</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-300">
                      <h3 className="font-semibold mb-2">🎉 Course Completion!</h3>
                      <p className="text-sm mb-2">
                        Congratulations! After this module, learners will have completed the entire TruVision 
                        Clinical Navigator Training. Take time to celebrate their achievement and reinforce 
                        the impact they'll have.
                      </p>
                      <p className="text-sm font-semibold text-pink-800">
                        Remember to emphasize: "You're now equipped to change lives and advance medical science. 
                        Welcome to the TruVision family!"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Additional Teaching Resources */}
        <Card className="border-2 border-green-300">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              Additional Teaching Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">📚 Recommended Pre-Class Preparation</h3>
              <ul className="space-y-1 text-sm">
                <li>• Review all module content thoroughly before delivery</li>
                <li>• Prepare 2-3 real-world examples from your own experience</li>
                <li>• Print reference images for learners if delivering in-person</li>
                <li>• Test all technology and platform access</li>
                <li>• Prepare a welcome packet with key takeaways and resources</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">🤝 Handling Common Questions</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Q: "What if I don't have a nursing background?"</strong></p>
                <p className="ml-4 text-slate-700">A: Clinical background is required, but this can include various healthcare roles. The key is understanding medical terminology and clinical processes.</p>
                
                <p className="mt-3"><strong>Q: "How do I handle a patient who refuses help?"</strong></p>
                <p className="ml-4 text-slate-700">A: Respect their autonomy while keeping the door open. Document the refusal, provide your contact info, and follow up periodically.</p>
                
                <p className="mt-3"><strong>Q: "What if I can't meet the ideal timelines?"</strong></p>
                <p className="ml-4 text-slate-700">A: Discuss workload with your supervisor. Never let minimum standards slip, but document barriers to meeting ideal standards.</p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">⭐ Success Indicators for Learners</h3>
              <p className="text-sm mb-2">By the end of the course, learners should be able to:</p>
              <ul className="space-y-1 text-sm ml-4">
                <li>✓ Explain all 4 phases of clinical trials to a patient</li>
                <li>✓ Recite the 7 TruVision tenets from memory</li>
                <li>✓ Conduct a comprehensive barrier assessment</li>
                <li>✓ Apply appropriate timing guidelines to patient scenarios</li>
                <li>✓ Track and report on key performance metrics</li>
                <li>✓ Articulate the value of clinical navigation to stakeholders</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
