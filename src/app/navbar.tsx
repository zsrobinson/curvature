import { IconBrandGithub, IconRotate360 } from "@tabler/icons-react";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-8 py-4">
      <Link href="/" className="flex items-center gap-2">
        <IconRotate360 />
        <h1 className="text-xl font-bold">Curvature Project</h1>
      </Link>

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
