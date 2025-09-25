import { generateSitemap } from "@forge42/seo-tools/sitemap";
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const domain = `${url.protocol}//${url.host}`;

  // サイトの全ルートを定義
  const routes = [
    {
      url: "/",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly" as const,
      priority: 1.0 as const,
    },
    {
      url: "/about",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly" as const,
      priority: 0.8 as const,
    },
    {
      url: "/how-to-use",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly" as const,
      priority: 0.8 as const,
    },
    {
      url: "/circle",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly" as const,
      priority: 0.8 as const,
    },
    {
      url: "/tourabu/tantou-cp",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly" as const,
      priority: 0.7 as const,
    },
    {
      url: "/terms",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "yearly" as const,
      priority: 0.3 as const,
    },
    {
      url: "/privacy",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "yearly" as const,
      priority: 0.3 as const,
    },
  ];

  const sitemap = await generateSitemap({
    domain,
    routes,
  });

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // 1時間キャッシュ
    },
  });
}
