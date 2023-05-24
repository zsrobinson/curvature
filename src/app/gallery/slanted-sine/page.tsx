"use client";

import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { Graph } from "~/components/graph";
import { LessonLayout } from "~/components/lesson-layout";
import { Slider } from "~/components/slider";
import { slatedSin } from "~/lib/curves";

export default function Page() {
  const [a, setA] = useState(0.5);
  const [b, setB] = useState(1);

  return (
    <LessonLayout
      title="Slanted Sine Wave"
      graph={<Graph s={slatedSin(a, b)} />}
    >
      <p>This curve is defined by the following parametric equations:</p>
      <BlockMath math="x(t) = at-b\sin(t) \\ y(t) = \sin(t)" />

      <Slider value={a} setValue={setA} label="a" min={0} max={3} step={0.1} />
      <Slider value={b} setValue={setB} label="b" min={0} max={3} step={0.1} />

      <p className="pt-4">
        <b>Tip:</b> Setting <InlineMath math="b=0" /> will produce a normal sine
        wave.
      </p>
    </LessonLayout>
  );
}
