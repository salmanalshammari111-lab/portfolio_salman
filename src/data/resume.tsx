import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Salman Atwan Alshammari",
  initials: "SA",
  url: "https://salman-finance.vercel.app",
  location: "Riyadh, Saudi Arabia",
  locationLink: "https://www.google.com/maps/place/Riyadh",
  description:
    "Financial Analyst | FP&A & Strategic Planning. Expert in leveraging Power BI, SQL, and ERP integration to bridge the gap between complex data and strategic financial decisions.",
  summary:
    "Strategic Finance Professional with progressive experience in Financial Planning & Analysis (FP&A) and corporate leadership. Expert in leveraging Power BI, SQL, and ERP integration to bridge the gap between complex data and strategic financial decisions. Proven track record of engineering financial models and managing multimillion-dollar operating budgets to drive growth and optimize capital allocation aligned with Saudi Vision 2030.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Financial Modeling", icon: NotebookIcon },
    { name: "FP&A & Budgeting", icon: NotebookIcon },
    { name: "Power BI & DAX", icon: NotebookIcon },
    { name: "SQL & Data Modeling", icon: Postgresql },
    { name: "Advanced Excel (VBA)", icon: NotebookIcon },
    { name: "ERP (Onyx & SAP)", icon: HomeIcon },
    { name: "Strategic Planning", icon: NotebookIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "SalmanAlshammari@outlook.sa",
    tel: "+966545002806",
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/salman-alshammari-362a45305",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
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
      badges: ["Current"],
      location: "Hafar Al-Batin, Saudi Arabia",
      title: "Financial Analyst | Operations & Financial Management",
      logoUrl: "/me.png",
      start: "Feb 2026",
      end: "Present",
      description:
        "Leading comprehensive financial operations and strategic planning. Developing robust financial policies and internal control frameworks to mitigate corporate risks. Managing the annual budgeting process and delivering advanced variance analysis to support executive-level decisions. Optimizing corporate liquidity and cash flow forecasting.",
    },
    {
      company: "Al Omran Solutions for Building Materials",
      href: "#",
      badges: ["Pre-Graduation"],
      location: "Hafar Al-Batin, Saudi Arabia",
      title: "Retail Sales Associate - Financial Operations",
      logoUrl: "/me.png",
      start: "Jul 2022",
      end: "Dec 2023",
      description:
        "Streamlined high-volume POS operations for 200+ daily transactions, ensuring 100% reconciliation accuracy. Optimized inventory management for 500+ SKUs using Onyx ERP, achieving a 30% reduction in stock discrepancies. Synchronized month-end closing processes.",
    },
  ],
  education: [
    {
      school: "University of Hafar Al-Batin",
      href: "#",
      degree: "Bachelor of Science in Finance",
      logoUrl: "/me.png",
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
      links: [
        {
          type: "Dashboard",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        }
      ],
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
      links: [
        {
          type: "Dashboard",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Integrated Financial Planning System",
      dates: "2025",
      location: "Hafar Al-Batin",
      description:
        "Designed an Excel-based system for Sales, Capital, and Operating budgets capable of processing multi-scenario analyses, reducing reporting time by 60%.",
      image: "",
      links: [
        {
          title: "System",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        }
      ],
    },
  ],
} as const;
