"use client";

import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: siteConfig.links.email,
    display: siteConfig.links.email.replace("mailto:", ""),
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    display: "in/maciejskuratowski",
  },
  {
    icon: Github,
    label: "GitHub",
    href: siteConfig.links.github,
    display: "mskuratowski",
  },
  {
    icon: ExternalLink,
    label: "Upwork",
    href: siteConfig.links.upwork,
    display: "Upwork Profile",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading title={siteConfig.contact.heading} />
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <AnimatedSection delay={0.1}>
            <p className="mb-8 text-lg text-text-secondary">
              {siteConfig.contact.description}
            </p>
            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4 transition-all hover:border-accent/30 hover:shadow-sm"
                >
                  <Icon className="h-5 w-5 text-text-tertiary" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-text-primary">
                      {display}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Calendly embed */}
          <AnimatedSection delay={0.2}>
            <div className="calendly-container overflow-hidden rounded-xl border border-border">
              <iframe
                src={siteConfig.links.calendlyEmbed}
                title="Schedule a meeting"
                loading="lazy"
                className="h-[500px] w-full border-0 sm:h-[600px]"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
