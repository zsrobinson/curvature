"use client";

import { useState } from "react";
import { BlockMath } from "react-katex";
import { Graph } from "~/components/graph";
import { LessonLayout } from "~/components/lesson-layout";
import { Slider } from "~/components/slider";
import { heart } from "~/lib/curves";

export default function Page() {
  const [a, setA] = useState(0.3);

  return (
    <LessonLayout title="Heart" graph={<Graph s={heart(a)} />}>
      <p>This curve is defined by the following parametric equations:</p>
      <BlockMath
        math="x(t) = 16a\sin^{3}(t) \\ 
      y(t) = 13a\cos(t)-5a\cos(2t)-2a\cos(3t)-a\cos(4t)"
      />

      <Slider
        value={a}
        setValue={setA}
        label="a"
        min={0.1}
        max={1}
        step={0.1}
      />
    </LessonLayout>
  );
}
