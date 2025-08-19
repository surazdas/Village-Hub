import React, { useState, useEffect } from "react";

import { BookOpen, Users, TrendingUp, Award } from "lucide-react";
import SubjectCard from "./SubjectCard";
import GradeBreadcrumb from "./GradeBreadcrumb";
import { getSubjectsByGrade, getAvailableGrades } from "@/data/subjects";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

const SubjectsPage: React.FC = () => {
  const classNo = useParams<{ grade: any }>();
  const grade = classNo?.grade || "9";
  const navigate = useRouter();

  const [subjects, setSubjects] = useState(getSubjectsByGrade(grade || "9"));
  const [availableGrades] = useState(getAvailableGrades());

  useEffect(() => {
    if (grade) {
      setSubjects(getSubjectsByGrade(grade));
    }
  }, [grade]);

  const handleGradeChange = (newGrade: string) => {
    navigate.push(`/guides/${newGrade}`);
  };

  const currentGrade = grade || "9";
  const stats = [
    { icon: BookOpen, label: "Subjects", value: subjects.length },
    { icon: Users, label: "Students", value: "10,000+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
    { icon: Award, label: "Certifications", value: subjects.length * 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Grade {currentGrade} Learning Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore comprehensive learning resources, interactive materials, and
            downloadable guides tailored for Grade {currentGrade} students.
          </p>
        </div>

        <GradeBreadcrumb
          currentGrade={currentGrade}
          availableGrades={availableGrades}
          onGradeChange={handleGradeChange}
        />

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Subjects Grid */}
        {subjects.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Available Subjects
              </h2>
              <div className="text-sm text-gray-600">
                {subjects.length} subject{subjects.length !== 1 ? "s" : ""}{" "}
                available
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {subjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} grade={grade} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No subjects available for Grade {currentGrade}
            </h3>
            <p className="text-gray-500">
              Please select a different grade to explore available subjects.
            </p>
          </div>
        )}

        {/* Learning Features */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Learning Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Interactive Learning
              </h3>
              <p className="text-gray-600 text-sm">
                Engage with dynamic content and interactive exercises designed
                for your grade level.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Progress Tracking
              </h3>
              <p className="text-gray-600 text-sm">
                Monitor your learning progress and achievements with detailed
                analytics.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Certification
              </h3>
              <p className="text-gray-600 text-sm">
                Earn certificates upon completion of courses and demonstrate
                your expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;
