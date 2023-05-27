import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges CSS class names using `tailwind-merge` and `clsx`.
 * @param {...ClassValue} inputs - The CSS class names to merge.
 * @returns {string} The merged CSS class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type func = (t: number) => number;

/**
 * Returns the derivative of a function.
 * @param {func} f - The function to differentiate.
 * @param {number} [delta=1e-5] - The step size for the numerical differentiation.
 * @returns {func} The derivative of the input function.
 */
export function deriv(f: func, delta = 1e-5): func {
  return function (t) {
    return (f(t + delta) - f(t)) / delta;
  };
}

/**
 * Returns the magnitude of a vector function.
 * @param {func[]} v - The vector function to calculate the magnitude of.
 * @returns {func} The magnitude of the input vector function.
 */
export function mag(v: func[]): func {
  return (t) => Math.sqrt(v[0](t) ** 2 + v[1](t) ** 2);
}

/**
 * An easing function that uses the sine function to create a smooth transition.
 * @param {number} x - The input value to ease.
 * @returns {number} The eased output value.
 */
export function easeInOutSine(x: number): number {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}