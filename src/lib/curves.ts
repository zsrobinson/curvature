"use client";

type func = (t: number) => number;

/**
 * The parametric equation for a curve that sort of looks like a curvy sawtooth (it's just a sin wave but slated)
 * @param a controls ?
 * @param b controls ?
 */
export function slatedSin(a: number, b: number): func[] {
  return [(t: number) => a * t - b * Math.sin(t), (t: number) => Math.sin(t)];
}

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
 * The parametric equation for an oval
 * @param a controls the width
 * @param b controls the height
 */
export function oval(a: number, b: number): func[] {
  return [(t: number) => a * Math.cos(t), (t: number) => b * Math.sin(t)];
}
