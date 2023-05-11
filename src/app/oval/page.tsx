"use client";

import { BlockMath, InlineMath } from "react-katex";
import { LessonLayout } from "~/components/lesson-layout";
import { oval } from "~/lib/curves";
import { Graph } from "~/lib/graph";

export default function Page() {
  const a = 0.5;
  const b = 1;

  return (
    <LessonLayout title="Oval" graph={<Graph s={oval(a, b)} />}>
      <p>This curve is defined by the following parametric equations:</p>
      <BlockMath math="x(t) = a\sin(t) \\ y(t) = b\cos(t)" />
      <p>
        In this example, <InlineMath math={`a=${a}`} /> and{" "}
        <InlineMath math={`b=${b}`} />.
      </p>
    </LessonLayout>
  );
}
