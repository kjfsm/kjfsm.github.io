import { useState } from "react";
import { Calculator, Info } from "lucide-react";
import { NumericField } from "~/components/NumericField";
import { Separator } from "~/shadcn/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/shadcn/components/ui/card";

export default function TourabuCpCalculator() {
  const [neededResources, setNeededResources] = useState<number>(700);
  const [neededPoint, setNeededPoint] = useState<number>(5000);
  const [resources, setResources] = useState<number>(0);
  const [fuji, setFuji] = useState<number>(0);
  const [matsu, setMatsu] = useState<number>(0);
  const [take, setTake] = useState<number>(0);
  const [ume, setUme] = useState<number>(0);
  const [point, setPoint] = useState<number>(0);

  const calculateResult = () => {
    if (resources === 0) {
      return {
        message: "所持資源を入力してください。",
        type: "neutral" as const,
      };
    }

    const forgeCount = Math.trunc(resources / neededResources);
    const totalPointsWithCards = ume * 5 + take * 10 + matsu * 15 + fuji * 55 + point;
    const totalPointsBasic = forgeCount * 5 + point;

    if (forgeCount > 0 && totalPointsBasic >= neededPoint) {
      return {
        message: "顕現可能！（札不使用）",
        type: "success" as const,
      };
    } else if (forgeCount > 0 && totalPointsWithCards >= neededPoint) {
      return {
        message: "顕現可能！（札使用）",
        type: "success" as const,
      };
    } else {
      return {
        message: `顕現ポイントが足りません…（鍛刀可能回数${forgeCount}回、到達顕現ポイント${totalPointsWithCards}（札使用時））`,
        type: "error" as const,
      };
    }
  };

  const result = calculateResult();
  const forgeCount = Math.trunc(resources / neededResources);
  const totalPointsWithCards = ume * 5 + take * 10 + matsu * 15 + fuji * 55 + point;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Calculator className="size-8 text-primary" />
          <h1 className="font-bold text-4xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            刀剣乱舞 鍛刀キャンペーン天井計算機
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          鍛刀キャンペーンで天井到達に必要な資源とポイントを計算します。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle>設定・所持情報</CardTitle>
            <CardDescription>
              キャンペーン設定と現在の所持状況を入力してください
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Campaign Settings */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">キャンペーン設定</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <NumericField
                  label="鍛刀資源"
                  value={neededResources}
                  onChange={setNeededResources}
                />
                <NumericField
                  label="必要顕現ポイント"
                  value={neededPoint}
                  onChange={setNeededPoint}
                />
              </div>
            </div>

            <Separator />

            {/* Current Resources */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">所持資源</h3>
              <NumericField
                label="所持資源（最少のもの）"
                value={resources}
                onChange={setResources}
              />
            </div>

            <Separator />

            {/* Points */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">ポイント札・顕現ポイント</h3>
              <div className="grid grid-cols-2 gap-4">
                <NumericField label="富士" value={fuji} onChange={setFuji} />
                <NumericField label="松" value={matsu} onChange={setMatsu} />
                <NumericField label="竹" value={take} onChange={setTake} />
                <NumericField label="梅" value={ume} onChange={setUme} />
              </div>
              <NumericField
                label="顕現ポイント"
                value={point}
                onChange={setPoint}
              />
            </div>
          </CardContent>
        </Card>

        {/* Result */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="size-5 text-primary" />
              計算結果
            </CardTitle>
            <CardDescription>
              現在の設定に基づく天井到達可能性
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`p-4 rounded-lg ${
              result.type === "success" 
                ? "bg-green-50 border border-green-200 text-green-800" 
                : result.type === "error"
                ? "bg-red-50 border border-red-200 text-red-800"
                : "bg-secondary"
            }`}>
              <p className="text-lg font-medium">{result.message}</p>
            </div>
            
            {resources > 0 && (
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>鍛刀可能回数:</span>
                  <span>{forgeCount}回</span>
                </div>
                <div className="flex justify-between">
                  <span>現在の総ポイント:</span>
                  <span>{totalPointsWithCards}</span>
                </div>
                <div className="flex justify-between">
                  <span>必要ポイント:</span>
                  <span>{neededPoint}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Point Value Reference */}
      <Card>
        <CardHeader>
          <CardTitle>ポイント札価値表</CardTitle>
          <CardDescription>各札の顕現ポイント換算値</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-secondary rounded-lg">
              <div className="font-medium">梅</div>
              <div className="text-2xl font-bold text-primary">5pt</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="font-medium">竹</div>
              <div className="text-2xl font-bold text-primary">10pt</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="font-medium">松</div>
              <div className="text-2xl font-bold text-primary">15pt</div>
            </div>
            <div className="p-3 bg-secondary rounded-lg">
              <div className="font-medium">富士</div>
              <div className="text-2xl font-bold text-primary">55pt</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
