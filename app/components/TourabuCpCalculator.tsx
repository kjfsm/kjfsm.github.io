import { useState } from "react";
import { NumericField } from "~/components/NumericField";
import { Separator } from "~/shadcn/components/ui/separator";

export default function TourabuCpCalculator() {
  const [neededResources, setNeededResources] = useState<number>(700);
  const [neededPoint, setNeededPoint] = useState<number>(5000);
  const [resources, setResources] = useState<number>(0);
  const [fuji, setFuji] = useState<number>(0);
  const [matsu, setMatsu] = useState<number>(0);
  const [take, setTake] = useState<number>(0);
  const [ume, setUme] = useState<number>(0);
  const [point, setPoint] = useState<number>(0);

  return (
    <div className="space-y-8">
      <div className="my-8 flex flex-col items-center justify-center">
        <h1 className="mb-4 text-center font-bold text-4xl">
          刀剣乱舞 鍛刀キャンペーン天井計算機
        </h1>
      </div>

      <div className="space-y-6">
        <p className="text-lg">鍛刀キャンペーンのポイントを計算します。</p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

          <NumericField
            label="所持資源（最少のもの）"
            value={resources}
            onChange={setResources}
          />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
        </form>

        <Separator />

        <div className="rounded-lg bg-muted p-4">
          <p className="font-medium text-lg">
            {resources === 0 ? (
              "所持資源を入力してください。"
            ) : resources > 0 &&
              neededResources * (fuji + matsu + take + ume) <= resources &&
              neededPoint <=
                Math.trunc(resources / neededResources) * 5 + point ? (
              <span className="text-green-600">顕現可能！（札不使用）</span>
            ) : neededResources * (fuji + matsu + take + ume) <= resources &&
              neededPoint <=
                Math.trunc(resources / neededResources) * 5 +
                  ume * 5 +
                  take * 10 +
                  matsu * 15 +
                  fuji * 55 +
                  point ? (
              <span className="text-green-600">顕現可能！（札使用）</span>
            ) : (
              <span className="text-red-600">
                顕現ポイントが足りません…
                <br />
                （鍛刀可能回数
                {Math.trunc(resources / neededResources)}回,到達顕現ポイント
                {Math.trunc(resources / neededResources) * 5 +
                  ume * 5 +
                  take * 10 +
                  matsu * 15 +
                  fuji * 55 +
                  point}
                （札使用時））
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
