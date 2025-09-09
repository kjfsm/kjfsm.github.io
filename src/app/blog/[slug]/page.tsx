import fs from "node:fs";
import path from "node:path";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const POSTS_DIR = path.join(process.cwd(), "src", "app", "blog", "posts");

export async function generateStaticParams() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".tsx"));
  return files.map((f) => ({ slug: f.replace(/\.tsx$/, "") }));
}

type Props = { params: { slug: string } };

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    // 相対 import（[slug]/page.tsx から見て ../posts/...）
    const mod = await import(`../posts/${slug}.tsx`);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return (mod as any).metadata ?? {};
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    // 相対 import（[slug]/page.tsx から見て ../posts/...）
    const mod = await import(`../posts/${slug}.tsx`);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const Component = (mod as any).default;
    return (
      <>
        <Component />
        <Link href="/blog">ブログトップに戻る</Link>
      </>
    );
  } catch {
    notFound();
  }
}
