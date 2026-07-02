import type { Metadata } from "next";
import { ResearchSection } from "@/components/sections/ResearchSection";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Applied systems research by Maciej Skuratowski in serverless computing, vector databases, and ML systems — including collaboration with CloudLab at Universitat Rovira i Virgili (URV).",
};

export default function ResearchPage() {
  return <ResearchSection />;
}
