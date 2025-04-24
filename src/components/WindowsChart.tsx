"use client";
import { BarChart } from "@mui/x-charts";

export default function WindowsChart() {
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
  );
}
