import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


export const RecentSlider = () => {
  return (
    <div className="w-full h-full">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Recent Resumes</h1>
      </header>
      <main className="mt-3">
        <ScrollArea className="whitespace-nowrap">
          <div className="flex w-max space-x-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ResumeCard key={item} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </main>
    </div>
  );
};

const ResumeCard = () => {
  return (
    <div className="size-[300px] flex flex-col space-y-2">
      <div className="bg-accent w-full h-[200px]"></div>
      <div className="p-1 flex items-center justify-between">
        <div className="flex flex-col basis-2/3">
          <h3 className="text-md font-semibold">Resume</h3>
          <p className="text-muted-foreground text-sm">
            created at: 12 Aug 2024
          </p>
        </div>
        <div className="basis-1/3 w-full flex justify-end">
          <Badge>60%</Badge>
        </div>
      </div>
    </div>
  );
};
