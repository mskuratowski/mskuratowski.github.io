import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ExpertiseSection />
      <ServicesSection />
      <TimelineSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
