import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { icon: Mail, href: siteConfig.links.email, label: "Email" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {siteConfig.name} &middot;{" "}
            {siteConfig.location}
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="text-text-tertiary transition-colors hover:text-text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
