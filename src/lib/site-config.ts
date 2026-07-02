export const siteConfig = {
  name: "Maciej Skuratowski",
  title: "Staff Engineer · Kubestronaut · Researcher",
  url: "https://maciejskuratowski.com",
  location: "Rzeszów, Poland",
  locationLabel: "Rzeszów, Poland · Remote worldwide (EU timezone)",

  hero: {
    badge: "Kubestronaut — top 500 worldwide",
    heading: "Hi, I'm Maciej.",
    headingAccent: "Cloud architecture. Kubernetes platforms. ML infrastructure.",
    tagline:
      "Staff Engineer with 12+ years in cloud-native. Multi-cloud architect on Azure and GCP, hands-on in Go — from platform design to production operations.",
  },

  metadata: {
    title: "Maciej Skuratowski | Staff Engineer · Kubestronaut · Researcher",
    template: "%s | Maciej Skuratowski",
    description:
      "Staff Engineer & Kubestronaut (top 500 worldwide). Kubernetes, GitOps, and ML infrastructure consulting; research in serverless computing and ML systems.",
    keywords: [
      "Staff Engineer",
      "Kubestronaut",
      "Kubernetes",
      "Platform Engineering",
      "GitOps",
      "ArgoCD",
      "Kubernetes Operators",
      "Go",
      "Python",
      "ML Infrastructure",
      "Serverless",
      "Azure",
      "AKS",
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
    youtubeVideoId: "VIDEO_ID_HERE",
  },

  images: {
    photo: "/images/ms.png",
    ogImage: "/images/og-image.png",
  },

  expertise: [
    {
      icon: "waypoints" as const,
      title: "Platform Engineering & GitOps",
      description:
        "Designing multi-tenant Internal Developer Platforms on Kubernetes — GitOps-driven from cluster provisioning to production delivery.",
      highlights: [
        "Multi-tenant platforms on Azure/AKS",
        "GitOps with ArgoCD, Argo Workflows & Events",
        "Event-driven autoscaling & scale-to-zero with KEDA",
      ],
      tags: ["Kubernetes", "AKS", "ArgoCD", "Argo Workflows", "KEDA", "GitOps"],
    },
    {
      icon: "component" as const,
      title: "Kubernetes Operators in Go",
      description:
        "Extending Kubernetes with custom operators and controllers — turning platform runbooks into self-healing automation.",
      highlights: [
        "Custom controllers with kubebuilder & controller-runtime",
        "CRD design & Kubernetes API conventions",
        "Reconciliation patterns for production workloads",
      ],
      tags: ["Go", "kubebuilder", "controller-runtime", "CRDs", "Operators"],
    },
    {
      icon: "brain-circuit" as const,
      title: "ML Infrastructure",
      description:
        "Building multi-tenant ML platforms on Kubernetes: experiment tracking, model serving, and streaming pipelines that scale to zero when idle.",
      highlights: [
        "Multi-tenant ML platforms on Kubernetes",
        "MLflow experiment tracking & model registry",
        "Kafka streaming & scale-to-zero serving",
      ],
      tags: ["MLflow", "Kafka", "KEDA", "Python", "MLOps"],
    },
    {
      icon: "cloud-cog" as const,
      title: "Cluster Networking & Policy",
      description:
        "Securing and connecting production clusters — eBPF networking, policy-as-code, and modern ingress with the Gateway API.",
      highlights: [
        "eBPF networking & observability with Cilium",
        "Policy-as-code & admission control with Kyverno",
        "Traefik ingress on the Gateway API",
      ],
      tags: ["Cilium", "Kyverno", "Traefik", "Gateway API", "eBPF"],
    },
  ],

  audiences: [
    {
      icon: "briefcase" as const,
      title: "Hire me",
      description:
        "Consulting on Kubernetes platforms, GitOps, and ML infrastructure — advisory, hands-on delivery, or audits.",
      href: "/work-with-me",
      cta: "Work with me",
    },
    {
      icon: "flask-conical" as const,
      title: "Research",
      description:
        "Serverless computing and ML systems — publications-first PhD path with CloudLab URV.",
      href: "/research",
      cta: "Explore research",
    },
    {
      icon: "git-pull-request" as const,
      title: "Open Source",
      description:
        "Contributions to Lithops' Kubernetes backend and cloud-native tooling.",
      href: "/open-source",
      cta: "See contributions",
    },
    {
      icon: "mic" as const,
      title: "Speaking",
      description:
        "Talks on Kubernetes, platform engineering, and serverless — available for conferences and meetups.",
      href: "/speaking",
      cta: "Book a talk",
    },
  ],

  workWithMe: {
    intro:
      "I take on a small number of consulting engagements alongside my full-time work. If you need senior, hands-on help with Kubernetes, GitOps, cloud architecture, or ML infrastructure — this is what I do best.",
    engagements: [
      {
        title: "Advisory",
        description:
          "Architecture guidance, technology decisions, and roadmap reviews — recurring sessions or on-demand.",
      },
      {
        title: "Hands-on delivery",
        description:
          "Embedded engineering: building platforms, pipelines, and operators alongside your team.",
      },
      {
        title: "Audits & reviews",
        description:
          "Fixed-scope assessment of your Kubernetes, cloud, or ML setup with a prioritized, actionable report.",
      },
    ],
  },

  services: [
    {
      icon: "ship-wheel" as const,
      title: "Kubernetes & Platform Engineering",
      description: "Production-grade cluster and platform design on AKS — multi-tenancy, developer self-service, and migration from VMs or legacy CI/CD.",
      deliverables: ["Cluster & platform architecture", "Multi-tenant isolation model", "GitOps delivery with ArgoCD", "Migration strategy & execution"],
    },
    {
      icon: "infinity" as const,
      title: "GitOps & Automation",
      description: "End-to-end automation of your delivery pipeline — from provisioning through progressive rollouts, with policy and autoscaling built in.",
      deliverables: ["ArgoCD & Argo Workflows setup", "Event-driven autoscaling with KEDA", "Policy-as-code with Kyverno", "Monitoring & alerting"],
    },
    {
      icon: "server-cog" as const,
      title: "ML Infrastructure",
      description: "ML platforms that don't burn money — multi-tenant training and serving on Kubernetes with scale-to-zero economics.",
      deliverables: ["MLflow tracking & model registry", "Scale-to-zero model serving", "Kafka streaming pipelines", "GPU scheduling & cost control"],
    },
    {
      icon: "scan-search" as const,
      title: "Audits & Advisory",
      description: "Deep-dive review of your Kubernetes, cloud, or ML setup with actionable recommendations — bottlenecks, security gaps, and scaling risks.",
      deliverables: ["Architecture audit report", "Security & policy review", "Cost optimization plan", "Team upskilling sessions"],
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

  speakingIntro:
    "I speak about Kubernetes, platform engineering, and serverless — most recently at 4Developers. Before that I organized the Azure Group Poland meetups in Rzeszów, and you'll spot me at KubeCon EU. Available for conferences and meetups.",

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
      "Whether you need consulting on Kubernetes platforms or ML infrastructure, want to collaborate on serverless research, or are hiring for a Staff IC role — let's talk.",
  },

  research: {
    intro:
      "Alongside my engineering work, I pursue applied systems research at the intersection of serverless computing and machine learning infrastructure — turning production platform problems into publishable results.",
    status: {
      label: "Publications-first PhD path",
      description:
        "Pursuing a publications-first doctoral path in serverless computing and ML systems, in active collaboration with the CloudLab group at Universitat Rovira i Virgili (URV).",
    },
    interests: [
      {
        icon: "function-square" as const,
        title: "Serverless Computing",
        description:
          "Scale-to-zero architectures, stateless function runtimes, and elastic execution models for data-intensive workloads.",
      },
      {
        icon: "database" as const,
        title: "Vector Databases",
        description:
          "Stateless, serverless approaches to vector search and indexing — decoupling storage from compute for similarity workloads.",
      },
      {
        icon: "brain-circuit" as const,
        title: "ML Systems",
        description:
          "Distributed training and serving infrastructure, resource orchestration, and cost-efficient ML platforms on Kubernetes.",
      },
    ],
    collaborations: [
      {
        name: "CloudLab · Universitat Rovira i Virgili (URV)",
        role: "Research collaborator",
        description:
          "Working with the CloudLab group on stateless serverless vector databases — exploring how similarity search can run on elastic, scale-to-zero serverless runtimes.",
        // TODO: add the CloudLab URV group URL
        url: "",
      },
    ],
    // Structured for growth — add entries as papers and preprints land.
    // type: "paper" | "preprint" | "workshop" | "poster"
    publications: [] as Array<{
      title: string;
      authors: string;
      venue: string;
      year: string;
      type: string;
      url: string;
    }>,
    // TODO: add ORCID / Google Scholar once available
    profiles: {
      orcid: "",
      scholar: "",
    },
  },

  openSource: {
    intro:
      "I build and contribute to cloud-native and serverless tooling. Below are the projects I maintain and the upstream work I've contributed to.",
    // TODO: add your own repositories here. Set a real `url` to move a project
    // out of the "coming soon" empty state.
    projects: [
      {
        name: "TODO: project name",
        description:
          "TODO: short description of your own open-source project — what it does and why it exists.",
        url: "",
        tags: [] as string[],
      },
    ],
    contributions: [
      {
        project: "Lithops",
        description:
          "Serverless computing framework for running massively parallel workloads across cloud backends. Six merged PRs to the Kubernetes backend: security hardening (non-root runtime, configurable securityContext), cluster architecture auto-detection, runtime build fixes, and unit test coverage.",
        url: "https://github.com/lithops-cloud/lithops",
        tags: ["Python", "Serverless", "Kubernetes"],
        items: [
          {
            label: "All merged PRs",
            url: "https://github.com/lithops-cloud/lithops/pulls?q=is%3Apr+author%3Amskuratowski+is%3Amerged",
          },
        ],
      },
    ],
  },

  nav: [
    { label: "Work with me", href: "/work-with-me" },
    { label: "Research", href: "/research" },
    { label: "Open Source", href: "/open-source" },
    { label: "Speaking", href: "/speaking" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
