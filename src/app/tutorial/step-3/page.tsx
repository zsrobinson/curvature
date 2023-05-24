"use client";

import { LessonLayout } from "~/components/lesson-layout";
import { Graph } from "./graph";
import { BlockMath, InlineMath } from "react-katex";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Switch } from "~/components/ui/switch";

export default function Page() {
  const [vectorTail, setVectorTail] = useState<"s" | "T">("s");

  return (
    <LessonLayout
      title="Step 3: Understand dT/ds"
      graph={<Graph vectorTail={vectorTail} />}
    >
      <p className="pb-4">
        Our next step is to find the rate of change of the unit tangent vector
        with respect to the position of a point moving along the curve{" "}
        <InlineMath math="dT/ds" />. We need to find this with respect to the
        curve instead of with respect to time because the curvature of the curve
        is not dependant on how fast a particle is traveling along the curve.
        We&apos;re finding geometry, not trajectory.
      </p>

      <p>
        To find <InlineMath math="dT/ds" />, we need to find the rate of change
        of the unit tangent vector with respect to time,{" "}
        <InlineMath math="dT/dt" />, and then divide it by the rate of change of
        the position of the particle with respect to time,{" "}
        <InlineMath math="ds/dt" />. The <InlineMath math="dt" />s cancel out,
        leaving us with <InlineMath math="dT/ds" />.
      </p>

      <BlockMath math="\frac{dT}{ds} = \frac{dT/dt}{ds/dt}" />

      <p className="pb-4">
        We already know how to find <InlineMath math="ds/dt" /> from the
        previous step, so all we need to do is find <InlineMath math="dT/dt" />.
        The math for this gets even messier than before, so just make sure you
        understand what we&apos;re doing conceptually.
      </p>

      <p>
        The graph to the right shows both our unit tangent vector{" "}
        <InlineMath math="T" /> in white, as well as <InlineMath math="dT/ds" />{" "}
        in blue. You can also see how <InlineMath math="dT/ds" /> is
        &quot;pulling&quot; <InlineMath math="T" /> as time increases by
        toggling the switch below.
      </p>

      <div className="flex justify-center pt-4">
        <div className="flex items-center gap-4">
          <span>
            Draw
            <span className="px-1 text-2xl">
              <InlineMath math="\frac{dT}{ds}" />
            </span>
            from <InlineMath math="s(t)" />
          </span>
          <Switch
            checked={vectorTail === "T"}
            onCheckedChange={(e) => {
              if (e) {
                setVectorTail("T");
              } else {
                setVectorTail("s");
              }
            }}
          />
          <span>
            Draw
            <span className="px-1 text-2xl">
              <InlineMath math="\frac{dT}{ds}" />
            </span>
            from <InlineMath math="T" />
          </span>
        </div>
      </div>

      <div className="mt-8 flex w-full gap-4">
        <Button asChild variant="outline" className="basis-1/2">
          <Link href="/tutorial/step-2">Previous Step</Link>
        </Button>
        <Button asChild variant="secondary" className="basis-1/2">
          <Link href="/tutorial/step-4">Next Step</Link>
        </Button>
      </div>
    </LessonLayout>
  );
}
