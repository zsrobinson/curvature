import { HomepageButtons } from "~/components/homepage-buttons";
import { HomepageGraph } from "~/components/homepage-graph";
import "./page.css";

export default function Page() {
  return (
    <main className="absolute flex w-full flex-col items-center justify-between min-h-screen">
      <section className="flex w-full flex-col justify-between border-b border-zinc-800 bg-gradient-to-br from-transparent to-zinc-900 pt-16 ">
        <div className="flex flex-col gap-2 p-12">
          <span className="text-center text-6xl font-bold tracking-tight">
            We all know curves are curvy.
          </span>
          <span className="text-center font-math text-3xl">
            ... but how curvy are they?
          </span>
          <HomepageButtons />
        </div>

        <div style={{ height: "10vh" }}></div>

        <HomepageGraph />
      </section>

      <span className="p-4 pb-8 text-center text-sm text-zinc-500">
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
        </a>{" "}
        to learn more
      </span>
    </main>
  );
}
