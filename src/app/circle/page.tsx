import { Box, Container, Typography } from "@mui/material";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サークルスケジューラー",
  description: "サークルスケジューラーの紹介ページ",
};

export default function Contact() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          サークルスケジューラー
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          サークルスケジューラーは、サークル活動のスケジュール管理を支援するアプリです。
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          できること
        </Typography>
        <ul>
          <li>グループの作成</li>
          <li>メンバーの招待・管理</li>
          <li>イベントの作成・編集・削除</li>
          <li>カレンダー表示でのスケジュール確認</li>
        </ul>
        <Typography variant="body1" sx={{ mb: 4 }}>
          興味のある方は以下のリンクからアクセスしてください。
        </Typography>
        <Typography variant="body1" component="p">
          <Link href="https://circle.kjfsm.net">サークルスケジューラー</Link>
        </Typography>
      </Box>
    </Container>
  );
}
