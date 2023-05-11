"use client";

import { Circle, Coordinates, Mafs, Plot, Point, useStopwatch } from "mafs";
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

  const a = 1;
  const b = 1.5;

  const dsdt = [deriv(s[0]), deriv(s[1])];

  /** T(t) Unit Tangent Vector */
  const T = [
    (t: number) => dsdt[0](t) / mag(dsdt)(t),
    (t: number) => dsdt[1](t) / mag(dsdt)(t),
  ];

  /** dT/dt */
  const dTdt = [deriv(T[0]), deriv(T[1])];

  /** dT/ds */
  const dTds = [
    (t: number) => dTdt[0](t) / mag(dsdt)(t),
    (t: number) => dTdt[1](t) / mag(dsdt)(t),
  ];

  const k = mag(dTds);
  const R = 1 / k(t);

  const m = dsdt[1](t) / dsdt[0](t);

  // idk dean and alexsey are smart
  const circleCenterX = s[0](t) + R * m * Math.sqrt(1 / (m ** 2 + 1));
  const circleCenterXNeg = s[0](t) - R * m * Math.sqrt(1 / (m ** 2 + 1));
  const circleCenterY = s[1](t) + R * Math.sqrt(1 / (m ** 2 + 1));
  const circleCenterYNeg = s[1](t) - R * Math.sqrt(1 / (m ** 2 + 1));

  return (
    <Mafs height={788} viewBox={{ x: [-1, 7], y: [-5, 5] }} zoom>
      <Coordinates.Cartesian />
      <Plot.Parametric
        t={[-10 * Math.PI, 10 * Math.PI]}
        xy={(t) => [s[0](t), s[1](t)]}
        opacity={0.6}
      />

      {dTds[1](t) > 0 ? (
        <Circle
          center={[circleCenterXNeg, circleCenterY]}
          radius={R}
          color="SkyBlue"
        />
      ) : (
        <Circle
          center={[circleCenterX, circleCenterYNeg]}
          radius={R}
          color="SkyBlue"
        />
      )}

      <Point x={s[0](t)} y={s[1](t)} />
    </Mafs>
  );
}

type func = (t: number) => number;
function deriv(f: func, delta = 1e-5): func {
  return function (t) {
    return (f(t + delta) - f(t)) / delta;
  };
}

function mag(v: func[]): func {
  return (t) => Math.sqrt(v[0](t) ** 2 + v[1](t) ** 2);
}
