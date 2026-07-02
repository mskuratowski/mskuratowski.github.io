import type { Metadata } from "next";
import { WorkWithMeSection } from "@/components/sections/WorkWithMeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Work with me",
  description:
    "Consulting by Maciej Skuratowski — Kubernetes platforms, GitOps, cloud architecture, and ML infrastructure. Advisory, hands-on delivery, and audits.",
};

export default function WorkWithMePage() {
  return (
    <>
      <WorkWithMeSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
