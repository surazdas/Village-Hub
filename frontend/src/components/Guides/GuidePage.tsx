import React from "react";

import {
  BookOpen,
  Users,
  Clock,
  Award,
  ArrowRight,
  Star,
  Target,
  TrendingUp,
  Brain,
  Lightbulb,
  Rocket,
  Trophy,
} from "lucide-react";
import { useRouter } from "next/router";

interface GradeInfo {
  grade: string;
  title: string;
  description: string;
  keyFocus: string[];
  subjects: string[];
  learningOutcomes: string[];
  difficulty: "Foundation" | "Intermediate" | "Advanced" | "Expert";
  icon: React.ComponentType<any>;
  color: string;
  bgGradient: string;
  stats: {
    subjects: number;
    hours: string;
    projects: number;
  };
}

const gradeData: GradeInfo[] = [
  {
    grade: "7",
    title: "Foundation Builder",
    description:
      "Build strong fundamentals across core subjects with interactive learning experiences designed for young minds.",
    keyFocus: [
      "Basic Concepts",
      "Problem Solving",
      "Creative Thinking",
      "Study Habits",
    ],
    subjects: [
      "Mathematics",
      "Science",
      "English",
      "Social Studies",
      "Health",
      "Nepali",
    ],
    learningOutcomes: [
      "Master fundamental mathematical operations",
      "Understand basic scientific principles",
      "Develop reading comprehension skills",
      "Learn effective study techniques",
    ],
    difficulty: "Foundation",
    icon: Lightbulb,
    color: "from-emerald-400 to-yellow-500",
    bgGradient: "from-emerald-50 to-yellow-50",
    stats: { subjects: 6, hours: "120+", projects: 15 },
  },
  {
    grade: "8",
    title: "Skill Developer",
    description:
      "Advance your knowledge with more complex topics while developing critical thinking and analytical skills.",
    keyFocus: [
      "Advanced Concepts",
      "Critical Analysis",
      "Research Skills",
      "Collaboration",
    ],
    subjects: [
      "Math",
      "Science",
      "English",
      "Social Studies",
      "Technology",
      "Nepali",
      "Health",
    ],
    learningOutcomes: [
      "Apply mathematical concepts to real problems",
      "Conduct basic scientific experiments",
      "Analyze literary works and themes",
      "Research historical events effectively",
    ],
    difficulty: "Intermediate",
    icon: Brain,
    color: "from-orange-400 to-emerald-500",
    bgGradient: "from-orange-50 to-emerald-50",
    stats: { subjects: 7, hours: "150+", projects: 20 },
  },
  {
    grade: "9",
    title: "Knowledge Explorer",
    description:
      "Explore diverse academic fields with comprehensive curricula that prepare you for advanced studies.",
    keyFocus: [
      "Subject Mastery",
      "Independent Learning",
      "Project Work",
      "Presentation Skills",
    ],
    subjects: ["Math", "Science", "Social-Studies", "English", "Health"],
    learningOutcomes: [
      "Solve complex algebraic equations",
      "Understand biological processes",
      "Master chemical reactions and formulas",
      "Analyze global literature and cultures",
    ],
    difficulty: "Advanced",
    icon: Rocket,
    color: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
    stats: { subjects: 8, hours: "200+", projects: 25 },
  },
  {
    grade: "10",
    title: "Academic Achiever",
    description:
      "Master advanced concepts and prepare for higher education with rigorous academic challenges.",
    keyFocus: [
      "Advanced Analysis",
      "Research Projects",
      "College Prep",
      "Leadership Skills",
    ],
    subjects: [
      "Pre-Calculus",
      "Advanced Sciences",
      "World History",
      "Computer Science",
      "Philosophy",
    ],
    learningOutcomes: [
      "Master pre-calculus concepts",
      "Conduct advanced scientific research",
      "Develop strong writing and communication skills",
      "Prepare for standardized tests and college applications",
    ],
    difficulty: "Expert",
    icon: Trophy,
    color: "from-emerald-500 to-orange-600",
    bgGradient: "from-emerald-50 to-orange-100",
    stats: { subjects: 10, hours: "250+", projects: 30 },
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Foundation":
      return "bg-green-100 text-green-800";
    case "Intermediate":
      return "bg-blue-100 text-blue-800";
    case "Advanced":
      return "bg-purple-100 text-purple-800";
    case "Expert":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const GuidePage: React.FC = () => {
  const navigate = useRouter();

  const handleGradeNavigation = (grade: string) => {
    navigate.push(`/guides/${grade}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-yellow-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-400">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Learning Guide Hub
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Your comprehensive learning journey starts here. Explore
              grade-specific curricula, download study guides, and unlock your
              academic potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>50,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Target className="w-8 h-8 mx-auto text-emerald-500 mb-3" />
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-600">Grade Levels</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <BookOpen className="w-8 h-8 mx-auto text-emerald-500 mb-3" />
            <div className="text-2xl font-bold text-gray-900">29</div>
            <div className="text-sm text-gray-600">Total Subjects</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Clock className="w-8 h-8 mx-auto text-emerald-500 mb-3" />
            <div className="text-2xl font-bold text-gray-900">720+</div>
            <div className="text-sm text-gray-600">Learning Hours</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <TrendingUp className="w-8 h-8 mx-auto text-emerald-500 mb-3" />
            <div className="text-2xl font-bold text-gray-900">90</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
        </div>

        {/* Grade Sections */}
        <div className="space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each grade level is carefully designed to build upon previous
              knowledge while introducing new challenges and opportunities for
              growth.
            </p>
          </div>

          {gradeData.map((grade, index) => (
            <div key={grade.grade} className="relative">
              <div
                className={`bg-gradient-to-r ${grade.bgGradient} rounded-2xl overflow-hidden shadow-xl`}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  {/* Content Side */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${grade.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <grade.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-gray-900">
                            Grade {grade.grade}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                              grade.difficulty
                            )}`}
                          >
                            {grade.difficulty}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-emerald-600">
                          {grade.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      {grade.description}
                    </p>

                    {/* Key Focus Areas */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-emerald-500" />
                        Key Focus Areas
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {grade.keyFocus.map((focus, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-sm font-medium"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div className="mb-8">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-emerald-500" />
                        Learning Outcomes
                      </h5>
                      <ul className="space-y-2">
                        {grade.learningOutcomes.map((outcome, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleGradeNavigation(grade.grade)}
                      className={`bg-gradient-to-r ${grade.color} cursor-pointer text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2`}
                    >
                      Explore Grade {grade.grade}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Stats & Subjects Side */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {grade.stats.subjects}
                        </div>
                        <div className="text-xs text-gray-600">Subjects</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {grade.stats.hours}
                        </div>
                        <div className="text-xs text-gray-600">Hours</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {grade.stats.projects}
                        </div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                    </div>

                    {/* Subjects List */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                      <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-emerald-500" />
                        Available Subjects
                      </h5>
                      <div className="grid grid-cols-1 gap-3">
                        {grade.subjects.map((subject, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                          >
                            <div
                              className={`w-3 h-3 bg-gradient-to-r ${grade.color} rounded-full`}
                            ></div>
                            <span className="text-gray-700 font-medium">
                              {subject}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-400 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your grade level and begin exploring comprehensive learning
            materials designed for your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {gradeData.map((grade) => (
              <button
                key={grade.grade}
                onClick={() => handleGradeNavigation(grade.grade)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
              >
                Grade {grade.grade}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
