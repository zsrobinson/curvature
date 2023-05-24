"use client";

import { Coordinates, Mafs, Plot, Point, useStopwatch } from "mafs";
import { useEffect, useRef, useState } from "react";
import { func } from "~/lib/utils";
import { Curvature } from "./curvature";

export function Graph({ s }: { s: func[] }) {
  const parentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(500);
  const { time: t, start, stop } = useStopwatch({});
  useEffect(() => start(), [start]);

  useEffect(() => {
    if (t > 4 * Math.PI) {
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
          t={[-10 * Math.PI, 10 * Math.PI]}
          xy={(t) => [s[0](t), s[1](t)]}
          opacity={0.6}
        />
        <Curvature s={s} t={t} showPoint showTangent />
        <Point x={s[0](t)} y={s[1](t)} />
      </Mafs>
    </div>
  );
}
