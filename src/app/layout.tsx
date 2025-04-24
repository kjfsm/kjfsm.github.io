import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { Container, Divider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "kjfsm.net",
    template: "%s | kjfsm.net",
  },
  description: "ふすまのウェブサイト",
  keywords: ["kjfsm", "ふすま"],
  authors: [{ name: "kjfsm" }],
  creator: "kjfsm",
  publisher: "kjfsm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kjfsm.net"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://kjfsm.net",
    siteName: "kjfsm.net",
    title: {
      default: "kjfsm.net",
      template: "%s | kjfsm.net",
    },
    description: "ふすまのウェブサイト",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "kjfsm.net",
      template: "%s | kjfsm.net",
    },
    description: "ふすまのウェブサイト",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Appbar />
          <Container maxWidth="md">{props.children}</Container>
          <Divider />
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
