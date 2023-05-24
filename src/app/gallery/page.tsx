import {
  IconCurlyLoop,
  IconExternalLink,
  IconFlower,
  IconHeart,
  IconOvalVertical,
  IconWaveSine,
} from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <h2 className="text-3xl font-semibold">Gallery</h2>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        <GalleryCard
          title="Cycloid"
          href="/gallery/cycloid"
          icon={<IconCurlyLoop size={72} />}
        />
        <GalleryCard
          title="Oval"
          href="/gallery/oval"
          icon={<IconOvalVertical size={72} />}
        />
        <GalleryCard
          title="Polar Rose"
          href="/gallery/rose"
          icon={<IconFlower size={72} />}
        />
        <GalleryCard
          title="Slanted Sine Wave"
          href="/gallery/slanted-sine"
          icon={<IconWaveSine size={72} />}
        />
        <GalleryCard
          title="Heart"
          href="/gallery/heart"
          icon={<IconHeart size={72} />}
        />
        <GalleryCard
          title="Create Your Own"
          href="/playground"
          icon={<IconExternalLink size={72} />}
          playground
        />
      </div>
    </main>
  );
}

type GalleryCardProps = {
  title: string;
  href: string;
  icon?: ReactNode;
  playground?: boolean;
};

function GalleryCard({
  title,
  href,
  icon,
  playground = false,
}: GalleryCardProps) {
  return (
    <Link
      className={`flex h-56 w-72 flex-col items-center justify-center gap-4 rounded-xl border border-zinc-800 p-8 transition hover:scale-[1.02] lg:h-72 xl:w-96 ${
        playground
          ? "border-dashed bg-gradient-to-br from-zinc-900/30 to-transparent"
          : "bg-gradient-to-br from-zinc-900 to-zinc-900/50"
      }`}
      href={href}
    >
      <span className="text-2xl font-semibold">{title}</span>
      <span className={playground ? "text-zinc-600" : "text-zinc-500"}>
        {icon}
      </span>
    </Link>
  );
}
