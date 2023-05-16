"use client";

import { Mafs, Plot, Text, useStopwatch } from "mafs";
import { useEffect, useRef } from "react";
import { cycloid } from "~/lib/curves";
import { easeInOutSine } from "~/lib/utils";
import { Curvature } from "./curvature";

export function HomepageGraph() {
  const s = cycloid(1, 3);
  const parentRef = useRef<HTMLDivElement>(null);

  const { time, start } = useStopwatch();
  useEffect(() => start(), [start]);

  const easedTimeCurve = easeInOutSine(time * 0.15);
  const lowerBound = -3 * Math.PI;
  const upperBound =
    time < 1 / 0.15
      ? lowerBound + 6 * Math.PI * easedTimeCurve
      : lowerBound + 6 * Math.PI;
  const circleTime = lowerBound + 6 * Math.PI * easedTimeCurve;
  const opacityMultiplier = time < 1 / 0.15 ? easedTimeCurve : 1;

  return (
    <div className="flex w-full" ref={parentRef}>
      <Mafs pan={false} width="auto" viewBox={{ x: [-9, 9], y: [-5, 4] }}>
        <Plot.Parametric
          xy={(t) => [s[0](t), s[1](t)]}
          t={[lowerBound, upperBound]}
          opacity={0.5}
        />
        <Curvature
          s={s}
          t={circleTime}
          strokeOpacity={0.5 * opacityMultiplier}
          fillOpacity={0.1 * opacityMultiplier}
        />
      </Mafs>
    </div>
  );
}
