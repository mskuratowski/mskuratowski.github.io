"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  FlaskConical,
  GitPullRequest,
  Mic,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

const audienceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  briefcase: Briefcase,
  "flask-conical": FlaskConical,
  "git-pull-request": GitPullRequest,
  mic: Mic,
};

export function AudienceSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.audiences.map((audience, i) => {
            const Icon = audienceIcons[audience.icon];
            return (
              <AnimatedSection key={audience.href} delay={i * 0.1}>
                <Link href={audience.href} className="group block h-full">
                  <Card className="flex h-full flex-col">
                    {Icon && (
                      <div className="mb-4 inline-flex w-fit rounded-lg bg-accent-light p-2.5">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                    )}
                    <h3 className="mb-2 text-base font-semibold text-text-primary">
                      {audience.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                      {audience.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      {audience.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Card>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
