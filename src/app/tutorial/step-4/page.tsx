"use client";

import { LessonLayout } from "~/components/lesson-layout";
import { Graph } from "./graph";
import { BlockMath, InlineMath } from "react-katex";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <LessonLayout title="Step 4: Find k and R" graph={<Graph />}>
      <p className="pb-4">
        We&apos;re almost there! Now that we know <InlineMath math="dT/ds" />,
        we can finally find the curvature of the curve. The curvature (shown as
        the greek letter Kappa) is defined as the magnitude of{" "}
        <InlineMath math="dT/ds" />, which we already know from the last step.
      </p>

      <BlockMath
        math="\kappa = \left\lVert\frac{dT}{ds}\right\rVert = \frac
        {\left\lVert\frac{dT}{dt}\right\rVert}
        {\left\lVert\frac{ds}{dt}\right\rVert}"
      />

      <p>
        The last thing we need to do is find the radius of curvature (
        <InlineMath math="R" />
        ), which is defined as the reciprocal of the curvature. This is the
        radius of the circle that best approximates the curve at a given point.
      </p>

      <BlockMath math="R = \frac{1}{\kappa}" />

      <p>
        Congrats on making it this far! You now know how to find the curvature
        of a curve, or at least the concepts behind it. You can check out some
        pre-made examples of the curvature of different parametric curves in the
        examples section of this website, or enter your own in the playground
        section.
      </p>

      <div className="mt-8 flex w-full gap-4">
        <Button asChild variant="outline" className="basis-1/2">
          <Link href="/tutorial/step-3">Previous Step</Link>
        </Button>
        <Button asChild variant="secondary" className="basis-1/2">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </LessonLayout>
  );
}
