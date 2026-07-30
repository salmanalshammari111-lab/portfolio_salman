import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, PhoneIcon } from "lucide-react";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import React from "react";

const CvIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="Arial, sans-serif">
      CV
    </text>
  </svg>
);

export const DATA = {
  name: "Salman Alshammari",
  initials: "SA",
  url: "https://salman-finance.vercel.app",
  location: "Hafar Al-Batin, Saudi Arabia",
  locationLink: "https://www.google.com/maps/place/Riyadh",
  description:
    "Financial Analyst | Operations & Financial Management. Expert in leveraging Power BI, SQL, and ERP integration to bridge the gap between complex data and strategic financial decisions.",
  summary:
    "Strategic Finance Professional with progressive experience in Financial Planning & Analysis (FP&A) and corporate leadership. Expert in leveraging Power BI, SQL, and ERP integration to bridge the gap between complex data and strategic financial decisions. Proven track record of engineering financial models and managing multimillion-dollar operating budgets to drive growth and optimize capital allocation aligned with Saudi Vision 2030.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Corporate Financial Management", icon: NotebookIcon },
    { name: "Financial & Variance Analysis", icon: NotebookIcon },
    { name: "FP&A & Budgeting", icon: NotebookIcon },
    { name: "Financial Modeling", icon: NotebookIcon },
    { name: "Revenue Optimization", icon: NotebookIcon },
    { name: "Inventory Management & Optimization", icon: HomeIcon },
    { name: "Key Account Management", icon: NotebookIcon },
    { name: "B2B & Retail Sales Operations", icon: HomeIcon },
    { name: "Data-Driven Decision Making", icon: NotebookIcon },
    { name: "Executive Reporting & Presentation", icon: NotebookIcon },
    { name: "Analytical & Critical Thinking", icon: NotebookIcon },
    { name: "Cross-Functional Collaboration", icon: HomeIcon },
    { name: "Problem Solving & Crisis Management", icon: NotebookIcon },
    { name: "Power BI & DAX", icon: NotebookIcon },
    { name: "SQL & Data Modeling", icon: Postgresql },
    { name: "Advanced Excel (VBA)", icon: NotebookIcon },
    { name: "ERP (Onyx & SAP)", icon: HomeIcon },
    { name: "Strategic Planning", icon: NotebookIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Cv-Salman Atwan.pdf", icon: CvIcon, label: "CV" },
  ],
  contact: {
    email: "SalmanAlshammari@outlook.sa",
    tel: "+966545002806",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/salmanalshammari111-lab",
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
      Phone: {
        name: "Call Me",
        url: "tel:+966545002806",
        icon: PhoneIcon,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Al Omran Solutions for Building Materials",
      href: "#",
      badges: ["Operations & Finance"],
      location: "Hafar Al-Batin, Saudi Arabia",
      title: "Financial Analyst | Operations & Financial Management",
      logoUrl: "/alomran.jpg",
      start: "Feb 2026",
      end: "May 2026",
      description:
        "Leading comprehensive financial operations and strategic planning. Developing robust financial policies and internal control frameworks to mitigate corporate risks. Managing the annual budgeting process and delivering advanced variance analysis to support executive-level decisions. Optimizing corporate liquidity and cash flow forecasting.",
    },
    {
      company: "Al Omran Solutions for Building Materials",
      href: "#",
      badges: ["Pre-Graduation"],
      location: "Hafar Al-Batin, Saudi Arabia",
      title: "Retail Sales Associate",
      logoUrl: "/alomran.jpg",
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
      logoUrl: "/uhb.jpg",
      start: "Jan 2020",
      end: "Apr 2026",
    },
  ],
  projects: [
    {
      title: "The Role of Sustainability in Enhancing Corporate Financial Performance",
      href: "https://prezi.com/view/19KXoSlZdUqEzH3uEUQ4",
      dates: "2026",
      active: true,
      description:
        "Conducted quantitative research on ESG practices for 50+ Saudi companies using GRI/SASB frameworks and regression models. Built financial models to measure ROI of sustainability investments and developed a Power BI dashboard.",
      technologies: ["Power BI", "Financial Modeling", "Regression Analysis"],
      links: [
        {
          type: "Presentation",
          title: "Prezi Presentation",
          href: "https://prezi.com/view/19KXoSlZdUqEzH3uEUQ4",
          icon: <NotebookIcon className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    {
      title: "Uber Dashboard",
      href: "https://app.powerbi.com/groups/me/reports/9222d81d-46c1-43a1-9380-5ef1221aa35c/bd0cd484887a249a8728?experience=power-bi",
      dates: "2025",
      active: true,
      description:
        "Developed a comprehensive Uber Operations & Financial Dashboard utilizing Power BI. Modeled operational data and key metrics to analyze ride performance, trip efficiency, and business analytics workflows.",
      technologies: ["Power BI", "Data Analytics", "Data Modeling"],
      links: [
        {
          type: "Live Dashboard",
          title: "Live Dashboard",
          href: "https://app.powerbi.com/groups/me/reports/9222d81d-46c1-43a1-9380-5ef1221aa35c/bd0cd484887a249a8728?experience=power-bi",
          icon: <NotebookIcon className="size-3" />,
        },
      ],
      image: "/uber.gif", 
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
          type: "Details",
          title: "Details",
          href: "https://salman-finance.vercel.app",
          icon: <NotebookIcon className="size-3" />,
        }
      ],
    },
  ],
} as const;
