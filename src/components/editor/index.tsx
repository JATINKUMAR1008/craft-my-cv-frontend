import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { ReportSidebar } from "./_components/sidebar";

export const Editor = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="min-w-[250px] max-w-[250px] border-r border-separate h-screen">
        <ReportSidebar />
      </div>
      <div className="w-full flex-1">
        <header className="px-4 py-2 flex justify-between">
          <div>
            <h3 className="text-sm font-semibold">Editor</h3>
            <p className="text-xs font-normal text-muted-foreground">
              Create your resume
            </p>
          </div>
          <div className="w-fit h-full mt-1">
            <Tabs value="editor" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="editor" className="w-full">
                  Editor
                </TabsTrigger>
                <TabsTrigger value="diff" className="w-full">
                  Diff
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={"outline"}>Save</Button>
            <Button variant={"outline"}>Reset</Button>
          </div>
        </header>
        <Separator />
        <main className="h-[calc(100vh-7rem)] flex">
          <div className=""></div>
          <div className="basis-1/2 w-full mx-auto h-full p-2">
            <div className="w-full h-full border"></div>
          </div>
        </main>
      </div>
    </div>
  );
};
