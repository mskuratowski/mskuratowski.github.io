"use client";

import { Mic, MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

const hasRealTalks = siteConfig.speaking.some(
  (t) => !t.title.toLowerCase().includes("placeholder")
);

export function SpeakingSection() {
  return (
    <section className="pt-28 pb-20 sm:pt-36">
      <Container>
        <AnimatedSection>
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
          <SectionHeading
            title="Speaking"
            subtitle="Conference talks and community presentations"
          />
        </AnimatedSection>

        {hasRealTalks ? (
          <div className="space-y-4">
            {siteConfig.speaking.map((talk, i) => (
              <AnimatedSection key={talk.slug} delay={i * 0.1}>
                <a href={`/speaking/${talk.slug}`} className="block">
                  <Card className="flex items-center gap-6 transition-all hover:border-accent/30 hover:shadow-md">
                    <div className="hidden shrink-0 rounded-lg bg-accent-light p-3 sm:block">
                      <Mic className="h-5 w-5 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-tertiary">
                          {talk.date}
                        </span>
                        <span className="text-xs font-medium text-accent">
                          {talk.event}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-text-primary">
                        {talk.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5 text-sm text-text-tertiary">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        {talk.location}
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
                        {talk.summary}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-text-tertiary" />
                  </Card>
                </a>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-12 text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-accent-light p-4">
                <Mic className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                Coming Soon
              </h3>
              <p className="mx-auto max-w-md text-sm text-text-secondary">
                Talks and presentations are being added. Check back soon for
                conference recordings, slides, and event details.
              </p>
            </div>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
