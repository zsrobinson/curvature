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
    <div className="flex grow">
      <div className="h-full w-1/3 border-r border-zinc-800 bg-zinc-900/50 p-8">
        <h2 className="pb-2 text-3xl font-bold tracking-tight">{title}</h2>
        {children}
      </div>
      <div className="h-full grow">{graph}</div>
    </div>
  );
}
