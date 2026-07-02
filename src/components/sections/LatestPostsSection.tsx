"use client";

import Link from "next/link";
import { ArrowRight, Clock, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { BlogPost } from "@/types";

export function LatestPostsSection({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Latest Posts"
            subtitle="Notes on Kubernetes, platform engineering, and serverless"
          />
        </AnimatedSection>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block">
                <Card className="flex items-center gap-6">
                  <div className="hidden shrink-0 rounded-lg bg-accent-light p-3 sm:block">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-tertiary">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-text-tertiary">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-text-secondary">
                      {post.summary}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-text-tertiary" />
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent/30 hover:text-accent hover:shadow-sm"
          >
            All posts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}
