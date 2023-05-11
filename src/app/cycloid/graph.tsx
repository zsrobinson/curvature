"use client";

import { Coordinates, Mafs, Plot, Point, Vector, useStopwatch } from "mafs";
import { useEffect } from "react";

export function Graph() {
  const { time: t, start, stop } = useStopwatch({});

  useEffect(() => start(), [start]);

  useEffect(() => {
    if (t > 4 * Math.PI) {
      stop();
      start();
    }
  });

  const a = 0.5;
  const b = 1.5;

  // Prolate Cycloid
  const x = (t: number) => a * t - b * Math.sin(t);
  const y = (t: number) => a - b * Math.cos(t);

  // Derivatives
  const dx = (t: number) => a - b * Math.cos(t); // or deriv(x)
  const dy = (t: number) => b * Math.sin(t); // or deriv(y)

  // Tip of the vector
  const vectorTipX = x(t) + dx(t) * 0.75;
  const vectorTipY = y(t) + dy(t) * 0.75;

  return (
    <Mafs height={788} viewBox={{ x: [-1, 7], y: [-5, 5] }} zoom>
      <Coordinates.Cartesian />
      <Plot.Parametric
        t={[-10 * Math.PI, 10 * Math.PI]}
        xy={(t) => [x(t), y(t)]}
        opacity={0.6}
      />
      <Vector tail={[x(t), y(t)]} tip={[vectorTipX, vectorTipY]} />
      <Point x={x(t)} y={y(t)} />
    </Mafs>
  );
}

type func = (x: number) => number;
function deriv(f: func, delta = 1e-5): func {
  return function (x) {
    return (f(x + delta) - f(x)) / delta;
  };
}
