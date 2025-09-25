import { generateRobotsTxt } from "@forge42/seo-tools/robots";
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const domain = `${url.protocol}//${url.host}`;

  const robotsTxt = generateRobotsTxt([
    {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
      crawlDelay: 1,
      sitemap: [`${domain}/sitemap.xml`],
    },
  ]);

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // 24時間キャッシュ
    },
  });
}
