import { LessonLayout } from "~/components/lesson-layout";
import { Graph } from "./graph";
import { BlockMath, InlineMath } from "react-katex";

export default function Page() {
  return (
    <LessonLayout title="Prolate Cycloid" graph={<Graph />}>
      <p>This curve is defined by the following parametric equations:</p>
      <BlockMath math="x(t) = at-b\sin(t) \\ y(t) = a-b\cos(t)" />
      <p>
        In this example, <InlineMath math="a=0.5" /> and{" "}
        <InlineMath math="b=1.5" />.
      </p>
    </LessonLayout>
  );
}
