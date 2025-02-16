import {
  UserCheck,
  Calendar,
  FileCheck,
  Users,
  Send,
  DollarSign,
  AlertTriangle,
  PieChart,
  FileText,
  BarChart,
   InfoIcon as Transparency, Zap,
   MessageCircle,
   Briefcase,
   BarChart3,
   BookText,
   ChartNetwork,
   CircleCheckBig,
   ShieldCheck,
   BriefcaseMedical,
   FileSearch,
   Workflow
} from "lucide-react";

export const statsData = [
  { number: "500+", label: "Clinics Launched" },
  { number: "98%", label: "Success Rate" },
  { number: "24/7", label: "Support" },
];

export const services = [
  {
    icon: UserCheck,
    title: "Credentialing & Revalidation",
    description:
      "Get your practice credentialed with insurers quickly and efficiently.",
    link: "/credentialing-revalidation",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Seamless scheduling solutions to keep your calendar full.",
  },
  {
    icon: FileCheck,
    title: "Pre-Certification & Insurance Eligibility Verification",
    description: "Ensure accurate coverage for every patient.",
  },
  {
    icon: Users,
    title: "Patient Demographic Entry & Charge Entry Services",
    description: "CPT & ICD-10 coding to streamline claims submission.",
  },
  {
    icon: Send,
    title: "Claims Submission",
    description: "Faster, error-free claim processing for steady cash flow.",
  },
  {
    icon: DollarSign,
    title: "Payment Posting Services",
    description: "Accurate posting and reconciliation of payments.",
  },
  {
    icon: AlertTriangle,
    title: "Rejection Analysis & Denial Management",
    description:
      "Identify, analyze, and resolve claims rejections efficiently.",
  },
  {
    icon: PieChart,
    title: "Accounts Receivable Follow-Up",
    description: "Proactive insurance follow-up to maximize reimbursements.",
  },
  {
    icon: FileText,
    title: "Patient Statement Support & Collections",
    description:
      "Optional patient collection services tailored to your practice.",
  },
  {
    icon: BarChart,
    title: "Practice Reporting & Analysis",
    description:
      "Custom reports to help track performance and identify growth opportunities.",
  },
];


export const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "3-4% of collections with no upfront fees.",
  },
  {
    icon: Transparency,
    title: "Transparent Pricing",
    description: "No monthly minimums or hidden charges.",
  },
  {
    icon: Zap,
    title: "Pay After Revenue",
    description: "Pay only after revenue generation.",
  },
];


export const steps = [
  {
    title: "Initial consultation",
    description: "Understand your needs",
    icon: MessageCircle,
  },
  {
    title: "Credentialing",
    description: "Insurance verification",
    icon: FileCheck,
  },
  {
    title: "Full RCM support",
    description: "Billing, claims, denial management",
    icon: Briefcase,
  },
  {
    title: "Practice reporting",
    description: "Financial analysis for growth",
    icon: BarChart3,
  },
];

export const features = [
  {
    title: "100% Free & No Commitment",
    description: "Get real insights without any risk.",
    icon: ShieldCheck, // Represents security and trust
  },
  {
    title: "Expert RCM Analysis",
    description: "Industry professionals analyze your practice.",
    icon: BriefcaseMedical, // Represents medical expertise
  },
  {
    title: "Uncover Lost Revenue",
    description: "Identify billing issues and missed claims.",
    icon: FileSearch, // Represents searching for financial gaps
  },
  {
    title: "Improve Operational Efficiency",
    description: "Streamline workflow and patient management.",
    icon: Workflow, // Represents process optimization
  },
  {
    title: "Data-Driven Insights",
    description: "Actionable recommendations to increase profitability.",
    icon: BarChart3, // Represents analytics and insights
  },
];


export const faqs = [
  {
    question: "How long does the evaluation take?",
    answer: "You'll receive your report within 48 hours.",
  },
  {
    question: "Is this really free?",
    answer: "Yes! There are no hidden fees or commitments.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Just basic practice details. No sensitive patient data required.",
  },
  {
    question: "How will I receive my evaluation?",
    answer: "You'll get a detailed report via email or a scheduled call.",
  },
];

export const page2steps = [
  {
    title: "Fill out the quick form with basic practice details.",
    icon: BookText,
  },
  {
    title: "Our experts review your billing, workflow, and revenue cycle.",
    icon: ChartNetwork,
  },
  {
    title: "You receive a personalized evaluation report with key insights.",
    icon: CircleCheckBig,
  },
  {
    title: "Implement recommendations to boost revenue and efficiency.",
    icon: Zap,
  },
];

export const testimonials = [
  {
    quote:
      "This evaluation helped me identify billing issues that were costing my practice thousands. I highly recommend it!",
    author: "Dr. Shah",
    position: "Internal Medicine",
  },
  {
    quote:
      "I had no idea how much revenue I was losing until I got my free report. The insights were eye-opening!",
    author: "Dr. Patel",
    position: "Family Medicine",
  },
];
