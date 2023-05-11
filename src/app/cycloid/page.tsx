"use client";

import { useState } from "react";
import { BlockMath } from "react-katex";
import { LessonLayout } from "~/components/lesson-layout";
import { Slider } from "~/components/slider";
import { cycloid } from "~/lib/curves";
import { Graph } from "~/lib/graph";

export default function Page() {
  const [a, setA] = useState(0.5);
  const [b, setB] = useState(1.5);

  return (
    <LessonLayout title="Cycloid" graph={<Graph s={cycloid(a, b)} />}>
      <p>This curve is defined by the following parametric equations:</p>
      <BlockMath math="x(t) = at-b\sin(t) \\ y(t) = a-b\cos(t)" />

      <Slider value={a} setValue={setA} label="a" min={0} max={3} step={0.1} />
      <Slider value={b} setValue={setB} label="b" min={0} max={3} step={0.1} />
    </LessonLayout>
  );
}
