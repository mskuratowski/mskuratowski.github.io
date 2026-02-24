"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "5", label: "Kubernetes Certs" },
  { value: "2", label: "Cloud Platforms" },
  { value: "Kubestronaut", label: "CNCF Title" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-text-secondary">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
