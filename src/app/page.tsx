import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
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
          kjfsm.net
        </Typography>
        <Typography variant="body1" component="p">
          せっかくかっこいいドメインを買ったのに無駄にしている
        </Typography>
      </Box>
    </>
  );
}
