"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  FlaskConical,
  FunctionSquare,
  Database,
  BrainCircuit,
  GraduationCap,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

const interestIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "function-square": FunctionSquare,
  database: Database,
  "brain-circuit": BrainCircuit,
};

export function ResearchSection() {
  const { research } = siteConfig;
  const hasPublications = research.publications.length > 0;

  return (
    <section className="pt-28 pb-20 sm:pt-36">
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
            title="Research"
            subtitle="Applied systems research in serverless computing and ML infrastructure"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <p className="mx-auto mb-10 max-w-2xl text-center text-text-secondary">
            {research.intro}
          </p>
        </AnimatedSection>

        {/* PhD status */}
        <AnimatedSection delay={0.1} className="mb-14">
          <div className="rounded-xl border border-border border-l-4 border-l-accent bg-surface p-6 sm:p-8">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
              <div className="inline-flex shrink-0 rounded-lg bg-accent-light p-3">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {research.status.label}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
                  {research.status.description}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Interests */}
        <AnimatedSection>
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-text-tertiary">
            Research Interests
          </h3>
        </AnimatedSection>
        <div className="mb-16 grid gap-6 sm:grid-cols-3">
          {research.interests.map((interest, i) => {
            const Icon = interestIcons[interest.icon];
            return (
              <AnimatedSection key={interest.title} delay={i * 0.1}>
                <Card className="h-full">
                  {Icon && (
                    <div className="mb-4 inline-flex rounded-lg bg-accent-light p-2.5">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                  )}
                  <h4 className="mb-2 text-base font-semibold text-text-primary">
                    {interest.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {interest.description}
                  </p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Collaborations */}
        <AnimatedSection>
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-text-tertiary">
            Collaborations
          </h3>
        </AnimatedSection>
        <div className="mb-16 space-y-4">
          {research.collaborations.map((collab, i) => (
            <AnimatedSection key={collab.name} delay={i * 0.1}>
              <Card className="flex items-start gap-5" hover={!!collab.url}>
                <div className="hidden shrink-0 rounded-lg bg-accent-light p-3 sm:block">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-semibold text-text-primary">
                      {collab.name}
                    </h4>
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-tertiary">
                      {collab.role}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {collab.description}
                  </p>
                  {collab.url && (
                    <a
                      href={collab.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      Visit group
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Publications */}
        <AnimatedSection>
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-text-tertiary">
            Publications
          </h3>
        </AnimatedSection>
        {hasPublications ? (
          <div className="space-y-4">
            {research.publications.map((pub, i) => (
              <AnimatedSection key={pub.title} delay={i * 0.1}>
                <Card className="flex items-start gap-5" hover={!!pub.url}>
                  <div className="hidden shrink-0 rounded-lg bg-accent-light p-3 sm:block">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-tertiary">
                        {pub.year}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wide text-accent">
                        {pub.type}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-text-primary">
                      {pub.url ? (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent hover:underline"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h4>
                    <p className="mt-1 text-sm text-text-secondary">{pub.authors}</p>
                    <p className="mt-0.5 text-sm italic text-text-tertiary">
                      {pub.venue}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-12 text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-accent-light p-4">
                <FlaskConical className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                Publications in progress
              </h3>
              <p className="mx-auto max-w-md text-sm text-text-secondary">
                Preprints and papers from ongoing research collaborations will
                be listed here as they are published.
              </p>
            </div>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
