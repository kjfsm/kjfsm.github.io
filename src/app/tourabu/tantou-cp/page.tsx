import TourabuCpCalculator from "@/components/TourabuCpCalculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "刀剣乱舞 鍛刀CP天井計算機",
  description: "刀剣乱舞 鍛刀CP天井計算機",
};

export default function Page() {
  return <TourabuCpCalculator />;
}
