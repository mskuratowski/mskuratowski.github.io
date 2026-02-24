"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

export function TimelineSection() {
  return (
    <section id="experience" className="bg-surface py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Career Journey"
            subtitle="A timeline of roles and responsibilities across my engineering career"
          />
        </AnimatedSection>

        <div className="relative ml-4 border-l-2 border-border pl-8 sm:ml-8">
          {siteConfig.timeline.map((item, i) => (
            <AnimatedSection
              key={item.period}
              delay={i * 0.1}
              className={i < siteConfig.timeline.length - 1 ? "mb-10" : ""}
            >
              <div className="relative">
                {/* Dot on the line */}
                <div className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white sm:-left-[calc(2rem+5px)]" />

                <span className="text-sm font-medium text-accent">
                  {item.period}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-text-primary">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-text-secondary">
                  {item.company}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
