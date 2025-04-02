import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
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
          ページが見つかりません
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 4 }}
        >
          お探しのページは存在しないか、移動または削除された可能性があります。
        </Typography>
        <Button
          component={Link}
          href="/"
          variant="contained"
          aria-label="ホームに戻る"
        >
          ホームに戻る
        </Button>
      </Box>
    </Container>
  );
}
