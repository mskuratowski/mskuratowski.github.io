import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Platform Engineering, Kubernetes, Cloud Architecture, and Staff Engineering by Maciej Skuratowski.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="pt-28 pb-20 sm:pt-36">
      <Container>
        <AnimatedSection>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <SectionHeading
            title="Blog"
            subtitle="Thoughts on platform engineering, cloud architecture, and technical leadership"
          />
        </AnimatedSection>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block">
                <Card className="flex items-center gap-6 transition-all hover:border-accent/30 hover:shadow-md">
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-1.5 text-xs text-text-tertiary">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-text-tertiary">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
                      {post.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-tertiary"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-text-tertiary" />
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
