import React from "react";
import { ChevronRight, GraduationCap } from "lucide-react";

interface GradeBreadcrumbProps {
  currentGrade: string;
  availableGrades: string[];
  onGradeChange: (grade: string) => void;
}

const GradeBreadcrumb: React.FC<GradeBreadcrumbProps> = ({
  currentGrade,
  availableGrades,
  onGradeChange,
}) => {
  return (
    <div className="flex items-center gap-2 mb-8">
      <GraduationCap className="w-5 h-5 text-emerald-500" />
      <span className="text-gray-600">Grade</span>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <div className="flex gap-2">
        {availableGrades.map((grade) => (
          <button
            key={grade}
            onClick={() => onGradeChange(grade)}
            className={`px-3 py-1 rounded-lg font-medium transition-colors duration-200 ${
              grade === currentGrade
                ? "bg-emerald-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {grade}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GradeBreadcrumb;
