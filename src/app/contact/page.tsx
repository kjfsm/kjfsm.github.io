import { Box, Container, Typography } from "@mui/material";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "お問い合わせページ",
};

export default function Contact() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          コンタクト
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          お問い合わせはX（Twitter）のDMでお願いします。
        </Typography>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1">
            X (Twitter):{" "}
            <Link
              href="https://x.com/kjfsm4"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              @kjfsm4
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
