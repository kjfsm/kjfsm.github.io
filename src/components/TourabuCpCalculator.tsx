"use client";
import { NumericField } from "@/components/NumericField";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";

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
          刀剣乱舞 鍛刀キャンペーン天井計算機
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" component="p">
          鍛刀キャンペーンのポイントを計算します。
        </Typography>

        <Box component={"form"} noValidate autoComplete="off">
          <Stack spacing={2} sx={{ mt: 2 }}>
            <Stack spacing={2} direction="row">
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
            </Stack>

            <NumericField
              label="所持資源（最少のもの）"
              value={resources}
              onChange={setResources}
            />
            <Stack spacing={2} sx={{ mt: 2 }} direction="row">
              <NumericField label="富士" value={fuji} onChange={setFuji} />
              <NumericField label="松" value={matsu} onChange={setMatsu} />
              <NumericField label="竹" value={take} onChange={setTake} />
              <NumericField label="梅" value={ume} onChange={setUme} />
            </Stack>
            <NumericField
              label="顕現ポイント"
              value={point}
              onChange={setPoint}
            />
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" component="p">
            {resources === 0 ? (
              "所持資源を入力してください。"
            ) : resources > 0 &&
              neededResources * (fuji + matsu + take + ume) <= resources &&
              neededPoint <=
                Math.trunc(resources / neededResources) * 5 + point ? (
              "顕現可能！（札不使用）"
            ) : neededResources * (fuji + matsu + take + ume) <= resources &&
              neededPoint <=
                Math.trunc(resources / neededResources) * 5 +
                  ume * 5 +
                  take * 10 +
                  matsu * 15 +
                  fuji * 55 +
                  point ? (
              "顕現可能！（札使用）"
            ) : (
              <>
                "顕現ポイントが足りません… "<br />
                （鍛刀可能回数
                {Math.trunc(resources / neededResources)}回,到達顕現ポイント
                {Math.trunc(resources / neededResources) * 5 +
                  ume * 5 +
                  take * 10 +
                  matsu * 15 +
                  fuji * 55 +
                  point}
                （札使用時））
              </>
            )}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
