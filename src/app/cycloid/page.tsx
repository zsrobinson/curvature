"use client";

import { BlockMath, InlineMath } from "react-katex";
import { LessonLayout } from "~/components/lesson-layout";
import { cycloid } from "~/lib/curves";
import { Graph } from "~/lib/graph";

export default function Page() {
  const a = 0.5;
  const b = 1.5;

  return (
    <LessonLayout title="Cycloid" graph={<Graph s={cycloid(a, b)} />}>
      <p>This curve is defined by the following parametric equations:</p>
      <BlockMath math="x(t) = at-b\sin(t) \\ y(t) = a-b\cos(t)" />
      <p>
        In this example, <InlineMath math={`a=${a}`} /> and{" "}
        <InlineMath math={`b=${b}`} />.
      </p>
    </LessonLayout>
  );
}
