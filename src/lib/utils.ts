export type func = (t: number) => number;

export function deriv(f: func, delta = 1e-5): func {
  return function (t) {
    return (f(t + delta) - f(t)) / delta;
  };
}

export function mag(v: func[]): func {
  return (t) => Math.sqrt(v[0](t) ** 2 + v[1](t) ** 2);
}
