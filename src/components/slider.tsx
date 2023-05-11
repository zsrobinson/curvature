import { Dispatch, SetStateAction } from "react";
import { InlineMath } from "react-katex";

type SliderProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  label: string;
  max: number;
  min: number;
  step: number;
};

export function Slider({
  value,
  setValue,
  label,
  max,
  min,
  step,
}: SliderProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
      />
      <InlineMath math={`${label}=${value}`} />
    </div>
  );
}
