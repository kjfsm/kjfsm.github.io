import { Box, Container, Typography } from "@mui/material";
import type { Metadata } from "next";

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
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          サークルスケジューラー
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          サークルスケジューラーは、サークル活動のスケジュール管理を支援するアプリです。
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          できること
        </Typography>
        <ul>
          <li>グループの作成</li>
          <li>メンバーの招待・管理</li>
          <li>イベントの作成・編集・削除</li>
          <li>カレンダー表示でのスケジュール確認</li>
        </ul>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          現在開発中です。興味のある方は以下のリンクからアクセスしてください。
        </Typography>
        <Typography variant="body1" component="p">
          <a href="https://circle.kjfsm.net">サークルスケジューラー</a>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="body2" color="textSecondary">
          ※このアプリはまだ開発中であり、予告なく変更されることがあります。
        </Typography>
      </Box>
    </Container>
  );
}
