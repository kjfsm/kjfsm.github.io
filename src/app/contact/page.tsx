"use client";
import { Box, Container, Typography } from "@mui/material";

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
          お問い合わせ
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          お問い合わせはX（Twitter）のDMでお願いします。
        </Typography>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1">
            X (Twitter):{" "}
            <a
              href="https://x.com/kjfsm4"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              @kjfsm4
            </a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
} 
