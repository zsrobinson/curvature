"use client";

import * as math from "mathjs";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { Graph } from "~/components/graph";
import { LessonLayout } from "~/components/lesson-layout";
import { Input } from "~/components/ui/input";
import { Slider } from "./slider";
import { SliderControl } from "./slider-control";
import { SliderHeader } from "./slider-header";

export default function Page() {
  const [xNode, setXNode] = useState<math.MathNode>(math.parse("t"));
  const [yNode, setYNode] = useState<math.MathNode>(math.parse("sin(t)"));

  const [xError, setXError] = useState("");
  const [yError, setYError] = useState("");

  const [sliders, setSliders] = useState<Slider[]>([
    { variable: "a", value: 1 },
    { variable: "b", value: 3 },
  ]);

  const scope = Object.fromEntries(
    sliders.map((slider) => [slider.variable, slider.value])
  );

  return (
    <LessonLayout
      title="Playground"
      graph={
        <Graph
          s={[
            (t) => xNode.compile().evaluate({ ...scope, t }),
            (t) => yNode.compile().evaluate({ ...scope, t }),
          ]}
        />
      }
    >
      <p>Please enter your own equations to draw out!</p>

      <BlockMath
        math={`x(t) = ${xNode.toTex()} \\\\ y(t) = ${yNode.toTex()}`}
      />

      <div className="my-2 flex items-start gap-2">
        <span className="pt-2">
          <InlineMath math="x(t) =" />
        </span>

        <div className="flex flex-col gap-1">
          <Input
            type="text"
            defaultValue="t"
            onChange={(e) => {
              try {
                if (e.target.value === "")
                  throw new Error("Please enter an expression.");
                const node = math.parse(e.target.value);

                const test = node.compile().evaluate({ ...scope, t: 1 });
                if (typeof test !== "number")
                  throw new Error("Please enter a valid expression.");

                setXNode(node);
                setXError("");
              } catch (e) {
                setXError((e as any).toString());
              }
            }}
            className={
              "font-mono " + (xError !== "" ? "border border-red-500" : "")
            }
          />
          {xError !== "" && (
            <span className="text-sm text-red-300">{xError}</span>
          )}
        </div>
      </div>

      <div className="my-2 flex items-start gap-2">
        <span className="pt-2">
          <InlineMath math="y(t) =" />
        </span>

        <div className="flex flex-col gap-1">
          <Input
            type="text"
            defaultValue="sin(t)"
            onChange={(e) => {
              try {
                if (e.target.value === "")
                  throw new Error("Please enter an expression.");
                const node = math.parse(e.target.value);

                const test = node.compile().evaluate({ ...scope, t: 1 });
                if (typeof test !== "number")
                  throw new Error("Please enter a valid expression.");

                setYNode(node);
                setYError("");
              } catch (e) {
                setYError((e as any).toString());
              }
            }}
            className={
              "font-mono " + (yError !== "" ? "border border-red-500" : "")
            }
          />
          {yError !== "" && (
            <span className="text-sm text-red-300">{yError}</span>
          )}
        </div>
      </div>

      <SliderHeader sliders={sliders} setSliders={setSliders} />

      <div className="flex flex-col gap-1 pt-2">
        {sliders.map((slider) => (
          <SliderControl
            key={slider.variable}
            slider={slider}
            sliders={sliders}
            setSliders={setSliders}
            xNode={xNode}
            yNode={yNode}
            scope={scope}
          />
        ))}
      </div>
    </LessonLayout>
  );
}
