import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MUTABAZI - Web Developer Portfolio",
    template: "%s | MUTABAZI Portfolio",
  },
  description:
    "Explore the portfolio of MUTABAZI, a skilled web developer specializing in React, Next.js, Redux, and modern web technologies. Discover my projects, skills, and experience in crafting dynamic web applications.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
