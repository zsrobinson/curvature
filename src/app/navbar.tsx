"use client";

import { IconBrandGithub, IconRotate360 } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const path = usePathname();
  return (
    <div className="z-10 flex flex-wrap items-center justify-between gap-1 border-b border-zinc-800 bg-zinc-900 p-4 md:px-8">
      <Link href="/" className="flex items-center gap-2">
        <IconRotate360 />
        <h1 className="text-xl font-bold">Curvature Project</h1>
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href="/tutorial/step-1"
          className={
            path.includes("tutorial")
              ? "rounded-md bg-zinc-800 px-2 py-0.5 font-semibold"
              : "text-zinc-400"
          }
        >
          Tutorial
        </Link>

        <Link
          href="/gallery"
          className={
            path.includes("gallery")
              ? "rounded-md bg-zinc-800 px-2 py-0.5 font-semibold"
              : "text-zinc-400"
          }
        >
          Gallery
        </Link>

        <Link
          href="/playground"
          className={
            path.includes("playground")
              ? "rounded-md bg-zinc-800 px-2 py-0.5 font-semibold"
              : "text-zinc-400"
          }
        >
          Playground
        </Link>
      </div>

      <a
        href="https://github.com/zsrobinson/curvature"
        target="_blank"
        rel="noreferrer"
      >
        <IconBrandGithub />
      </a>
    </div>
  );
}
