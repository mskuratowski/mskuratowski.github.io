"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, GitPullRequest, Github, Package } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

export function OpenSourceSection() {
  const { openSource } = siteConfig;
  const realProjects = openSource.projects.filter(
    (p) => !p.name.toLowerCase().includes("todo") && p.url
  );
  const hasProjects = realProjects.length > 0;

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
            title="Open Source"
            subtitle="Projects I maintain and upstream work I've contributed to"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <p className="mx-auto mb-12 max-w-2xl text-center text-text-secondary">
            {openSource.intro}
          </p>
        </AnimatedSection>

        {/* Own projects — hidden until a real project is added in site-config */}
        {hasProjects && (
          <>
            <AnimatedSection>
              <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                Projects
              </h3>
            </AnimatedSection>
            <div className="mb-16 grid gap-6 sm:grid-cols-2">
            {realProjects.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.1}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="flex h-full flex-col">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="inline-flex rounded-lg bg-accent-light p-2.5">
                        <Package className="h-5 w-5 text-accent" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-text-tertiary" />
                    </div>
                    <h4 className="mb-2 text-base font-semibold text-text-primary">
                      {project.name}
                    </h4>
                    <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                      {project.description}
                    </p>
                    {project.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-tertiary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                </a>
              </AnimatedSection>
            ))}
            </div>
          </>
        )}

        {/* Contributions */}
        <AnimatedSection>
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-text-tertiary">
            Contributions
          </h3>
        </AnimatedSection>
        <div className="space-y-4">
          {openSource.contributions.map((contrib, i) => (
            <AnimatedSection key={contrib.project} delay={i * 0.1}>
              <Card className="flex items-start gap-5">
                <div className="hidden shrink-0 rounded-lg bg-accent-light p-3 sm:block">
                  <GitPullRequest className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-semibold text-text-primary">
                      {contrib.project}
                    </h4>
                    {contrib.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-tertiary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {contrib.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                      href={contrib.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      Repository
                    </a>
                    {contrib.items
                      .filter((item) => item.url)
                      .map((item) => (
                        <a
                          key={item.label}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent"
                        >
                          {item.label}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ))}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection className="mt-12 text-center">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent/30 hover:text-accent hover:shadow-sm"
          >
            <Github className="h-4 w-4" />
            View all activity on GitHub
          </a>
        </AnimatedSection>
      </Container>
    </section>
  );
}
