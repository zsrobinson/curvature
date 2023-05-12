"use client";

import {
  Circle,
  Coordinates,
  Mafs,
  Plot,
  Point,
  Vector,
  useStopwatch,
  vec,
} from "mafs";
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

  /** Evaluates a "vector function" at time t */
  const evalVec = (v: func[]): vec.Vector2 => [v[0](t), v[1](t)];

  /** `ds/dt`: change in position with respect to time */
  const dsdt = [deriv(s[0]), deriv(s[1])];

  /** `T(t)` Unit Tangent Vector */
  const T = [
    (t: number) => dsdt[0](t) / mag(dsdt)(t),
    (t: number) => dsdt[1](t) / mag(dsdt)(t),
  ];

  /** `dT/dt`: change in unit tangent vector with respect to time */
  const dTdt = [deriv(T[0]), deriv(T[1])];

  /** `dT/ds`: change in unit tangent vector with respect to the curve */
  const dTds = [
    (t: number) => dTdt[0](t) / mag(dsdt)(t),
    (t: number) => dTdt[1](t) / mag(dsdt)(t),
  ];

  const k = mag(dTds);
  const R = 1 / k(t);
  const circleCenter = vec.add(evalVec(s), vec.withMag(evalVec(dTdt), R));

  return (
    <Mafs height={788} viewBox={{ x: [-1, 7], y: [-5, 5] }} zoom>
      <Coordinates.Cartesian />
      <Plot.Parametric
        t={[-10 * Math.PI, 10 * Math.PI]}
        xy={(t) => [s[0](t), s[1](t)]}
        opacity={0.6}
      />

      <Circle center={circleCenter} radius={R} color="SkyBlue" />
      <Point x={circleCenter[0]} y={circleCenter[1]} color="SkyBlue" />
      <Vector tip={vec.add(evalVec(dsdt), evalVec(s))} tail={evalVec(s)} />
      {/* <Vector tip={vec.add(evalVec(T), evalVec(s))} tail={evalVec(s)} /> */}
      {/* <Vector tip={vec.add(evalVec(dTds), evalVec(s))} tail={evalVec(s)} /> */}
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
