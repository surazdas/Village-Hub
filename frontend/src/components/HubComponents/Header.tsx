import React, { useState } from "react";

import {
  GraduationCap,
  BookOpen,
  Play,
  Users,
  MessageCircle,
  Megaphone,
  Menu,
  X,
  ChevronDown,
  FileText,
  Video,
  Award,
  HelpCircle,
  Bell,
  Target,
  Calculator,
  Globe,
  Briefcase,
  PenTool,
  Monitor,
  Heart,
  TrendingUp,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";

interface DropdownItem {
  name: string;
  path: string;
  icon: React.ComponentType<any>;
  description: string;
}

interface MenuItem {
  name: string;
  icon: React.ComponentType<any>;
  dropdown: DropdownItem[];
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useRouter();

  const menuItems: MenuItem[] = [
    {
      name: "Guides",
      icon: GraduationCap,
      dropdown: [
        {
          name: "Career Paths",
          path: "/guides",
          icon: Target,
          description: "Explore grade-wise learning journeys",
        },
        {
          name: "Grade 7",
          path: "/guides/7",
          icon: BookOpen,
          description: "Choose subjects for 7 grade",
        },
        {
          name: "Grade 8",
          path: "/guides/8",
          icon: BookOpen,
          description: "Choose subjects for 8 grade",
        },
        {
          name: "Grade 9",
          path: "/guides/9",
          icon: BookOpen,
          description: "Choose subjects for 9 grade",
        },
        {
          name: "Grade 10",
          path: "/guides/10",
          icon: BookOpen,
          description: "Choose subjects for 10 grade",
        },
      ],
    },
    {
      name: "Exam Prep",
      icon: BookOpen,
      dropdown: [
        {
          name: "Study Materials",
          path: "/exam-prep/materials",
          icon: FileText,
          description: "Comprehensive study guides",
        },
        {
          name: "Practice Tests",
          path: "/exam-prep/tests",
          icon: PenTool,
          description: "Mock exams and quizzes",
        },
        {
          name: "Previous Papers",
          path: "/exam-prep/papers",
          icon: Calculator,
          description: "Past examination papers",
        },
        {
          name: "Tips & Strategies",
          path: "/exam-prep/tips",
          icon: TrendingUp,
          description: "Expert exam strategies",
        },
      ],
    },
    {
      name: "Videos",
      icon: Play,
      dropdown: [
        {
          name: "Spoken English",
          path: "/videos/english",
          icon: Globe,
          description: "Improve your English speaking",
        },
        {
          name: "Typing Skills",
          path: "/videos/typing",
          icon: Monitor,
          description: "Learn fast and accurate typing",
        },
        {
          name: "Computer Basics",
          path: "/videos/computer",
          icon: Monitor,
          description: "Essential computer skills",
        },
        {
          name: "Interview Prep",
          path: "/videos/interview",
          icon: Briefcase,
          description: "Ace your job interviews",
        },
      ],
    },
    {
      name: "Stories",
      icon: Users,
      dropdown: [
        {
          name: "Success Stories",
          path: "/success-stories/featured",
          icon: Award,
          description: "Inspiring achievement stories",
        },
        {
          name: "Student Journeys",
          path: "/success-stories/students",
          icon: GraduationCap,
          description: "Academic success paths",
        },
        {
          name: "Career Changes",
          path: "/success-stories/careers",
          icon: TrendingUp,
          description: "Professional transformation stories",
        },
        {
          name: "Community Impact",
          path: "/success-stories/community",
          icon: Heart,
          description: "Local community contributions",
        },
      ],
    },
    {
      name: "Forum",
      icon: MessageCircle,
      dropdown: [
        {
          name: "Ask Questions",
          path: "/forum/questions",
          icon: HelpCircle,
          description: "Get help from the community",
        },
        {
          name: "Study Groups",
          path: "/forum/groups",
          icon: Users,
          description: "Join collaborative learning",
        },
        {
          name: "Discussions",
          path: "/forum/discussions",
          icon: MessageCircle,
          description: "General topic discussions",
        },
        {
          name: "Expert Answers",
          path: "/forum/experts",
          icon: Award,
          description: "Verified expert responses",
        },
      ],
    },
    {
      name: "Updates",
      icon: Megaphone,
      dropdown: [
        {
          name: "Government News",
          path: "/updates/government",
          icon: Bell,
          description: "Latest government announcements",
        },
        {
          name: "Education Policy",
          path: "/updates/education",
          icon: BookOpen,
          description: "Educational policy changes",
        },
        {
          name: "Job Notifications",
          path: "/updates/jobs",
          icon: Briefcase,
          description: "Government job openings",
        },
        {
          name: "Important Notices",
          path: "/updates/notices",
          icon: AlertCircle,
          description: "Critical announcements",
        },
      ],
    },
  ];

  const isActive = (menuName: string, dropdownItems: DropdownItem[]) => {
    return dropdownItems.some((item) => {
      if (item.path === "/guide") {
        return location.pathname === "/guide" || location.pathname === "/";
      }
      return location.pathname.startsWith(item.path);
    });
  };

  const handleMouseEnter = (menuName: string) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 ml-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="animate-pulse w-6 h-6 text-white" />
            </div>
            <div className="block">
              <h1 className=" hover:shadow-lg  transiti on all hover:scale-105 text-xl font-bold bg-gradient-to-r from-emerald-500 to-orange-500 bg-clip-text text-transparent">
                VillageHub
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Learning Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 ">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative "
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium hover:shadow-lg  transiti on all hover:scale-105 transition-all duration-200 hover:bg-emerald-50 group ${
                    isActive(item.name, item.dropdown)
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm ">{item.name}</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200  ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div
                    className={` absolute top-full ${
                      item.name === "Updates"
                        ? "right-0"
                        : "left-1/2 transform -translate-x-1/2"
                    } mt-0 w-72   bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        href={dropdownItem.path}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-emerald-50 transition-colors duration-200 group"
                      >
                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-200">
                          <dropdownItem.icon className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">
                            {dropdownItem.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {dropdownItem.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center gap-3 px-4 py-2 font-semibold text-gray-900">
                    <item.icon className="w-5 h-5 text-emerald-500" />
                    <span>{item.name}</span>
                  </div>
                  <div className="pl-8 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        href={dropdownItem.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                      >
                        <dropdownItem.icon className="w-4 h-4" />
                        <div>
                          <div className="text-sm font-medium">
                            {dropdownItem.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {dropdownItem.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
