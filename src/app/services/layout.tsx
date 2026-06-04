import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment & Staffing Services | Executive Search, Contract Staffing, RPO & Global Hiring | NAYA Staffing",
  description: "Explore NAYA Staffing’s recruitment and staffing services, including executive search, permanent recruitment, contract staffing, RPO, talent mapping, screening, global hiring, employer branding, startup hiring, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
