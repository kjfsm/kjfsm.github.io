import { Box, CircularProgress, Container, Typography } from "@mui/material";

export default function Loading() {
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
        <CircularProgress size={60} />
        <Typography variant="h6" component="p" sx={{ mt: 2 }}>
          読み込み中...
        </Typography>
      </Box>
    </Container>
  );
}
