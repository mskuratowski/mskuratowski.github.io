import { HeroSection } from "@/components/sections/HeroSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { LatestPostsSection } from "@/components/sections/LatestPostsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <HeroSection />
      <AudienceSection />
      <ExpertiseSection />
      <CertificationsSection />
      <LatestPostsSection posts={posts} />
      <ContactSection />
    </>
  );
}
