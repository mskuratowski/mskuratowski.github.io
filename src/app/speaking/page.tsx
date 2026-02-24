import type { Metadata } from "next";
import { SpeakingSection } from "@/components/sections/SpeakingSection";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Conference talks and community presentations by Maciej Skuratowski on Kubernetes, Platform Engineering, Cloud Architecture, and more.",
};

export default function SpeakingPage() {
  return <SpeakingSection />;
}
