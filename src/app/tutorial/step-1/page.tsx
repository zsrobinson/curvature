"use client";

import { LessonLayout } from "~/components/lesson-layout";
import { Graph } from "./graph";
import { BlockMath, InlineMath } from "react-katex";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <LessonLayout title="Step 1: Define the Curve" graph={<Graph />}>
      <p className="pb-4">
        To find the curvature of a curve, we first have to define the curve! The
        curve must be a set of parametric equations that are defined in terms of{" "}
        <InlineMath math="t" />, where both <InlineMath math="x(t)" /> and{" "}
        <InlineMath math="y(t)" /> are twice differentiable.
      </p>

      <p>
        That might sound complicated, but the best place to start is with
        something defined with sine and cosine. Here are the equations for the
        cycloid that we&apos;ll use throughout these steps, where{" "}
        <InlineMath math="a" /> and <InlineMath math="b" /> are constants.
      </p>

      <BlockMath
        math="x(t) = at-b\sin(t) \\ y(t) =
      a-b\cos(t)"
      />

      <p>
        This set of parametric equations will be referred to as{" "}
        <InlineMath math="s" /> or <InlineMath math="s(t)" /> during this
        tutorial. For the time being, we&apos;ll use <InlineMath math="a=0.5" />{" "}
        and <InlineMath math="b=1.5" />. Give yourself a second to get familiar
        with this graph, and then move on to the next step.
      </p>

      <Button asChild className="mt-8 w-full" variant="secondary">
        <Link href="/tutorial/step-2">Next Step</Link>
      </Button>
    </LessonLayout>
  );
}
