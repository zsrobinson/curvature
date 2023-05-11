import "./globals.css";
import { Navbar } from "./navbar";

export const metadata = { title: "Curvature Project" };

type LayoutProps = { children: React.ReactNode };
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col bg-zinc-950 text-zinc-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
