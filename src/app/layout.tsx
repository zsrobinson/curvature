import "./globals.css";
import { Navbar } from "./navbar";

export const metadata = { title: "Concepts in Curvature" };

import "mafs/core.css";
import "mafs/font.css";
import "katex/dist/katex.min.css";

type LayoutProps = { children: React.ReactNode };
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className="dark flex h-screen flex-col bg-zinc-950 text-zinc-50"
        style={{ colorScheme: "dark" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
