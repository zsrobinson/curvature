"use client";

import { Circle, Point, Vector, vec } from "mafs";
import { deriv, func, mag } from "~/lib/utils";

type CurvatureProps = {
  s: func[];
  t: number;
  showPoint?: boolean;
  showTangent?: boolean;
  strokeOpacity?: number;
  fillOpacity?: number;
};

export function Curvature({
  s,
  t,
  showPoint = false,
  showTangent = false,
  strokeOpacity = 1,
  fillOpacity = 0.15,
}: CurvatureProps) {
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
  const circle = vec.add(evalVec(s), vec.withMag(evalVec(dTds), R));

  if (isNaN(circle[0]) || isNaN(circle[1])) return null;

  return (
    <>
      <Circle
        center={circle}
        radius={R}
        color="SkyBlue"
        strokeOpacity={strokeOpacity}
        fillOpacity={fillOpacity}
      />
      {showPoint && (
        <Point
          x={circle[0]}
          y={circle[1]}
          color="SkyBlue"
          opacity={strokeOpacity}
        />
      )}
      {showTangent && (
        <Vector tail={evalVec(s)} tip={vec.add(evalVec(s), evalVec(dsdt))} />
      )}
    </>
  );
}
