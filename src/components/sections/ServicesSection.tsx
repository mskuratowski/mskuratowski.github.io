"use client";

import { Container as ContainerIcon, GitBranch, CloudCog, SearchCode, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

const iconMap = {
  container: ContainerIcon,
  "git-branch": GitBranch,
  "cloud-cog": CloudCog,
  "search-code": SearchCode,
} as const;

const cardColors = [
  { iconBg: "bg-blue-50 dark:bg-blue-950", iconText: "text-blue-600 dark:text-blue-400", check: "text-blue-500", border: "hover:border-blue-300 dark:hover:border-blue-700" },
  { iconBg: "bg-emerald-50 dark:bg-emerald-950", iconText: "text-emerald-600 dark:text-emerald-400", check: "text-emerald-500", border: "hover:border-emerald-300 dark:hover:border-emerald-700" },
  { iconBg: "bg-violet-50 dark:bg-violet-950", iconText: "text-violet-600 dark:text-violet-400", check: "text-violet-500", border: "hover:border-violet-300 dark:hover:border-violet-700" },
  { iconBg: "bg-amber-50 dark:bg-amber-950", iconText: "text-amber-600 dark:text-amber-400", check: "text-amber-500", border: "hover:border-amber-300 dark:hover:border-amber-700" },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Services"
            subtitle="Hands-on consulting for teams that need infrastructure done right"
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const colors = cardColors[i];
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className={`group h-full rounded-xl border border-border bg-surface p-6 transition-all duration-300 ${colors.border} hover:shadow-md`}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`inline-flex rounded-lg p-3 ${colors.iconBg}`}>
                      <Icon className={`h-6 w-6 ${colors.iconText}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-text-primary"
                      >
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${colors.check}`} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href={siteConfig.links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Book a Call
            </a>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
