"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーをコンソールに出力
    console.error(error);
  }, [error]);

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          エラーが発生しました
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 4 }}
        >
          申し訳ありません。予期せぬエラーが発生しました。
          もう一度お試しください。
        </Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
          <Button variant="contained" onClick={reset} aria-label="再試行">
            再試行
          </Button>
          <Button
            variant="outlined"
            onClick={handleHomeClick}
            aria-label="ホームに戻る"
          >
            ホームに戻る
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
