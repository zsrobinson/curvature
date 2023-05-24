"use client";

import {
  Circle,
  Coordinates,
  Line,
  Mafs,
  Plot,
  Point,
  Text,
  useStopwatch,
  vec,
} from "mafs";
import { useEffect, useRef, useState } from "react";
import { InlineMath } from "react-katex";
import { takeCoverage } from "v8";
import { Curvature } from "~/components/curvature";
import { cycloid } from "~/lib/curves";
import { deriv, func, mag } from "~/lib/utils";

export function Graph() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(500);

  const s = cycloid(0.5, 1.5);

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

  const evalVec = (v: func[]): vec.Vector2 => [v[0](t), v[1](t)];
  const dsdt = [deriv(s[0]), deriv(s[1])];
  const T = [
    (t: number) => dsdt[0](t) / mag(dsdt)(t),
    (t: number) => dsdt[1](t) / mag(dsdt)(t),
  ];
  const dTdt = [deriv(T[0]), deriv(T[1])];
  const dTds = [
    (t: number) => dTdt[0](t) / mag(dsdt)(t),
    (t: number) => dTdt[1](t) / mag(dsdt)(t),
  ];
  const k = mag(dTds);
  const R = 1 / k(t);
  const circle = vec.add(evalVec(s), vec.withMag(evalVec(dTds), R));
  const halfway = vec.add(evalVec(s), vec.withMag(evalVec(dTds), R * 0.5));

  return (
    <div className="overflow-none relative h-full grow" ref={parentRef}>
      <Mafs height={height} viewBox={{ x: [-1, 7], y: [-5, 5] }} zoom>
        <Coordinates.Cartesian />
        <Plot.Parametric
          t={[-20 * Math.PI, 20 * Math.PI]}
          xy={(t) => [s[0](t), s[1](t)]}
          opacity={0.6}
        />
        <Line.Segment
          point1={[s[0](t), s[1](t)]}
          point2={circle}
          color="SkyBlue"
        />
        <Circle center={circle} radius={R} color="SkyBlue" />
        <Point x={s[0](t)} y={s[1](t)} />
        <Point x={circle[0]} y={circle[1]} color="SkyBlue" />
        <Text x={halfway[0]} y={halfway[1]}>
          R
        </Text>
      </Mafs>
      <p className="absolute bottom-0 left-0 flex flex-col p-4 font-math text-lg">
        <InlineMath math={`t = ${t.toFixed(3)}`} />
        <InlineMath math={`\\kappa = ${k(t).toFixed(3)}`} />
        <InlineMath math={`R = ${R.toFixed(3)}`} />
      </p>
    </div>
  );
}
