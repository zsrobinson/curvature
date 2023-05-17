import { IconArrowRight } from "@tabler/icons-react";
import { HomepageButtons } from "~/components/homepage-buttons";
import { HomepageGraph } from "~/components/homepage-graph";
import "./page.css";

export default function Page() {
  return (
    <main className="absolute flex flex-col items-center justify-between">
      <section className="flex min-h-screen w-full flex-col justify-between border-b border-zinc-700 bg-gradient-to-br from-transparent to-zinc-900 pt-16 ">
        <div className="flex flex-col gap-2 p-12">
          <span className="text-center text-6xl font-bold tracking-tight">
            We all know curves are curvy.
          </span>
          <span className="text-center font-math text-3xl">
            ... but how curvy are they?
          </span>
          <HomepageButtons />
        </div>
        <HomepageGraph />
      </section>

      <section className="flex min-h-screen flex-col">
        <div className="flex grow flex-col items-center gap-8 p-8 md:mx-24 md:flex-row lg:mx-48">
          <div className="group rounded-xl border border-zinc-700 bg-zinc-900 p-4 transition hover:scale-[1.01]">
            <div className="mb-2 flex items-center gap-2">
              <h2 className="text-xl font-bold">Tutorial</h2>
              <IconArrowRight className="opacity-50 transition group-hover:translate-x-2 group-hover:opacity-100" />
            </div>
            <p className="text-zinc-300">
              We&apos;ll break down these complex mathematical concepts into
              easy-to-understand steps and guide you through the process of
              calculating the curvature of parametric equations. Our interactive
              tools will help to visualize these calculations, making it easier
              to understand the underlying math behind calculating curvature.
            </p>
          </div>

          <div className="group rounded-xl border border-zinc-700 bg-zinc-900 p-4 transition hover:scale-[1.01]">
            <div className="mb-2 flex items-center gap-2">
              <h2 className="text-xl font-bold">Examples</h2>
              <IconArrowRight className="opacity-50 transition group-hover:translate-x-2 group-hover:opacity-100" />
            </div>
            <p className="text-zinc-300">
              We&apos;ve put together a few examples of parametric equations and
              their curvatures for you to play around with. These range from
              curves as simple as a sine wave to more complex shapes like a
              heart. You can use these examples to get a better understanding of
              how to calculate curvature, and can even enter your own equations
              to visualize their curvatures.
            </p>
          </div>
        </div>

        <span className="p-4 text-center text-sm text-zinc-500">
          Created by{" "}
          <a
            href="https://zsrobinson.com"
            target="_blank"
            rel="noreferrer"
            className="underline transition hover:text-zinc-400"
          >
            Zachary Robinson
          </a>{" "}
          · Shared under the MIT License · View this project on{" "}
          <a
            href="https://github.com/zsrobinson/curvature"
            target="_blank"
            rel="noreferrer"
            className="underline transition hover:text-zinc-400"
          >
            GitHub
          </a>
        </span>
      </section>
    </main>
  );
}
