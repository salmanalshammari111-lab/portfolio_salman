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
    tel: "+9665450
