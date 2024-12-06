import { Upload } from "lucide-react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Link } from "@tanstack/react-router";

export default function GettingStarted() {
  return (
    <div className="w-screen h-screen p-4 flex flex-col items-center justify-center">
      <div className="flex w-full max-w-[300px] border border-b-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-[1440px] mx-auto justify-start">
        <Link href="/dashboard">
          <Button variant={"link"}>Back</Button>
        </Link>
      </div>
      <div className="w-full max-w-[300px] border sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-[1440px] mx-auto">
        <header className="p-4">
          <h3 className="text-xl font-semibold">Getting Strated</h3>
          <p className="text-sm font-normal text-muted-foreground">
            Get started with giving answers to some simple questions
          </p>
        </header>
        <Separator />
        <main className="">
          <div className="grid md:grid-cols-2 grid-cols-1 divide-y md:divide-x">
            <div className="w-full h-full">
              <header className="p-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
              </header>
              <Separator />
              <PIForm />
            </div>
            <div className="w-full h-full">
              <header className="p-4">
                <h3 className="text-lg font-semibold">Job Information</h3>
              </header>
              <Separator />
              <JIForm />
            </div>
          </div>
          <Separator />
          <footer className="p-4">
            <Button variant={"outline"} className="w-full">
              Submit
            </Button>
          </footer>
        </main>
      </div>
    </div>
  );
}

const PIForm = () => {
  return (
    <form className="w-full h-fit p-2 space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label htmlFor="Fname" className="text-muted-foreground ml-1">
            First Name
          </Label>
          <Input id="Fname" placeholder="Enter your First name" />
        </div>
        <div>
          <Label htmlFor="Lname" className="text-muted-foreground ml-1">
            Email
          </Label>
          <Input id="Lname" placeholder="Enter your Last name" />
        </div>
      </div>
      <div className="w-full h-[250px]">
        <Label htmlFor="resume" className="text-muted-foreground ml-1">
          Resume
        </Label>
        <div className="w-full mx-auto h-full max-h-[300px] border border-dotted flex flex-col items-center justify-center">
          <Upload size={30} />
          <p className="text-muted-foreground text-sm font-normal">
            Drag and drop your resume here
          </p>
        </div>
      </div>
      <div className="w-full py-4">
        <Label htmlFor="career" className="text-muted-foreground ml-1">
          Career Objective
        </Label>
        <Textarea id="career" placeholder="Enter your Career Objective" />
      </div>
    </form>
  );
};
const JIForm = () => {
  return (
    <form className="w-full h-fit p-2 space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label htmlFor="Fname" className="text-muted-foreground ml-1">
            Company Name
          </Label>
          <Input id="Fname" placeholder="Enter Company's name" />
        </div>
        <div>
          <Label htmlFor="Lname" className="text-muted-foreground ml-1">
            Position
          </Label>
          <Input id="Lname" placeholder="Enter position your are appying for" />
        </div>
      </div>
      <div className="w-full h-[250px]">
        <Label htmlFor="resume" className="text-muted-foreground ml-1">
          Job Description
        </Label>
        <div className="w-full mx-auto h-full max-h-[300px] border border-dotted flex flex-col items-center justify-center">
          <Upload size={30} />
          <p className="text-muted-foreground text-sm font-normal">
            Drag and drop job description here
          </p>
        </div>
      </div>
      <div className="w-full py-4">
        <Label htmlFor="career" className="text-muted-foreground ml-1">
          More Information
        </Label>
        <Textarea
          id="career"
          placeholder="Mention any other information you like to give us"
        />
      </div>
    </form>
  );
};
