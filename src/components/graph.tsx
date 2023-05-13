"use client";

import { Coordinates, Mafs, Plot, Point, useStopwatch } from "mafs";
import { func } from "~/lib/utils";
import { Curvature } from "./curvature";
import { useEffect } from "react";

export function Graph({ s }: { s: func[] }) {
  const { time: t, start, stop } = useStopwatch({});
  useEffect(() => start(), [start]);

  useEffect(() => {
    if (t > 4 * Math.PI) {
      stop();
      start();
    }
  });

  return (
    <Mafs height={788} viewBox={{ x: [-1, 7], y: [-5, 5] }} zoom>
      <Coordinates.Cartesian />
      <Plot.Parametric
        t={[-10 * Math.PI, 10 * Math.PI]}
        xy={(t) => [s[0](t), s[1](t)]}
        opacity={0.6}
      />
      <Curvature s={s} t={t} showPoint showTangent />
      <Point x={s[0](t)} y={s[1](t)} />
    </Mafs>
  );
}
