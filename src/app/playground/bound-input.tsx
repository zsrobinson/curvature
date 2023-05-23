import { IconChartLine, IconCircleDot } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";
import { InlineMath } from "react-katex";
import { Input } from "~/components/ui/input";

type BoundInputProps = {
  value: number[];
  setValue: Dispatch<SetStateAction<[number, number]>>;
  type: "graph" | "circle";
};
export function BoundInput({ value, setValue, type }: BoundInputProps) {
  return (
    <div className="flex items-center justify-around gap-2">
      {type === "graph" ? (
        <span title="Bounds of Graph">
          <IconChartLine className="shrink-0" />
        </span>
      ) : (
        <span title="Bounds of Curvature Animation">
          <IconCircleDot className="shrink-0" />
        </span>
      )}

      <Input
        type="text"
        className="max-w-fit"
        defaultValue={value[0]}
        onChange={(e) => {
          setValue([Number(e.target.value), value[1]]);
        }}
      />

      <span className="shrink-0">
        <InlineMath math="\leq t \leq" />
      </span>

      <Input
        type="text"
        className="max-w-fit"
        defaultValue={value[1]}
        onChange={(e) => {
          setValue([value[0], Number(e.target.value)]);
        }}
      />
    </div>
  );
}
