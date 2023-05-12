"use client";

import { useState } from "react";
import { BlockMath } from "react-katex";
import { LessonLayout } from "~/components/lesson-layout";
import { Slider } from "~/components/slider";
import { oval } from "~/lib/curves";
import { Graph } from "~/components/graph";

export default function Page() {
  const [a, setA] = useState(0.5);
  const [b, setB] = useState(1);

  return (
    <LessonLayout title="Oval" graph={<Graph s={oval(a, b)} />}>
      <p>This curve is defined by the following parametric equations:</p>
      <BlockMath math="x(t) = a\sin(t) \\ y(t) = b\cos(t)" />

      <Slider value={a} setValue={setA} label="a" min={0} max={3} step={0.1} />
      <Slider value={b} setValue={setB} label="b" min={0} max={3} step={0.1} />
    </LessonLayout>
  );
}
