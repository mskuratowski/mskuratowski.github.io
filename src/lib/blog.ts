import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { BlogPost } from "@/types";
import type { ReactElement } from "react";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags ?? [],
      readingTime: data.readingTime ?? "5 min read",
    } satisfies BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  slug: string
): Promise<{ meta: BlogPost; content: ReactElement } | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);

  const { content } = await compileMDX({
    source: raw,
    options: { parseFrontmatter: true },
  });

  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags ?? [],
      readingTime: data.readingTime ?? "5 min read",
    },
    content,
  };
}
