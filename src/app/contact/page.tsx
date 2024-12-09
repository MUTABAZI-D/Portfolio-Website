import { EmailSection } from "@/components/EmailSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MUTABAZI, a skilled web developer specializing in modern web technologies like React and Next.js. Let's collaborate on exciting projects!",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-4 px-12 md:mt-16 mt-8 text-white">
      <EmailSection />
    </div>
  );
}
