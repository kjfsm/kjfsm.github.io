import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import * as React from "react";

import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

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
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
