export const siteConfig = {
  name: "Maciej Skuratowski",
  title: "Staff Engineer & Kubestronaut",
  url: "https://maciejskuratowski.com",
  location: "Rzeszow, Poland",
  locationLabel: "Based in Rzeszow, Poland · Working globally",

  hero: {
    badge: "Staff Engineer & Kubestronaut",
    heading: "Hi, I'm Maciej.",
    headingAccent: "I architect platforms that engineering teams depend on.",
    tagline:
      "12+ years designing cloud infrastructure, Kubernetes platforms, and ML systems at scale. Kubestronaut (top 500 worldwide), multi-cloud architect, and hands-on technical leader — available for consulting and Staff IC roles.",
  },

  metadata: {
    title: "Maciej Skuratowski | Staff Engineer & Kubestronaut",
    template: "%s | Maciej Skuratowski",
    description:
      "Staff Engineer & Kubestronaut (top 500 worldwide). 12+ years in Kubernetes, Cloud Architecture, and ML Infrastructure. Available for Staff IC roles and consulting.",
    keywords: [
      "Staff Engineer",
      "Kubestronaut",
      "Kubernetes",
      "Platform Engineering",
      "Cloud Architecture",
      "Azure",
      "GCP",
      "ML Infrastructure",
      "Software Architect",
      ".NET",
      "Python",
      "CNCF",
    ],
    ogImage: "/images/og-image.png",
    locale: "en_US",
  },

  links: {
    email: "mailto:maciejskuratowski@protonmail.com",
    linkedin: "https://linkedin.com/in/maciejskuratowski",
    github: "https://github.com/mskuratowski",
    credly: "https://www.credly.com/users/maciej-skuratowski.6b7120f0",
    calendly: "https://calendly.com/maciejskuratowski",
    calendlyEmbed: "https://calendly.com/maciejskuratowski/30min",
    upwork: "https://www.upwork.com/freelancers/~019a6f9823b0b91003",
    toptal: "https://www.toptal.com/resume/maciej-skuratowski",
    cv: "/resume/maciej-skuratowski-cv.pdf",
    umami: "https://cloud.umami.is",
    youtubeVideoId: "VIDEO_ID_HERE",
  },

  images: {
    photo: "/images/ms.png",
    ogImage: "/images/og-image.png",
  },

  expertise: [
    {
      icon: "waypoints" as const,
      title: "Platform Engineering",
      description:
        "Designing and operating Internal Developer Platforms on Kubernetes — from cluster provisioning to fully automated CI/CD pipelines with GitOps.",
      highlights: [
        "Internal Developer Platforms on Kubernetes",
        "Automated CI/CD pipelines with GitOps",
        "Service mesh configuration & cluster provisioning",
      ],
      tags: ["Kubernetes", "Helm", "ArgoCD", "Flux", "Istio", "Terraform", "GitOps"],
    },
    {
      icon: "cloud-cog" as const,
      title: "Cloud Architecture",
      description:
        "Architecting multi-cloud environments across Azure and GCP with Infrastructure as Code. Landing zones, cost governance, and compliance-ready infrastructure.",
      highlights: [
        "Multi-cloud environments across Azure & GCP",
        "Infrastructure as Code & landing zone design",
        "Cost governance & FinOps practices",
      ],
      tags: ["Azure", "GCP", "Terraform", "Pulumi", "FinOps", "Landing Zones"],
    },
    {
      icon: "brain-circuit" as const,
      title: "ML Infrastructure",
      description:
        "Building end-to-end ML platforms: scalable training pipelines, low-latency model serving, and GPU cluster orchestration on Kubernetes.",
      highlights: [
        "Scalable training & model serving pipelines",
        "GPU cluster orchestration on Kubernetes",
        "End-to-end MLOps automation",
      ],
      tags: ["MLOps", "Kubeflow", "GPU", "Model Serving", "Python", "Ray"],
    },
    {
      icon: "component" as const,
      title: "Software Architecture",
      description:
        "Designing distributed systems in .NET and Python — microservices, event-driven architectures, and high-throughput data processing pipelines.",
      highlights: [
        "Microservices & event-driven architectures",
        "CQRS/ES patterns & distributed systems",
        "High-throughput data processing pipelines",
      ],
      tags: [".NET", "Python", "Kafka", "gRPC", "CQRS", "Event Sourcing"],
    },
  ],

  services: [
    {
      icon: "ship-wheel" as const,
      title: "Kubernetes & Platform Engineering",
      description: "Production-grade cluster design, migration from VMs to containers, and Internal Developer Platform setup with GitOps workflows.",
      deliverables: ["K8s cluster architecture & setup", "CI/CD pipeline with ArgoCD/Flux", "Developer self-service portal", "Migration strategy & execution"],
    },
    {
      icon: "infinity" as const,
      title: "DevOps & GitOps",
      description: "End-to-end automation of your deployment pipeline — from infrastructure provisioning to production releases with full observability.",
      deliverables: ["GitOps workflow design", "IaC with Terraform/Pulumi", "Monitoring & alerting setup", "Incident response automation"],
    },
    {
      icon: "server-cog" as const,
      title: "Cloud Architecture",
      description: "Multi-cloud infrastructure design across Azure and GCP — landing zones, cost optimization, security posture, and compliance-ready setups.",
      deliverables: ["Cloud landing zone design", "Cost optimization audit", "Multi-cloud strategy", "Security & compliance review"],
    },
    {
      icon: "scan-search" as const,
      title: "Architecture Review & Advisory",
      description: "Deep-dive analysis of your existing architecture with actionable recommendations. Identify bottlenecks, security gaps, and scaling opportunities.",
      deliverables: ["Architecture audit report", "Scaling recommendations", "Tech debt prioritization", "Team upskilling sessions"],
    },
  ],

  certifications: [
    {
      title: "Kubestronaut",
      issuer: "CNCF",
      description:
        "All 5 Kubernetes certifications (CKA, CKAD, CKS, KCNA, KCSA). Fewer than 500 people worldwide.",
      highlight: true,
    },
    {
      title: "Azure Solutions Architect Expert",
      issuer: "Microsoft",
      description: "Expert-level Azure infrastructure and solution design.",
      highlight: false,
    },
    {
      title: "GCP Professional Cloud Architect",
      issuer: "Google",
      description: "Professional-level Google Cloud architecture.",
      highlight: false,
    },
    {
      title: "Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      description: "Expert-level CI/CD pipelines, DevOps practices, and Azure DevOps tooling.",
      highlight: false,
    },
  ],

  speaking: [
    {
      slug: "azure-group-poland-rzeszow-2024",
      title: "Placeholder talk title",
      event: "Azure Group Poland",
      location: "Rzeszow",
      date: "2024",
      summary: "Talk description coming soon.",
      description: "Full talk description coming soon. Here you can provide a detailed overview of what the talk covered, key takeaways, and audience reactions.",
      photos: [] as string[],
      materials: [] as Array<{ label: string; url: string }>,
      videoUrl: "",
    },
    {
      slug: "4developers-warsaw-2024",
      title: "Placeholder talk title",
      event: "4Developers",
      location: "Warsaw",
      date: "2024",
      summary: "Talk description coming soon.",
      description: "Full talk description coming soon. Here you can provide a detailed overview of what the talk covered, key takeaways, and audience reactions.",
      photos: [] as string[],
      materials: [] as Array<{ label: string; url: string }>,
      videoUrl: "",
    },
  ],

  contact: {
    heading: "Let's Work Together",
    description:
      "Whether you're looking for a Staff IC engineer or need consulting on platform engineering, cloud architecture, or ML infrastructure — let's talk.",
  },

  timeline: [
    {
      period: "2024 – Present",
      role: "Cloud Architect & Platform Engineer",
      company: "Hitachi Energy",
      description:
        "Owning multi-cloud architecture (Azure & GCP) for critical energy infrastructure. Designed and operating production Kubernetes clusters with full CKS/CKA/CKAD expertise — driving platform standardization, zero-trust security posture, and developer self-service across distributed engineering teams.",
    },
    {
      period: "2023 – 2024",
      role: "Azure Solutions Architect",
      company: "Benefit Systems International",
      description:
        "Defined cloud architecture strategy for international expansion. Designed highly available Azure infrastructure serving multiple markets, established IaC standards with Terraform, and reduced infrastructure provisioning time from weeks to hours through automated landing zone patterns.",
    },
    {
      period: "2022 – 2023",
      role: "Principal Cloud Engineer",
      company: "Transition Technologies PSC",
      description:
        "Technical lead for cloud transformation initiatives. Established organization-wide cloud-native patterns, led architecture reviews, and mentored senior engineers on distributed systems design and Azure best practices. Drove adoption of GitOps and containerized workloads.",
    },
    {
      period: "2018 – 2022",
      role: "Azure Architect & .NET Team Lead",
      company: "Billennium",
      description:
        "Led cross-functional engineering teams (Poland & Asia, 10+ engineers). Architected and delivered a government-scale tax filing platform (ASP.NET Core, Vue.js, Azure) handling millions of submissions with strict security and accessibility compliance. Owned technical roadmap, cost optimization, and client architecture decisions.",
    },
    {
      period: "2017 – 2018",
      role: "Software Developer",
      company: "PGS Software",
      description:
        "Delivered end-to-end features in cross-functional product teams. Owned software design from requirements through production deployment, with focus on code quality, testing practices, and performance optimization.",
    },
    {
      period: "2015 – 2017",
      role: "Software Engineer",
      company: "Ailleron",
      description:
        "Engineered mission-critical banking systems for top Polish financial institutions — authentication platforms, online deposit flows, and leasing portals processing real-time financial transactions. Reduced CI build times and introduced code review culture that became org-wide standard.",
    },
    {
      period: "2013 – 2015",
      role: "Software Developer",
      company: "SolvSoft / International",
      description:
        "Built full-stack .NET applications in Agile teams. Gained international experience through a technical scholarship at Huazhong University (China) and an Erasmus engineering internship (Cyprus) — developing early cross-cultural collaboration and systems thinking skills.",
    },
  ],

  nav: [
    { label: "Expertise", href: "#expertise" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Blog", href: "/blog" },
    { label: "Speaking", href: "/speaking" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
