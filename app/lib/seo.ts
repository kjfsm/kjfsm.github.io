import { organization } from "@forge42/seo-tools/structured-data/organization";

/**
 * サイト全体の組織構造化データを生成
 */
export function generateOrganizationSchema(domain: string) {
  return organization({
    "@type": "Organization",
    name: "kjfsm.net - ふすま",
    url: domain,
    logo: `${domain}/favicon.ico`,
    sameAs: [],
    description:
      "React Router v7 + shadcn/ui + Tailwind CSSを使ったウェブサイト",
  });
}

/**
 * サイト全体のWebサイト構造化データを生成
 */
export function generateWebsiteSchema(domain: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "kjfsm.net",
    url: domain,
    description:
      "ふすまのウェブサイト - React Router v7 + shadcn/ui + Tailwind CSS",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${domain}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * パンくずリスト構造化データを生成（独自実装）
 * @forge42/seo-toolsのbreadcrumbs関数に不具合があるため独自実装
 */
export function generateBreadcrumbSchema(domain: string, path: string, pageNames: string[]) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: domain,
    }
  ];

  // パンくずリストのアイテムを追加
  pageNames.forEach((name, index) => {
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: name,
      item: `${domain}${path}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

/**
 * サイト共通の構造化データを取得（全ページで使用）
 */
export function getCommonStructuredData(domain: string) {
  return [
    { "script:ld+json": generateOrganizationSchema(domain) },
    { "script:ld+json": generateWebsiteSchema(domain) },
  ];
}
