"use client";

import { BlockMath, InlineMath } from "react-katex";
import { LessonLayout } from "~/components/lesson-layout";
import { slatedSin } from "~/lib/curves";
import { Graph } from "~/lib/graph";

export default function Page() {
  const a = 0.5;
  const b = 1;

  return (
    <LessonLayout
      title="Slanted Sin Wave"
      graph={<Graph s={slatedSin(a, b)} />}
    >
      <p>This curve is defined by the following parametric equations:</p>
      <BlockMath math="x(t) = at-b\sin(t) \\ y(t) = \sin(t)" />
      <p>
        In this example, <InlineMath math={`a=${a}`} /> and{" "}
        <InlineMath math={`b=${b}`} />.
      </p>
    </LessonLayout>
  );
}
