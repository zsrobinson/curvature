"use client";

import { LessonLayout } from "~/components/lesson-layout";
import { Graph } from "./graph";
import { BlockMath, InlineMath } from "react-katex";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Switch } from "~/components/ui/switch";

export default function Page() {
  const [activeVector, setActiveVector] = useState<"T" | "ds/dt">("ds/dt");

  return (
    <LessonLayout
      title="Step 2: Find the Unit Tangent Vector"
      graph={<Graph activeVector={activeVector} />}
    >
      <p className="pb-4">
        The Unit Tangent Vector (<InlineMath math="T" />) is the tangent of the
        curve with a uniform length of one. To find <InlineMath math="T" />, we
        must first find{" "}
        <span className="text-xl">
          <InlineMath math="\frac{ds}{dt}" />
        </span>
        , which is the rate of change of a point traveling along the curve with
        respect to time. In other words, it&apos;s the tangent to the curve (you
        could also think of it as &quot;velocity&quot;).
      </p>

      <p>
        Given that <InlineMath math="s(t)" /> is defined by the following
        components,
      </p>

      <BlockMath
        math="x(t) = at-b\sin(t) \\ y(t) =
      a-b\cos(t)"
      />

      <p>
        We can find{" "}
        <span className="text-xl">
          <InlineMath math="\frac{ds}{dt}" />
        </span>{" "}
        by taking the derivative of each component.
      </p>

      <BlockMath math="\frac{ds}{dt} = \left\langle \frac{dx}{dt}, \frac{dy}{dt} \right\rangle = \left\langle a-b\cos(t), b\sin(t) \right\rangle" />

      <p>
        Now that we have{" "}
        <span className="text-xl">
          <InlineMath math="\frac{ds}{dt}" />
        </span>
        , we can find <InlineMath math="T" /> by dividing{" "}
        <span className="text-xl">
          <InlineMath math="\frac{ds}{dt}" />
        </span>{" "}
        by its magnitude, which gives us a vector with a length of one.
      </p>

      <BlockMath math="T = \frac{\frac{ds}{dt}}{\lVert\frac{ds}{dt}\rVert} = \frac{\left\langle a-b\cos(t), b\sin(t) \right\rangle}{\sqrt{(a-b\cos(t))^2+(b\sin(t))^2}}" />

      <p>
        The specific math is getting a bit messy at this point, but the
        important part is that you&apos;re able to understand what{" "}
        <span className="text-xl">
          <InlineMath math="\frac{ds}{dt}" />
        </span>{" "}
        and <InlineMath math="T" /> are. Try flipping between the visualizations
        of both of these vectors to get a better understanding of what they
        represent. Once you&apos;re ready, move on to the next step.
      </p>

      <div className="flex justify-center pt-4">
        <div className="flex items-center gap-4">
          <span className="text-2xl">
            <InlineMath math="\frac{ds}{dt}" />
          </span>
          <Switch
            checked={activeVector === "T"}
            onCheckedChange={(e) => {
              if (e) {
                setActiveVector("T");
              } else {
                setActiveVector("ds/dt");
              }
            }}
          />
          <span className="text-xl">
            <InlineMath math="T" />
          </span>
        </div>
      </div>

      <div className="mt-8 flex w-full gap-4">
        <Button asChild variant="outline" className="basis-1/2">
          <Link href="/tutorial/step-1">Previous Step</Link>
        </Button>
        <Button asChild variant="secondary" className="basis-1/2">
          <Link href="/tutorial/step-3">Next Step</Link>
        </Button>
      </div>
    </LessonLayout>
  );
}
