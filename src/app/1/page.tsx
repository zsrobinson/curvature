import { LessonLayout } from "~/components/lesson-layout";
import { Graph } from "./graph";

export default function Page() {
  return (
    <LessonLayout title="Step 1: Hello World" graph={<Graph />}>
      <p>content</p>
    </LessonLayout>
  );
}
