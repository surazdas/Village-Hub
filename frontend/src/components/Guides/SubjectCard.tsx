import React from "react";
import { Download, BookOpen, Clock, Star } from "lucide-react";
import { Subject } from "@/data/subjects";
import Link from "next/link";

interface SubjectCardProps {
  subject: Subject;
  grade: string;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Calculator: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M9 11h.01M12 11h.01M15 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
  Microscope: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  ),
  BookOpen: BookOpen,
  Scroll: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
  Code: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  Zap: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  Flask: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A1.934 1.934 0 004 17.5c0 .775.301 1.52.838 2.06A2.934 2.934 0 007 20.5c.775 0 1.52-.301 2.06-.838a1.934 1.934 0 001.5-.238 1.934 1.934 0 001.5.238c.54.537 1.285.838 2.06.838.775 0 1.52-.301 2.06-.838A1.934 1.934 0 0018 17.5c0-.537-.194-1.055-.572-1.428z"
      />
    </svg>
  ),
  Dna: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"
      />
    </svg>
  ),
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800";
    case "Advanced":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, grade }) => {
  const IconComponent = iconMap[subject.icon] || BookOpen;

  const handleDownload = () => {
    // In a real app, this would trigger an actual download
    console.log(`Downloading guide for ${subject.name}`);
    // You could implement actual file download logic here
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className={`h-32 bg-gradient-to-r ${subject.color} relative`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-4 left-4">
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-4 right-4">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
              subject.difficulty
            )}`}
          >
            {subject.difficulty}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{subject.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {subject.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            Key Topics
          </h4>
          <div className="flex flex-wrap gap-2">
            {subject.topics.map((topic, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href={`/guides/${grade}/read-pdf/${subject.name}`}
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Star className="w-4 h-4" />
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
