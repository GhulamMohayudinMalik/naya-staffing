import type { Metadata } from "next";
import { Nunito_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Recruitment Agency & Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing delivers executive search, permanent recruitment, contract staffing, RPO, and global hiring solutions across multiple industries for employers and job seekers worldwide.",
};
import NavigationWrapper from "@/components/NavigationWrapper";
import Chatbot from "@/components/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <NavigationWrapper>
          {children}
        </NavigationWrapper>
        <Chatbot />
      </body>
    </html>
  );
}
