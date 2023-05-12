export function LessonLayout({
  children,
  title,
  graph,
}: {
  title: string;
  children: React.ReactNode;
  graph: React.ReactNode;
}) {
  return (
    <div className="flex grow flex-col md:flex-row">
      <div className="border-b border-zinc-800 bg-zinc-900/50 p-4 md:h-full md:w-1/3 md:border-r md:p-8">
        <h2 className="pb-2 text-3xl font-bold tracking-tight">{title}</h2>
        {children}
      </div>
      <div className="h-full grow overflow-hidden md:overflow-auto">
        {graph}
      </div>
    </div>
  );
}
