import type { MetaFunction } from "react-router";
import TourabuCpCalculator from "~/components/TourabuCpCalculator";

export const meta: MetaFunction = () => {
  return [
    { title: "刀剣乱舞 鍛刀CP計算機 | kjfsm.net" },
    { name: "description", content: "刀剣乱舞鍛刀キャンペーンで、資源が足りるか計算します。" },
    { name: "keywords", content: "刀剣乱舞,鍛刀キャンペーン,計算" },
  ];
};

export default function TourabuTantouCpPage() {
  return <TourabuCpCalculator />;
}