import { Input } from "~/shadcn/components/ui/input";
import { Label } from "~/shadcn/components/ui/label";

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
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type="text"
        id={id}
        value={value.toString()}
        inputMode="numeric"
        onChange={(e) => {
          onChange(sanitizeInput(e.target.value));
        }}
      />
    </div>
  );
};

const sanitizeInput = (raw: string): number => {
  const cleaned = raw.replace(/^0+(?=\d)/, ""); // 頭の0を除去
  const parsed = Number(cleaned);
  return Number.isNaN(parsed) ? 0 : parsed;
};
