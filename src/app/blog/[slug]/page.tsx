import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <section className="pt-28 pb-20 sm:pt-36">
      <Container className="max-w-3xl">
        <AnimatedSection>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>

          <div className="mb-8">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-sm text-text-tertiary">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.meta.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-text-tertiary">
                <Clock className="h-3.5 w-3.5" />
                {post.meta.readingTime}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              {post.meta.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.meta.tags.map((tag) => (
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
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <article className="prose prose-gray dark:prose-invert max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:text-accent prose-code:before:content-none prose-code:after:content-none">
            {post.content}
          </article>
        </AnimatedSection>
      </Container>
    </section>
  );
}
