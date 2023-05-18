"use client";

import { ReactNode, useState } from "react";
import { InlineMath } from "react-katex";
import { Graph } from "~/components/graph";
import { LessonLayout } from "~/components/lesson-layout";
import { Input } from "~/components/ui/input";
import { func } from "~/lib/utils";

export default function Page() {
  // https://medium.com/swlh/how-to-store-a-function-with-the-usestate-hook-in-react-8a88dd4eede1
  const [x, setX] = useState<func>(() => (t: number) => t);
  const [y, setY] = useState<func>(() => (t: number) => Math.sin(t));

  const [xHasError, setXHasError] = useState(false);
  const [yHasError, setYHasError] = useState(false);

  return (
    <LessonLayout title="Playground" graph={<Graph s={[x, y]} />}>
      <p>
        Please enter your functions in the form of JavaScript syntax. For
        example, a sine wave would be represented as Math.sin(). This curve is
        defined by the following parametric equations:
      </p>

      <div className="my-2 flex items-center gap-2">
        <InlineMath math="x(t) =" />

        <Input
          type="text"
          defaultValue="t"
          onChange={(e) => {
            const value = "(t) => " + e.target.value;
            try {
              // test if the function is valid
              const test = eval(value)(1);
              if (typeof test !== "number") throw new Error();
              setX(() => eval(value));
              setXHasError(false);
            } catch {
              // display error
              setXHasError(true);
            }
          }}
          className={"font-mono " + (xHasError ? "border border-red-500" : "")}
        />
      </div>

      <div className="my-2 flex items-center gap-2">
        <InlineMath math="y(t) =" />

        <Input
          type="text"
          defaultValue="Math.sin(t)"
          onChange={(e) => {
            const value = "(t) => " + e.target.value;
            try {
              // test if the function is valid
              const test = eval(value)(1);
              if (typeof test !== "number") throw new Error();
              setY(() => eval(value));
              setYHasError(false);
            } catch {
              // display error
              setYHasError(true);
            }
          }}
          className={"font-mono " + (yHasError ? "border border-red-500" : "")}
        />
      </div>

      <h3 className="mt-4 text-xl font-semibold">Syntax Cheat Sheet</h3>
      <SyntaxCheatSheet />
    </LessonLayout>
  );
}

function SyntaxCheatSheet() {
  return (
    <ul className="list-inside list-disc">
      <li>
        Addition: <Code>t + 5</Code>
      </li>
      <li>
        Subtraction: <Code>t - 5</Code>
      </li>
      <li>
        Multiplication: <Code>t * 5</Code>
      </li>
      <li>
        Division: <Code>t / 5</Code>
      </li>
      <li>
        Exponentiation: <Code>Math.pow(t, 2)</Code> or <Code>t**2</Code>
      </li>
      <li>
        Square root: <Code>Math.sqrt(t)</Code>
      </li>
      <li>
        Natural logarithm: <Code>Math.log(t)</Code>
      </li>
      <li>
        Logarithm base 10: <Code>Math.log10(t)</Code>
      </li>
      <li>
        Absolute value: <Code>Math.abs(t)</Code>
      </li>
      <li>
        Sine: <Code>Math.sin(t)</Code>
      </li>
      <li>
        Cosine: <Code>Math.cos(t)</Code>
      </li>
      <li>
        Tangent: <Code>Math.tan(t)</Code>
      </li>
      <li>
        Pi: <Code>Math.PI</Code>
      </li>
      <li>
        Euler&apos;s number (e): <Code>Math.E</Code>
      </li>
      <li>
        Rounding: <Code>Math.round(t)</Code>
      </li>
    </ul>
  );
}

function Code({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-zinc-800 px-1 py-0.5 font-mono text-sm">
      {children}
    </span>
  );
}
