"use client";

import { Coordinates, Mafs, Plot } from "mafs";
import { useEffect, useRef, useState } from "react";
import { cycloid } from "~/lib/curves";

export function Graph() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(500);

  const s = cycloid(0.5, 1.5);

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
          t={[-20 * Math.PI, 20 * Math.PI]}
          xy={(t) => [s[0](t), s[1](t)]}
          opacity={0.6}
        />
      </Mafs>
    </div>
  );
}
