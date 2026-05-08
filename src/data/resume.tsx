import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Salman Atwan Alshammari",
  initials: "SA",
  url: "https://salman-finance.vercel.app",
  location: "Riyadh, Saudi Arabia",
  locationLink: "https://maps.app.goo.gl/Riyadh",
  description:
    "Financial Analyst | FP&A & Strategic Planning. Expert in leveraging Power BI, SQL, and ERP integration to bridge the gap between complex data and strategic financial decisions.",
  summary:
    "Strategic Finance Professional with progressive experience in Financial Planning & Analysis (FP&A) and corporate leadership. Expert in leveraging Power BI. SQL, and ERP integration to bridge the gap between complex data and strategic financial decisions. Proven track record of engineering financial models and managing multimillion-dollar operating budgets to drive growth and optimize capital allocation aligned with Saudi Vision 2030.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Financial Modeling", icon: Icons.go },
    { name: "FP&A & Budgeting", icon: Icons.email },
    { name: "Power BI & DAX", icon: Icons.x },
    { name: "SQL & Data Modeling", icon: Icons.github },
    { name: "Advanced Excel (VBA)", icon: Icons.linkedin },
    { name: "ERP (Onyx & SAP)", icon: Icons.youtube },
    { name: "Strategic Planning", icon: Icons.email },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "SalmanAlshammari@outlook.sa",
    tel: "+966545002806",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/salman-alshammari-362a45305",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:SalmanAlshammari@outlook.sa",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Al Omran Solutions for Building Materials",
      href: "#",
      badges: [],
      location: "Hafar Al-Batin, Saudi Arabia",
      title: "Financial Analyst | Operations & Financial Management",
      logoUrl: "",
      start: "Feb 2026",
      end: "Apr 2026",
      description:
        "Leading comprehensive financial operations and strategic planning. Developing robust financial policies and internal control frameworks to mitigate corporate risks. Managing the annual budgeting process and delivering advanced variance analysis to support executive-level decisions. Optimizing corporate liquidity and cash flow forecasting.",
    },
    {
      company: "Al Omran Solutions for Building Materials",
      href: "#",
      badges: ["Pre-Graduation"],
      location: "Hafar Al-Batin, Saudi Arabia",
      title: "Retail Sales Associate - Financial Operations",
      logoUrl: "",
      start: "Jul 2022",
      end: "Dec 2023",
      description:
        "Streamlined high-volume POS operations for 200+ daily transactions, ensuring 100% reconciliation accuracy. Optimized inventory management for 500+ SKUs using Onyx ERP, achieving a 30% reduction in stock discrepancies. Synchronized month-end closing processes, including comprehensive account reconciliations.",
    },
  ],
  education: [
    {
      school: "University of Hafar Al-Batin",
      href: "#",
      degree: "Bachelor of Science in Finance",
      logoUrl: "",
      start: "Jan 2020",
      end: "Apr 2026",
    },
  ],
  projects: [
    {
      title: "ESG Impact Analysis (Graduation Project)",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "Conducted quantitative research on ESG practices for 50+ Saudi companies using GRI/SASB frameworks and regression models. Built financial models to measure ROI of sustainability investments and developed a Power BI dashboard.",
      technologies: ["Power BI", "Financial Modeling", "Regression Analysis"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Multi-Branch Sales Dashboard",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Developed a Power BI dashboard using Power Query and DAX for real-time tracking across 10+ branches. Identified underperforming units through variance analysis, resulting in an 18% uplift in sales performance.",
      technologies: ["Power BI", "DAX", "Variance Analysis"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Integrated Financial Planning System",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Designed an Excel-based system for Sales, Capital, and Operating budgets capable of processing multi-scenario analyses, reducing reporting time by 60%. Automated KPI tracking using VBA macros.",
      technologies: ["Advanced Excel", "VBA & Macros", "FP&A"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;

