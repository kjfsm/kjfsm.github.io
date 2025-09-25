import type { LinksFunction } from "react-router";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import Navbar from "./components/Navbar";
import ThirdPartyLoader from "./lib/hooks/thirdPartyLoader";
import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const loader = async () => {
  return {
    GTM_ID: process.env.GTM_ID ?? "GTM-NKNNFZPX",
  };
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { GTM_ID } = useLoaderData<typeof loader>();
  return (
    <html lang="ja-JP">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col">
        <noscript suppressHydrationWarning>
          <iframe
            title="GTM"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThirdPartyLoader />
        <Navbar />
        <main>{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
