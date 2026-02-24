"use client";

import Image from "next/image";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Download,
  ExternalLink,
  Play,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

type Talk = (typeof siteConfig.speaking)[number];

export function TalkDetail({ talk }: { talk: Talk }) {
  return (
    <section className="pt-28 pb-20 sm:pt-36">
      <Container className="max-w-3xl">
        <AnimatedSection>
          <a
            href="/speaking"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All talks
          </a>

          {/* Header */}
          <div className="mb-8">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent">
                {talk.event}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-text-tertiary">
                <Calendar className="h-3.5 w-3.5" />
                {talk.date}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-text-tertiary">
                <MapPin className="h-3.5 w-3.5" />
                {talk.location}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              {talk.title}
            </h1>
          </div>
        </AnimatedSection>

        {/* Video embed */}
        {talk.videoUrl && (
          <AnimatedSection delay={0.1} className="mb-10">
            <div className="aspect-video overflow-hidden rounded-xl border border-border">
              <iframe
                src={talk.videoUrl}
                title={talk.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </AnimatedSection>
        )}

        {/* Description */}
        <AnimatedSection delay={0.15} className="mb-10">
          <div className="prose prose-gray max-w-none text-text-secondary leading-relaxed whitespace-pre-line">
            {talk.description}
          </div>
        </AnimatedSection>

        {/* Materials */}
        {talk.materials.length > 0 && (
          <AnimatedSection delay={0.2} className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-text-primary">
              Materials
            </h2>
            <div className="space-y-3">
              {talk.materials.map((material) => (
                <a
                  key={material.url}
                  href={material.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 transition-all hover:border-accent/30 hover:shadow-sm"
                >
                  <Download className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-text-primary">
                    {material.label}
                  </span>
                  <ExternalLink className="ml-auto h-4 w-4 text-text-tertiary" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Photos */}
        {talk.photos.length > 0 && (
          <AnimatedSection delay={0.25}>
            <h2 className="mb-4 text-lg font-semibold text-text-primary">
              Photos
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {talk.photos.map((photo, i) => (
                <div
                  key={photo}
                  className="overflow-hidden rounded-xl border border-border"
                >
                  <Image
                    src={photo}
                    alt={`${talk.title} at ${talk.event} — photo ${i + 1}`}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
