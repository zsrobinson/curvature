"use client";

import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { LessonLayout } from "~/components/lesson-layout";
import { Slider } from "~/components/slider";
import { rose } from "~/lib/curves";
import { Graph } from "~/components/graph";

export default function Page() {
  const [a, setA] = useState(3);
  const [k, setK] = useState(2);

  [
    (t: number) => a * Math.cos(k * t) * Math.cos(t),
    (t: number) => a * Math.cos(k * t) * Math.sin(t),
  ];

  return (
    <LessonLayout title="Rose" graph={<Graph s={rose(a, k)} />}>
      <p>This curve is defined by the following parametric equations:</p>
      <BlockMath math="x(t) = a\cos(kt)\cos(t) \\ y(t) = a\cos(kt)\sin(t)" />

      <Slider value={a} setValue={setA} label="a" min={0} max={10} step={0.1} />
      <Slider value={k} setValue={setK} label="k" min={0} max={10} step={1} />
    </LessonLayout>
  );
}
