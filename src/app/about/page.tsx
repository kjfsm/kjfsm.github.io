import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

export default function About() {
  return (
    <>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          About
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" component="h2">
          名前
        </Typography>
        <Typography variant="body1" component="p">
          ふすま
        </Typography>
        <Typography variant="h5" component="h2">
          X アカウント
        </Typography>
        <Typography variant="body1" component="p">
          <NextLink href="https://x.com/kjfsm4">https://x.com/kjfsm4</NextLink>
        </Typography>

        <Typography variant="h5" component="h2">
          好きなもの
        </Typography>
        <Typography variant="body1" component="p">
          ゲーム
        </Typography>
        <Typography variant="h5" component="h2">
          プログラミング
        </Typography>
        <Typography variant="h6" component="h3">
          Go言語
        </Typography>
        <Typography variant="body1" component="p">
          ちょっと書ける。簡単なCLIとかバックエンドとかつくってた。
        </Typography>
        <Typography variant="h6" component="h3">
          Typescript
        </Typography>
        <Typography variant="body1" component="p">
          ちょっと書いたことある。あんまり難しいことはできない。
          このサイトはTypescript + Next.js + Material
          UIで作っている。今のお気に入りの組み合わせ。
        </Typography>
        <Typography variant="h6" component="h3">
          Docker
        </Typography>
        <Typography variant="body1" component="p">
          Dev Containerで開発環境作ったりなんかデプロイするときに使っている。
          あんまり難しいことはわからない。
        </Typography>
      </Box>
    </>
  );
}
