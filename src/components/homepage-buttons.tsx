"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { Button, ButtonProps } from "./ui/button";

export function HomepageButtons() {
  return (
    <div className="flex justify-center gap-4 pt-4">
      <HomepageButton variant="default" text="Tutorial" href="/tutorial" />
      <HomepageButton
        variant="secondary"
        text="Examples"
        href="/examples/cycloid"
      />
      <HomepageButton
        variant="secondary"
        text="Playground"
        href="/playground"
      />
    </div>
  );
}

type HomepageButtonProps = {
  variant: ButtonProps["variant"];
  text: string;
  href: string;
};

function HomepageButton({ variant, text, href }: HomepageButtonProps) {
  return (
    <Button variant={variant} asChild>
      <Link href={href} className="group">
        {text}
        <IconArrowRight
          className="ml-2 transition group-hover:translate-x-1"
          size={16}
        />
      </Link>
    </Button>
  );
}
