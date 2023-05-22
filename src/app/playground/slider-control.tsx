import { IconX } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";
import { InlineMath } from "react-katex";
import { Slider } from "./slider";

type SliderControlProps = {
  slider: Slider;
  sliders: Slider[];
  setSliders: Dispatch<SetStateAction<Slider[]>>;
  xNode: math.MathNode;
  yNode: math.MathNode;
  scope: Record<string, number>;
};

export function SliderControl({
  slider,
  sliders,
  setSliders,
  xNode,
  yNode,
  scope,
}: SliderControlProps) {
  return (
    <div key={slider.variable} className="flex flex-col">
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={slider.min ?? -5}
          max={slider.max ?? 5}
          step={slider.step ?? 0.1}
          value={slider.value}
          onChange={(e) => {
            setSliders(
              sliders.map((s) =>
                s.variable === slider.variable
                  ? { ...s, value: parseFloat(e.target.value) }
                  : s
              )
            );
          }}
        />

        <InlineMath math={`${slider.variable} = ${slider.value}`} />

        <IconX
          size={16}
          className="cursor-pointer text-zinc-400 transition hover:text-zinc-500"
          onClick={() => {
            // check if removing the slider will cause the equation to be invalid
            try {
              const xTest = xNode.compile().evaluate({
                ...scope,
                t: 1,
                [slider.variable]: undefined,
              });

              const yTest = yNode.compile().evaluate({
                ...scope,
                t: 1,
                [slider.variable]: undefined,
              });

              if (typeof xTest !== "number" || typeof yTest !== "number")
                throw new Error();
            } catch (e) {
              setSliders(
                sliders.map((s) =>
                  s.variable === slider.variable
                    ? {
                        ...s,
                        error:
                          "Please remove references to this variable to delete it.",
                      }
                    : s
                )
              );

              return true;
            }

            setSliders(sliders.filter((s) => s.variable !== slider.variable));
          }}
        />
      </div>
      {slider.error && (
        <span className="text-sm text-red-300">{slider.error}</span>
      )}
    </div>
  );
}
