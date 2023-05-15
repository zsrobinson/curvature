"use client";

import { IconBrandGithub, IconRotate360 } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const path = usePathname();
  return (
    <div className="flex flex-wrap items-center justify-between gap-1 border-b border-zinc-800 bg-zinc-900 p-4 md:px-8">
      <Link href="/" className="flex items-center gap-2">
        <IconRotate360 />
        <h1 className="text-xl font-bold">Curvature Project</h1>
      </Link>

      <div className="flex gap-4">
        <Link
          href="/cycloid"
          className={
            path.includes("cycloid")
              ? "font-bold underline underline-offset-4"
              : "text-zinc-400"
          }
        >
          Cycloid
        </Link>

        <Link
          href="/oval"
          className={
            path.includes("oval")
              ? "font-bold underline underline-offset-4"
              : "text-zinc-400"
          }
        >
          Oval
        </Link>

        <Link
          href="/rose"
          className={
            path.includes("rose")
              ? "font-bold underline underline-offset-4"
              : "text-zinc-400"
          }
        >
          Rose
        </Link>

        <Link
          href="/slanted-sin"
          className={
            path.includes("slanted-sin")
              ? "font-bold underline underline-offset-4"
              : "text-zinc-400"
          }
        >
          Slanted Sin
        </Link>

        <Link
          href="/heart"
          className={
            path.includes("heart")
              ? "font-bold underline underline-offset-4"
              : "text-zinc-400"
          }
        >
          Heart
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
