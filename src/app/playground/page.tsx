"use client";

import * as math from "mathjs";
import { ReactNode, useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { Graph } from "~/components/graph";
import { LessonLayout } from "~/components/lesson-layout";
import { Input } from "~/components/ui/input";

export default function Page() {
  // https://medium.com/swlh/how-to-store-a-function-with-the-usestate-hook-in-react-8a88dd4eede1
  const [xNode, setXNode] = useState<math.MathNode>(math.parse("t"));
  const [yNode, setYNode] = useState<math.MathNode>(math.parse("sin(t)"));

  const [xError, setXError] = useState("");
  const [yError, setYError] = useState("");

  return (
    <LessonLayout
      title="Playground"
      graph={
        <Graph
          s={[
            (t) => xNode.compile().evaluate({ t }),
            (t) => yNode.compile().evaluate({ t }),
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

                const test = node.compile().evaluate({ t: 1 });
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

                const test = node.compile().evaluate({ t: 1 });
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
    </LessonLayout>
  );
}
