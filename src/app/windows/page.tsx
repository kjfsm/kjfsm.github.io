"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts";
import * as React from "react";

export default function Windows() {
  const uData = [1, 2, 3.1, 95, 98, 2000, 7, 8, 10, 11];
  const xLabels = [
    "1.0",
    "2.0",
    "3.1",
    "95",
    "98",
    "2000",
    "7",
    "8",
    "10",
    "11",
  ];

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

        <BarChart
          xAxis={[{ scaleType: "band", data: xLabels }]}
          series={[
            {
              data: uData,
              type: "bar",
            },
          ]}
          width={500}
          height={300}
        />
        <Typography variant="body1" component="p" sx={{ mt: 2 }}>
          グラフを作りたくなったので作った
        </Typography>
      </Box>
    </>
  );
}
