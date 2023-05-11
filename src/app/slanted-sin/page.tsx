"use client";

import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { LessonLayout } from "~/components/lesson-layout";
import { Slider } from "~/components/slider";
import { slatedSin } from "~/lib/curves";
import { Graph } from "~/lib/graph";

export default function Page() {
  const [a, setA] = useState(0.5);
  const [b, setB] = useState(1);

  return (
    <LessonLayout
      title="Slanted Sin Wave"
      graph={<Graph s={slatedSin(a, b)} />}
    >
      <p>This curve is defined by the following parametric equations:</p>
      <BlockMath math="x(t) = at-b\sin(t) \\ y(t) = \sin(t)" />

      <Slider value={a} setValue={setA} label="a" min={0} max={3} step={0.1} />
      <Slider value={b} setValue={setB} label="b" min={0} max={3} step={0.1} />
    </LessonLayout>
  );
}
