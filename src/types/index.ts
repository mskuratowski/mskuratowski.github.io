export interface ExpertiseItem {
  icon: "waypoints" | "cloud-cog" | "brain-circuit" | "component";
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  highlight: boolean;
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingTime: string;
}
