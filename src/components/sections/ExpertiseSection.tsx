"use client";

import { Waypoints, CloudCog, BrainCircuit, Component } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

const iconMap = {
  waypoints: Waypoints,
  "cloud-cog": CloudCog,
  "brain-circuit": BrainCircuit,
  component: Component,
} as const;

const cardColors: Record<string, { iconBg: string; iconText: string; dot: string; border: string; tagBorder: string; tagText: string }> = {
  waypoints: { iconBg: "bg-blue-50 dark:bg-blue-950", iconText: "text-blue-600 dark:text-blue-400", dot: "bg-blue-500", border: "hover:border-blue-300 dark:hover:border-blue-700", tagBorder: "border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/50", tagText: "text-blue-700 dark:text-blue-300" },
  "cloud-cog": { iconBg: "bg-emerald-50 dark:bg-emerald-950", iconText: "text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500", border: "hover:border-emerald-300 dark:hover:border-emerald-700", tagBorder: "border-emerald-100 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/50", tagText: "text-emerald-700 dark:text-emerald-300" },
  "brain-circuit": { iconBg: "bg-violet-50 dark:bg-violet-950", iconText: "text-violet-600 dark:text-violet-400", dot: "bg-violet-500", border: "hover:border-violet-300 dark:hover:border-violet-700", tagBorder: "border-violet-100 dark:border-violet-900 bg-violet-50/50 dark:bg-violet-950/50", tagText: "text-violet-700 dark:text-violet-300" },
  component: { iconBg: "bg-amber-50 dark:bg-amber-950", iconText: "text-amber-600 dark:text-amber-400", dot: "bg-amber-500", border: "hover:border-amber-300 dark:hover:border-amber-700", tagBorder: "border-amber-100 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/50", tagText: "text-amber-700 dark:text-amber-300" },
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Areas of Expertise"
            subtitle="12+ years of building production systems across cloud, infrastructure, and software engineering"
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {siteConfig.expertise.map((item, i) => {
            const Icon = iconMap[item.icon];
            const colors = cardColors[item.icon];
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className={`group h-full rounded-xl border border-border bg-surface p-6 transition-all duration-300 ${colors.border} hover:shadow-md`}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`inline-flex rounded-lg p-3 ${colors.iconBg}`}>
                      <Icon className={`h-6 w-6 ${colors.iconText}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>

                  <ul className="mb-5 space-y-2">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-text-primary"
                      >
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors.tagBorder} ${colors.tagText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
