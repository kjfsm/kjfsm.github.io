import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

type Meta = {
  slug: string;
  title: string;
  date: string; // "YYYY-MM-DD"
  excerpt?: string;
};

const POSTS_DIR = path.join(process.cwd(), "src", "app", "blog", "posts");

async function getAllPostsMeta(): Promise<Meta[]> {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".tsx"));
  const slugs = files.map((f) => f.replace(/\.tsx$/, ""));

  // 相対 import（ここがポイント！）
  const metas = await Promise.all(
    slugs.map(async (slug) => {
      // ここは page.tsx から見た相対パス
      const mod = await import(`./posts/${slug}.tsx`);
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const m = (mod as any).meta as Meta | undefined;
      return m ?? { slug, title: slug, date: "1970-01-01" };
    }),
  );

  metas.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return metas;
}

export default async function BlogIndex() {
  const posts = await getAllPostsMeta();

  return (
    <main>
      <ul className="space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="border rounded p-4">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="text-sm text-gray-500">{p.date}</p>
            {p.excerpt && <p>{p.excerpt}</p>}
          </li>
        ))}
        {posts.length === 0 && <p>まだ記事がありません。</p>}
      </ul>
    </main>
  );
}
