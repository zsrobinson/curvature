"use client";

type func = (t: number) => number;

/**
 * The parametric equation for a cycloid
 * @param a controls ?
 * @param b controls ?
 */
export function cycloid(a: number, b: number): func[] {
  return [
    (t: number) => a * t - b * Math.sin(t),
    (t: number) => a - b * Math.cos(t),
  ];
}

/**
 * The parametric equation for a curve that sort of looks like a curvy sawtooth (it's just a sin wave but slated)
 * @param a controls ?
 * @param b controls ?
 */
export function slatedSin(a: number, b: number): func[] {
  return [(t: number) => a * t - b * Math.sin(t), (t: number) => Math.sin(t)];
}

/**
 * The parametric equation for a polar rose
 * @param a controls ?
 * @param k controls ?
 */

export function rose(a: number, k: number): func[] {
  return [
    (t: number) => a * Math.cos(k * t) * Math.cos(t),
    (t: number) => a * Math.cos(k * t) * Math.sin(t),
  ];
}

/**
 * The parametric equation for an oval
 * @param a controls the width
 * @param b controls the height
 */
export function oval(a: number, b: number): func[] {
  return [(t: number) => a * Math.cos(t), (t: number) => b * Math.sin(t)];
}

/**
 * The parametric equation for a heart
 * @param a controls the scale
 * @param b controls the height
 */
export function heart(a: number): func[] {
  return [
    (t: number) => a * 16 * Math.sin(t) ** 3,
    (t: number) =>
      a *
      (13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t)),
  ];
}
