import { TextField } from "@mui/material";

type NumericFieldProps = {
  label: string;
  id?: string;
  value: number;
  onChange: (value: number) => void;
};

export const NumericField = ({
  label,
  id,
  value,
  onChange,
}: NumericFieldProps) => {
  return (
    <TextField
      type="text"
      label={label}
      id={id}
      value={value.toString()}
      slotProps={{
        htmlInput: {
          inputMode: "numeric",
        },
      }}
      onChange={(e) => {
        onChange(sanitizeInput(e.target.value));
      }}
    />
  );
};

const sanitizeInput = (raw: string): number => {
  const cleaned = raw.replace(/^0+(?=\d)/, ""); // 頭の0を除去
  const parsed = Number(cleaned);
  return Number.isNaN(parsed) ? 0 : parsed;
};
