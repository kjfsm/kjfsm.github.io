import { generateRobotsTxt } from "@forge42/seo-tools/robots";

export async function loader() {
  const domain = "https://kjfsm.net";

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
