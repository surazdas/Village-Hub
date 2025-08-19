export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  topics: string[];
  guideUrl: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface GradeData {
  [grade: string]: Subject[];
}
// object,
export const subjectsData: GradeData = {
  "7": [
    {
      id: "english-7",
      name: "English",
      description: "Reading comprehension, grammar, and basic writing",
      icon: "BookOpen",
      color: "from-yellow-400 to-yellow-500",
      topics: ["Reading", "Grammar", "Writing", "Vocabulary"],
      guideUrl: "/guides/english-grade-7.pdf",
      difficulty: "Beginner",
    },
    {
      id: "nepali-7",
      name: "Nepali",
      description: "Reading comprehension, grammar, and basic writing",
      icon: "BookOpen",
      color: "from-yellow-400 to-yellow-500",
      topics: ["Reading", "Grammar", "Writing", "Vocabulary"],
      guideUrl: "/guides/nepali-grade-7.pdf",
      difficulty: "Beginner",
    },
    {
      id: "science-7",
      name: "Science",
      description: "Introduction to physics, chemistry, and biology",
      icon: "BookOpen",
      color: "from-orange-400 to-orange-500",
      topics: ["Basic Physics", "Chemistry", "Biology", "Earth Science"],
      guideUrl: "/guides/science-grade-7.pdf",
      difficulty: "Beginner",
    },

    {
      id: "math-7",
      name: "Mathematics",
      description: "Basic algebra, geometry, and arithmetic fundamentals",
      icon: "Calculator",
      color: "from-emerald-400 to-emerald-500",
      topics: ["Basic Algebra", "Geometry", "Fractions", "Decimals"],
      guideUrl: "/guides/math-grade-7.pdf",
      difficulty: "Beginner",
    },
    {
      id: "social-7",
      name: "Social Studies",
      description: "History, geography, and civic education basics",
      icon: "Scroll",
      color: "from-emerald-500 to-orange-500",
      topics: ["History", "Geography", "Civics", "Culture"],
      guideUrl: "/guides/social-grade-7.pdf",
      difficulty: "Beginner",
    },
    {
      id: "health-8",
      name: "Health & Wellness",
      description: "Physical health, mental wellness, and life skills",
      icon: "BookOpen",
      color: "from-yellow-500 to-orange-400",
      topics: [
        "Physical Health",
        "Mental Wellness",
        "Nutrition",
        "Life Skills",
      ],
      guideUrl: "/guides/health-grade-8.pdf",
      difficulty: "Beginner",
    },
  ],
  "8": [
    {
      id: "english-8",
      name: "English",
      description: "Literary analysis, creative writing, and communication",
      icon: "BookOpen",
      color: "from-yellow-400 to-yellow-500",
      topics: [
        "Literature Analysis",
        "Creative Writing",
        "Public Speaking",
        "Research",
      ],
      guideUrl: "/guides/english-grade-8.pdf",
      difficulty: "Intermediate",
    },
    {
      id: "nepali-8",
      name: "Nepali",
      description: "Reading comprehension, grammar, and basic writing",
      icon: "BookOpen",
      color: "from-yellow-400 to-yellow-500",
      topics: ["Reading", "Grammar", "Writing", "Vocabulary"],
      guideUrl: "/guides/nepali-grade-8.pdf",
      difficulty: "Beginner",
    },
    {
      id: "math-8",
      name: "Mathematics",
      description: "Pre-algebra, advanced geometry, and problem solving",
      icon: "Calculator",
      color: "from-emerald-400 to-emerald-500",
      topics: [
        "Pre-Algebra",
        "Advanced Geometry",
        "Statistics",
        "Problem Solving",
      ],
      guideUrl: "/guides/math-grade-8.pdf",
      difficulty: "Intermediate",
    },
    {
      id: "science-8",
      name: "Science",
      description:
        "Chemistry basics, physics principles, and scientific method",
      icon: "BookOpen",
      color: "from-orange-400 to-orange-500",
      topics: [
        "Chemistry Basics",
        "Physics Principles",
        "Scientific Method",
        "Lab Skills",
      ],
      guideUrl: "/guides/science-grade-8.pdf",
      difficulty: "Intermediate",
    },

    {
      id: "social-8",
      name: "Social",
      description:
        "Ancient civilizations, world cultures, and historical analysis",
      icon: "Scroll",
      color: "from-emerald-500 to-orange-500",
      topics: [
        "Ancient Civilizations",
        "World Cultures",
        "Historical Analysis",
        "Geography",
      ],
      guideUrl: "/guides/social-grade-8.pdf",
      difficulty: "Intermediate",
    },
    {
      id: "tech-8",
      name: "Technology",
      description:
        "Computer basics, digital literacy, and introduction to coding",
      icon: "Code",
      color: "from-yellow-500 to-orange-500",
      topics: [
        "Computer Basics",
        "Digital Literacy",
        "Basic Coding",
        "Internet Safety",
      ],
      guideUrl: "/guides/tech-grade-8.pdf",
      difficulty: "Beginner",
    },
    {
      id: "health-8",
      name: "Health & Wellness",
      description: "Physical health, mental wellness, and life skills",
      icon: "BookOpen",
      color: "from-emerald-400 to-yellow-500",
      topics: [
        "Physical Health",
        "Mental Wellness",
        "Nutrition",
        "Life Skills",
      ],
      guideUrl: "/guides/health-grade-8.pdf",
      difficulty: "Beginner",
    },
  ],
  "9": [
    {
      id: "english-9",
      name: "English",
      description: "Literature, writing, and communication skills",
      icon: "BookOpen",
      color: "from-yellow-400 to-yellow-500",
      topics: ["Literature", "Writing", "Grammar", "Speaking"],
      guideUrl: "/guides/english-grade-9.pdf",
      difficulty: "Intermediate",
    },
    {
      id: "nepali-9",
      name: "Nepali",
      description: "Reading comprehension, grammar, and basic writing",
      icon: "BookOpen",
      color: "from-yellow-400 to-yellow-500",
      topics: ["Reading", "Grammar", "Writing", "Vocabulary"],
      guideUrl: "/guides/nepali-grade-9.pdf",
      difficulty: "Beginner",
    },
    {
      id: "math-9",
      name: "Mathematics",
      description: "Algebra, geometry, and number theory fundamentals",
      icon: "Calculator",
      color: "from-emerald-400 to-emerald-500",
      topics: ["Algebra", "Geometry", "Statistics", "Trigonometry"],
      guideUrl: "/guides/math-grade-9.pdf",
      difficulty: "Intermediate",
    },
    {
      id: "science-9",
      name: "Science",
      description: "Physics, chemistry, and biology essentials",
      icon: "Microscope",
      color: "from-orange-400 to-orange-500",
      topics: ["Physics", "Chemistry", "Biology", "Lab Work"],
      guideUrl: "/guides/science-grade-9.pdf",
      difficulty: "Intermediate",
    },

    {
      id: "social-9",
      name: "Social-Studies",
      description: "World history and historical analysis",
      icon: "Scroll",
      color: "from-emerald-500 to-orange-500",
      topics: ["World History", "Civilization", "Historical Analysis"],
      guideUrl: "/guides/social-grade-9.pdf",
      difficulty: "Intermediate",
    },

    {
      id: "health-9",
      name: "Health & Wellness",
      description: "Physical health, mental wellness, and life skills",
      icon: "BookOpen",
      color: "from-emerald-400 to-yellow-500",
      topics: [
        "Physical Health",
        "Mental Wellness",
        "Nutrition",
        "Life Skills",
      ],
      guideUrl: "/guides/health-grade-9.pdf",
      difficulty: "Beginner",
    },
  ],
  "10": [
    {
      id: "english-10",
      name: "English",
      description:
        "Advanced literature analysis and creative writing and vocabalary,grammar",
      icon: "BookOpen",
      color: "from-yellow-400 to-yellow-500",
      topics: [
        "Advanced Literature",
        "Creative Writing",
        "Critical Analysis",
        "Debate",
      ],
      guideUrl: "/guides/english-grade-10.pdf",
      difficulty: "Advanced",
    },
    {
      id: "nepali-10",
      name: "Nepali",
      description:
        "Reading comprehension, grammar, and basic writing and vocabalary and speaking",
      icon: "BookOpen",
      color: "from-red-400 to-red-500",
      topics: ["Reading", "Grammar", "Writing", "Vocabulary", "Speaking"],
      guideUrl: "/guides/nepali-grade-10.pdf",
      difficulty: "Beginner",
    },
    {
      id: "math-10",
      name: "Mathematics",
      description:
        "Advanced algebra, calculus introduction, and complex geometry",
      icon: "Calculator",
      color: "from-emerald-400 to-emerald-500",
      topics: [
        "Advanced Algebra",
        "Pre-Calculus",
        "Complex Geometry",
        "Statistics",
      ],
      guideUrl: "/guides/math-grade-10.pdf",
      difficulty: "Advanced",
    },
    {
      id: "science-10",
      name: "Science",
      description: "Advanced physics, organic chemistry, and molecular biology",
      icon: "BookOpen",
      color: "from-orange-400 to-orange-500",
      topics: [
        "Advanced Physics",
        "Organic Chemistry",
        "Molecular Biology",
        "Research Methods",
      ],
      guideUrl: "/guides/science-grade-10.pdf",
      difficulty: "Advanced",
    },

    {
      id: "social-10",
      name: "Social-Studies",
      description: "World history and historical analysis,Our Country History",
      icon: "Scroll",
      color: "from-emerald-500 to-orange-500",
      topics: [
        "World History",
        "Civilization",
        "Historical Analysis",
        "About of Our Country",
      ],
      guideUrl: "/guides/social-grade-10.pdf",
      difficulty: "Intermediate",
    },
    {
      id: "health-10",
      name: "Health & Wellness",
      description:
        "Physical health, mental wellness, and life skills,about of all body parts",
      icon: "BookOpen",
      color: "from-emerald-400 to-yellow-500",
      topics: [
        "Physical Health",
        "Mental Wellness",
        "Nutrition",
        "Life Skills",
      ],
      guideUrl: "/guides/health-grade-10.pdf",
      difficulty: "Beginner",
    },
    {
      id: "opt-math-10",
      name: "opt-Mathematics",
      description:
        "Advanced algebra, calculus introduction, and complex geometry",
      icon: "Calculator",
      color: "to-red-400 from-orange-500",
      topics: [
        "Advanced Algebra",
        "Pre-Calculus",
        "Complex Geometry",
        "Statistics",
      ],
      guideUrl: "/guides/math-grade-10.pdf",
      difficulty: "Advanced",
    },
  ],
};

export const getSubjectsByGrade = (grade: string): Subject[] => {
  return subjectsData[grade] || [];
};

export const getAvailableGrades = (): string[] => {
  return Object.keys(subjectsData).sort();
};
