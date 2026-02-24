export const siteConfig = {
  name: "Maciej Skuratowski",
  title: "Staff Engineer & Kubestronaut",
  url: "https://maciejskuratowski.com",
  location: "Rzeszow, Poland",
  locationLabel: "Based in Rzeszow, Poland · Working globally",

  hero: {
    badge: "Staff Engineer & Kubestronaut",
    heading: "Hi, I'm Maciej.",
    headingAccent: "Staff Engineer who builds systems that scale.",
    tagline:
      "12+ years shipping production software in .NET and Python — now leading platform engineering, ML infrastructure, and Kubernetes at scale. Kubestronaut, cloud architect, and hands-on technical leader.",
  },

  metadata: {
    title: "Maciej Skuratowski | Staff Engineer & Kubestronaut",
    template: "%s | Maciej Skuratowski",
    description:
      "Staff Engineer & Kubestronaut. 12+ years in Kubernetes, Azure, GCP, ML Infrastructure, and Software Architecture. Available for Staff IC roles and consulting.",
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
      "Go",
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
    youtubeVideoId: "VIDEO_ID_HERE",
  },

  images: {
    photo: "/images/ms.png",
    photoFallback: "/images/maciej-photo-fallback.jpg",
    kubestronautBadge: "/images/kubestronaut-badge.svg",
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
        "Designing distributed systems in .NET and Go — microservices, event-driven architectures, and high-throughput data processing pipelines.",
      highlights: [
        "Microservices & event-driven architectures",
        "CQRS/ES patterns & distributed systems",
        "High-throughput data processing pipelines",
      ],
      tags: [".NET", "Go", "Kafka", "gRPC", "CQRS", "Event Sourcing"],
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
      period: "2022 – Present",
      role: "Staff Engineer",
      company: "Company Name",
      description:
        "Leading platform engineering initiatives, designing cloud-native architectures, and mentoring senior engineers across multiple teams.",
    },
    {
      period: "2019 – 2022",
      role: "Senior Engineer",
      company: "Company Name",
      description:
        "Built and operated Kubernetes-based platforms serving hundreds of microservices. Drove adoption of GitOps and Infrastructure as Code.",
    },
    {
      period: "2016 – 2019",
      role: "Software Engineer",
      company: "Company Name",
      description:
        "Developed distributed systems in .NET and Go. Designed event-driven architectures and high-throughput data processing pipelines.",
    },
    {
      period: "2013 – 2016",
      role: "Junior Developer",
      company: "Company Name",
      description:
        "Started career building web applications and backend services. Gained foundational experience in software engineering practices.",
    },
  ],

  nav: [
    { label: "Expertise", href: "#expertise" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Blog", href: "/blog" },
    { label: "Speaking", href: "/speaking" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
