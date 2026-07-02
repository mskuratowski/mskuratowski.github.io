import type { Metadata } from "next";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Open-source projects and upstream contributions by Maciej Skuratowski across cloud-native and serverless tooling, including the Lithops Kubernetes backend.",
};

export default function OpenSourcePage() {
  return <OpenSourceSection />;
}
