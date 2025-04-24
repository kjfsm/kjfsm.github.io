import WindowsChart from "@/components/WindowsChart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Windowsのバージョンの推移",
  description: "Windowsのバージョンの推移",
};

export default function Windows() {
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
          Windowsのバージョンの推移
        </Typography>

        <WindowsChart />
        <Typography variant="body1" component="p" sx={{ mt: 2 }}>
          グラフを作りたくなったので作った
        </Typography>
      </Box>
    </>
  );
}
