"use client";

import { Coordinates, Mafs, Plot, Point, useStopwatch } from "mafs";
import { useEffect, useRef, useState } from "react";
import { Curvature } from "~/components/curvature";
import { func } from "~/lib/utils";

type GraphProps = {
  s: func[];
  graphRange: [number, number];
  circleRange: [number, number];
};

export function Graph({ s, graphRange, circleRange }: GraphProps) {
  const parentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(500);
  const { time: t, start, stop } = useStopwatch({});
  useEffect(() => start(), [start]);

  useEffect(() => {
    if (t > circleRange[1] - circleRange[0]) {
      stop();
      start();
    }
  });

  useEffect(() => {
    const handleResize = () =>
      setHeight(parentRef.current?.clientHeight ?? 500);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-none h-full grow" ref={parentRef}>
      <Mafs height={height} viewBox={{ x: [-1, 7], y: [-5, 5] }} zoom>
        <Coordinates.Cartesian />
        <Plot.Parametric
          t={graphRange}
          xy={(t) => [s[0](t), s[1](t)]}
          opacity={0.6}
        />
        <Curvature s={s} t={t + circleRange[0]} showPoint showTangent />
        <Point x={s[0](t + circleRange[0])} y={s[1](t + circleRange[0])} />
      </Mafs>
    </div>
  );
}
