"use client";

import { LessonLayout } from "~/components/lesson-layout";
import { Graph } from "./graph";
import { BlockMath, InlineMath } from "react-katex";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <LessonLayout title="Step 3: Find dT/ds" graph={<Graph />}>
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

      <p>
        We already know how to find <InlineMath math="ds/dt" /> from the
        previous step, so all we need to do is find <InlineMath math="dT/dt" />.
        The math for this gets even messier than before, so just make sure you
        understand what we&apos;re doing conceptually.
      </p>

      <Button asChild className="mt-8 w-full" variant="secondary">
        <Link href="/tutorial/step-4">Next Step</Link>
      </Button>
    </LessonLayout>
  );
}
