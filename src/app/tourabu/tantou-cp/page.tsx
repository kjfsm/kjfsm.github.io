"use client";
import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [neededShigen, setNeededShigen] = useState<number>(700);
  const [neededPoint, setNeededPoint] = useState<number>(5000);
  const [shojiShigen, setShojiShigen] = useState<number>(0);
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
              <TextField
                type="text"
                label="鍛刀資源"
                id="shigen"
                value={neededShigen}
                slotProps={{
                  htmlInput: {
                    inputMode: "numeric",
                  },
                }}
                onChange={(e) => {
                  setNeededShigen(Number.parseFloat(e.target.value));
                }}
              />
              <TextField
                type="text"
                label="必要顕現ポイント"
                id="neededPoint"
                value={neededPoint}
                slotProps={{
                  htmlInput: {
                    inputMode: "numeric",
                  },
                }}
                onChange={(e) => {
                  setNeededPoint(Number.parseFloat(e.target.value));
                }}
              />
            </Stack>

            <TextField
              type="text"
              label="所持資源（最少のもの）"
              id="shoji"
              value={shojiShigen}
              slotProps={{
                htmlInput: {
                  inputMode: "numeric",
                },
              }}
              onChange={(e) => {
                const value = Number.parseFloat(e.target.value);
                if (Number.isNaN(value) || value < 0) {
                  setShojiShigen(0);
                  return;
                }
                setShojiShigen(value);
              }}
            />
            <Stack spacing={2} sx={{ mt: 2 }} direction="row">
              <TextField
                type="text"
                label="富士"
                id="fuji"
                value={fuji}
                slotProps={{
                  htmlInput: {
                    inputMode: "numeric",
                  },
                }}
                onChange={(e) => {
                  setFuji(Number.parseFloat(e.target.value));
                }}
              />
              <TextField
                type="text"
                label="松"
                id="matsu"
                value={matsu}
                slotProps={{
                  htmlInput: {
                    inputMode: "numeric",
                  },
                }}
                onChange={(e) => {
                  setMatsu(Number(e.target.value));
                }}
              />
              <TextField
                type="text"
                label="竹"
                id="take"
                value={take}
                slotProps={{
                  htmlInput: {
                    inputMode: "numeric",
                  },
                }}
                onChange={(e) => {
                  setTake(Number(e.target.value));
                }}
              />
              <TextField
                type="text"
                label="梅"
                id="ume"
                value={ume}
                slotProps={{
                  htmlInput: {
                    inputMode: "numeric",
                  },
                }}
                onChange={(e) => {
                  setUme(Number(e.target.value));
                }}
              />
            </Stack>
            <TextField
              type="text"
              label="顕現ポイント"
              id="point"
              value={point}
              slotProps={{
                htmlInput: {
                  inputMode: "numeric",
                },
              }}
              onChange={(e) => {
                setPoint(Number(e.target.value));
              }}
            />
          </Stack>
          <Divider sx={{ my: 2 }} />
          {shojiShigen === 0 ? (
            <Typography variant="body1" component="p">
              所持資源を入力してください。
            </Typography>
          ) : shojiShigen > 0 &&
            neededShigen * (fuji + matsu + take + ume) <= shojiShigen &&
            neededPoint <=
              Math.trunc(shojiShigen / neededShigen) * 5 + point ? (
            <Typography variant="body1" component="p">
              顕現可能！（札不使用）
            </Typography>
          ) : neededShigen * (fuji + matsu + take + ume) <= shojiShigen &&
            neededPoint <=
              Math.trunc(shojiShigen / neededShigen) * 5 +
                ume * 5 +
                take * 10 +
                matsu * 15 +
                fuji * 55 +
                point ? (
            <Typography variant="body1" component="p">
              顕現可能！（札使用）
            </Typography>
          ) : (
            <Typography variant="body1" component="p">
              顕現ポイントが足りません… <br />
              （鍛刀可能回数
              {Math.trunc(shojiShigen / neededShigen)}回,到達顕現ポイント
              {Math.trunc(shojiShigen / neededShigen) * 5 +
                ume * 5 +
                take * 10 +
                matsu * 15 +
                fuji * 55 +
                point}
              （札使用時））
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
