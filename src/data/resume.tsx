import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, PhoneIcon, FileText } from "lucide-react";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import React from "react";

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
    { href: "/Cv-Salman Atwan.pdf", icon: FileText, label: "Download CV" },
  ],
  contact: {
    email: "SalmanAlshammari@outlook.sa",
    tel: "+966545002806",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/salmanalshammari111-lab",
        icon: Icons.github,
        navbar: true,
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
