"use client";

import { Coordinates, Mafs } from "mafs";

export function Graph() {
  return (
    <Mafs height={788} viewBox={{ x: [-5, 5], y: [-5, 5] }}>
      <Coordinates.Cartesian />
    </Mafs>
  );
}
