import { Upload } from "lucide-react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";

export default function GettingStarted() {
  return (
    <div className="w-screen h-screen border p-4">
      <div className="w-full max-w-[300px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-[1440px]  mx-auto h-full">
        <header className="">
          <h3 className="text-xl font-semibold">Getting Strated</h3>
          <p className="text-sm font-normal text-muted-foreground">
            Get started with giving answers to some simple questions
          </p>
        </header>
        <main className="mt-5  mx-auto h-[calc(100%-5rem)] flex">
          <div className="flex flex-col w-full gap-4">
            <div className="my-2 flex flex-col w-full space-y-1">
              <Label className="text-muted-foreground ml-1">
                Latest Resume
              </Label>
              <div className="border border-dashed w-full h-[300px] rounded-md text-muted-foreground flex flex-col items-center justify-center">
                <Upload size={32} />
                <p className="text-xs font-semibold ">
                  Drag and drop your resume here
                </p>
                <p className="text-xs font-thin">
                  not more than 5MB (.pdf, .docx)
                </p>
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground ml-1">
                Career Aspirations
              </Label>
              <Textarea
                className="w-full resize-none "
                placeholder="Your answer here"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground ml-1">More Info</Label>
              <Textarea
                className="w-full resize-none "
                placeholder="Your answer here"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground ml-1">
                Job Description
              </Label>
              <Textarea
                className="w-full resize-none "
                placeholder="Your answer here"
              />
            </div>
            <Button className="w-full">Submit</Button>
          </div>
        </main>
      </div>
    </div>
  );
}
