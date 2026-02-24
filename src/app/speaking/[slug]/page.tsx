import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { TalkDetail } from "@/components/sections/TalkDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

function getTalk(slug: string) {
  return siteConfig.speaking.find((t) => t.slug === slug);
}

export async function generateStaticParams() {
  return siteConfig.speaking.map((talk) => ({ slug: talk.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const talk = getTalk(slug);
  if (!talk) return {};

  return {
    title: `${talk.title} — ${talk.event}`,
    description: talk.summary,
  };
}

export default async function TalkPage({ params }: Props) {
  const { slug } = await params;
  const talk = getTalk(slug);
  if (!talk) notFound();

  return <TalkDetail talk={talk} />;
}
