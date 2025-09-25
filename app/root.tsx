import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "react-router";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import Navbar from "./components/Navbar";
import { 
  generateOrganizationSchema, 
  generateWebsiteSchema,
  StructuredDataScript 
} from "./lib/seo";
import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const domain = `${url.protocol}//${url.host}`;

  return {
    domain,
    organizationSchema: generateOrganizationSchema(domain),
    websiteSchema: generateWebsiteSchema(domain),
  };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const domain = data?.domain || "https://kjfsm.net";

  return [
    { title: "kjfsm.net - ふすまのウェブサイト" },
    {
      name: "description",
      content:
        "ふすまのウェブサイト - React Router v7 + shadcn/ui + Tailwind CSS",
    },
    {
      name: "keywords",
      content:
        "kjfsm,ふすま,React Router,shadcn/ui,Tailwind CSS,フロントエンド,ウェブ開発",
    },
    { name: "author", content: "ふすま (kjfsm)" },
    { name: "robots", content: "index, follow" },

    // カノニカルURL
    { tagName: "link", rel: "canonical", href: domain },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: "kjfsm.net - ふすまのウェブサイト" },
    {
      property: "og:description",
      content:
        "ふすまのウェブサイト - React Router v7 + shadcn/ui + Tailwind CSS",
    },
    { property: "og:url", content: domain },
    { property: "og:site_name", content: "kjfsm.net" },
    { property: "og:locale", content: "ja_JP" },
    { property: "og:image", content: `${domain}/favicon.ico` },
    { property: "og:image:width", content: "48" },
    { property: "og:image:height", content: "48" },
    { property: "og:image:type", content: "image/x-icon" },

    // Twitter Card
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "kjfsm.net - ふすまのウェブサイト" },
    {
      name: "twitter:description",
      content:
        "ふすまのウェブサイト - React Router v7 + shadcn/ui + Tailwind CSS",
    },
    { name: "twitter:image", content: `${domain}/favicon.ico` },

    // 追加のメタタグ
    { name: "theme-color", content: "#2563eb" },
    { name: "msapplication-TileColor", content: "#2563eb" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <html lang="ja-JP">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main>
          {children}
          {/* 構造化データをdangerouslySetInnerHTMLなしで挿入 */}
          {loaderData && (
            <>
              <StructuredDataScript data={loaderData.organizationSchema} />
              <StructuredDataScript data={loaderData.websiteSchema} />
            </>
          )}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
