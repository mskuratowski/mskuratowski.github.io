"use client";

import Link from "next/link";
import { ArrowLeft, CalendarClock, Handshake, SearchCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

const engagementIcons = [CalendarClock, Handshake, SearchCheck];

export function WorkWithMeSection() {
  const { workWithMe } = siteConfig;

  return (
    <section className="pt-28 pb-4 sm:pt-36">
      <Container>
        <AnimatedSection>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <SectionHeading
            title="Work with me"
            subtitle="Senior, hands-on help with Kubernetes, GitOps, and ML infrastructure"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <p className="mx-auto mb-12 max-w-2xl text-center text-text-secondary">
            {workWithMe.intro}
          </p>
        </AnimatedSection>

        {/* Engagement models */}
        <AnimatedSection>
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-text-tertiary">
            Engagement Models
          </h3>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-3">
          {workWithMe.engagements.map((engagement, i) => {
            const Icon = engagementIcons[i];
            return (
              <AnimatedSection key={engagement.title} delay={i * 0.1}>
                <Card className="h-full">
                  {Icon && (
                    <div className="mb-4 inline-flex rounded-lg bg-accent-light p-2.5">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                  )}
                  <h4 className="mb-2 text-base font-semibold text-text-primary">
                    {engagement.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {engagement.description}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
