"use client";

import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

function KubernetesIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z" />
    </svg>
  );
}

function AzureIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684" />
    </svg>
  );
}

function GCPIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="-25 -25 306 256" className={className}>
      <path d="M170.252 56.819L192.505 34.566L193.988 25.196C153.437-11.677 88.976-7.496 52.421 33.92C42.267 45.423 34.734 59.764 30.717 74.573L38.687 73.45L83.192 66.111L86.628 62.597C106.425 40.855 139.898 37.93 162.756 56.429L170.252 56.819Z" fill="#EA4335" />
      <path d="M224.205 73.918C219.09 55.082 208.589 38.149 193.988 25.196L162.756 56.428C175.944 67.204 183.457 83.438 183.135 100.465V106.009C198.486 106.009 210.932 118.454 210.932 133.805C210.932 149.157 198.486 161.29 183.135 161.29H127.464L121.998 167.224V200.564L127.464 205.795H183.135C223.065 206.106 255.687 174.301 255.998 134.371C256.186 110.168 244.253 87.478 224.205 73.918" fill="#4285F4" />
      <path d="M71.87 205.796H127.463V161.29H71.87C67.909 161.289 64.073 160.438 60.471 158.792L52.584 161.212L30.175 183.465L28.223 191.039C40.79 200.528 56.123 205.864 71.87 205.796" fill="#34A853" />
      <path d="M71.87 61.425C31.94 61.664-0.237 94.228 0.001 134.158C0.134 156.456 10.548 177.446 28.223 191.039L60.471 158.792C46.48 152.471 40.263 136.006 46.584 122.016C52.904 108.026 69.37 101.809 83.359 108.129C89.524 110.914 94.461 115.852 97.246 122.016L129.494 89.769C115.773 71.832 94.453 61.345 71.87 61.425" fill="#FBBC05" />
    </svg>
  );
}

function MicrosoftIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="0" y="0" width="11.408" height="11.408" fill="#F25022" />
      <rect x="12.594" y="0" width="11.406" height="11.408" fill="#7FBA00" />
      <rect x="0" y="12.594" width="11.408" height="11.406" fill="#00A4EF" />
      <rect x="12.594" y="12.594" width="11.406" height="11.406" fill="#FFB900" />
    </svg>
  );
}

const certIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Kubestronaut: KubernetesIcon,
  "Azure Solutions Architect Expert": MicrosoftIcon,
  "GCP Professional Cloud Architect": GCPIcon,
  "Azure DevOps Engineer Expert": MicrosoftIcon,
};

const certColors: Record<string, { iconBg: string; iconText: string; badge: string; border: string }> = {
  "Azure Solutions Architect Expert": {
    iconBg: "bg-blue-50 dark:bg-blue-950",
    iconText: "text-blue-600 dark:text-blue-400",
    badge: "text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950",
    border: "hover:border-blue-300 dark:hover:border-blue-700",
  },
  "GCP Professional Cloud Architect": {
    iconBg: "bg-emerald-50 dark:bg-emerald-950",
    iconText: "text-emerald-600 dark:text-emerald-400",
    badge: "text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950",
    border: "hover:border-emerald-300 dark:hover:border-emerald-700",
  },
  "Azure DevOps Engineer Expert": {
    iconBg: "bg-violet-50 dark:bg-violet-950",
    iconText: "text-violet-600 dark:text-violet-400",
    badge: "text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950",
    border: "hover:border-violet-300 dark:hover:border-violet-700",
  },
};

const kubestronautTags = ["CKA", "CKAD", "CKS", "KCNA", "KCSA"];

export function CertificationsSection() {
  const highlighted = siteConfig.certifications.filter((c) => c.highlight);
  const others = siteConfig.certifications.filter((c) => !c.highlight);

  return (
    <section id="certifications" className="bg-surface py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Certifications"
            subtitle="Industry-recognized credentials across cloud and Kubernetes"
          />
        </AnimatedSection>

        {/* Kubestronaut featured card */}
        {highlighted.map((cert) => {
          const Icon = certIcons[cert.title];
          return (
            <AnimatedSection key={cert.title} className="mb-10">
              <div className="rounded-xl border border-border border-l-4 border-l-kube-blue bg-surface p-6 sm:p-8">
                <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                  {Icon && (
                    <div className="inline-flex shrink-0 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col items-center gap-3 sm:flex-row">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {cert.title}
                      </h3>
                      <span className="rounded-full bg-kube-blue/10 px-2.5 py-0.5 text-xs font-semibold tracking-wider text-kube-blue uppercase">
                        {cert.issuer}
                      </span>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm text-text-secondary leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                      {kubestronautTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-blue-100 bg-blue-50/50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}

        {/* Other certs */}
        <div className="grid gap-6 sm:grid-cols-3">
          {others.map((cert, i) => {
            const Icon = certIcons[cert.title];
            const colors = certColors[cert.title];

            return (
              <AnimatedSection key={cert.title} delay={i * 0.1}>
                <div className={`h-full rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:shadow-md ${colors?.border ?? ""}`}>
                  <div className="mb-4 flex items-center gap-3">
                    {Icon && (
                      <div className={`inline-flex rounded-lg p-2 ${colors?.iconBg ?? ""}`}>
                        <Icon className={`h-6 w-6 ${colors?.iconText ?? ""}`} />
                      </div>
                    )}
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${colors?.badge ?? ""}`}>
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-text-primary">
                    {cert.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {cert.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Credly link */}
        <AnimatedSection className="mt-10 text-center">
          <a
            href={siteConfig.links.credly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent/30 hover:text-accent hover:shadow-sm"
          >
            View all on Credly
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </AnimatedSection>
      </Container>
    </section>
  );
}
