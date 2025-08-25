import type { Feature } from '@/types';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  Shield, 
  Globe, 
  Brain, 
  CheckCircle, 
  FileText, 
  Zap, 
  Clock, 
  BookmarkPlus 
} from 'lucide-react';

export const featuresData: Feature[] = [
  {
    icon: Users,
    title: "Student Management",
    description: "Complete student lifecycle management from admission to graduation with detailed profiles and progress tracking."
  },
  {
    icon: Brain,
    title: "AI Question Generation",
    description: "Automatically generate diverse question sets for exams and assessments using advanced AI technology."
  },
  {
    icon: Calendar,
    title: "Smart Timetable",
    description: "AI-powered timetable generation with intelligent scheduling, conflict detection, and resource optimization."
  },
  {
    icon: FileText,
    title: "Automated Reports",
    description: "Generate comprehensive academic and administrative reports automatically with customizable templates."
  },
  {
    icon: BookmarkPlus,
    title: "AI Flashcards",
    description: "Create personalized study materials with AI-generated flashcards tailored to each student's learning needs."
  },
  {
    icon: CheckCircle,
    title: "AI Answer Checker",
    description: "Intelligent grading system that evaluates answers accurately and provides instant feedback to students."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive reporting and data insights to make informed decisions and track institutional performance."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with FERPA compliance and role-based access control for data protection."
  },
  {
    icon: Globe,
    title: "Cloud-Based",
    description: "Access your school management system anywhere, anytime with automatic backups and updates."
  }
];
