import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import { CirclePlusIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
const dummyDoc = {
  title: "Dummy Document",
  updatedAt: "2 Novemeber 2021, 12:00 PM",
  prevImg: "https://via.placeholder.com/150",
};

const docOptions = [
  {
    label: "Make a copy",
    icon: CopyIcon,
    action: () => {},
  },
  {
    label: "Export to DOCX",
    icon: CopyIcon,
    action: () => {},
  },
  {
    label: "Export to PDF",
    icon: CopyIcon,
    action: () => {},
  },
  {
    label: "Export to TXT",
    icon: CopyIcon,
    action: () => {},
  },
];
export const RecentDocuments = () => {
  const [selectedTab, setSelectedTab] = useState("resume");
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full">
        <div>
          <h3 className="text-lg font-semibold">Recent Documents</h3>
          <p className="text-sm font-normal text-muted-foreground">
            Previously used or created documents.
          </p>
        </div>
        {/* <Button>Create new</Button> */}
        <div className="w-full flex justify-between mt-5">
          <Tabs
            defaultValue="resume"
            onValueChange={setSelectedTab}
            className="w-[250px]"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="resume">Resumes</TabsTrigger>
              <TabsTrigger value="cover-letter">Cover Letters</TabsTrigger>
            </TabsList>
          </Tabs>
          <Link to="/create">
            <Button size={"lg"}>Create new</Button>
          </Link>
        </div>
      </div>
      <div className=" w-full mt-5">
        {selectedTab === "resume" ? <ResumeDocx /> : null}
      </div>
    </div>
  );
};

const OptionsList = () => {
  return (
    <div className="w-full h-full mt-3">
      <div className="w-full h-full flex flex-col items-start">
        {docOptions.map((option) => (
          <div className="w-full rounded-sm p-3 flex justify-start items-center hover:bg-muted hover:text-muted-foreground transition-colors duration-100 cursor-pointer">
            <option.icon size={20} />
            <p className="text-xs font-normal ml-2">{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ResumeDocx = () => {
  return (
    <div className="grid grid-cols-2 w-full items-center">
      <div className="flex items-start h-full gap-2">
        <div className="max-w-[250px] h-[300px] min-w-[250px] border rounded-md">
          <img
            src={dummyDoc.prevImg}
            alt="resume"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-between">
          <h3 className=" text-sm">{dummyDoc.title}</h3>
          <p className="text-xs font-thin text-muted-foreground">
            {dummyDoc.updatedAt}
          </p>
          <OptionsList />
        </div>
      </div>
      <div className="md:flex hidden items-start h-full gap-2">
        <div className="max-w-[250px] h-[300px] min-w-[250px] border rounded-md flex flex-col items-center justify-center">
          <CirclePlusIcon size={30} />
          <p className="text-sm font-semibold">Create new</p>
        </div>
        <div className="flex flex-col items-start justify-between text-muted-foreground max-w-[250px]">
          <h3 className=" text-sm">New Resume</h3>
          <p className="text-xs font-thin text-muted-foreground">
            Create a tailored resume for each job application. Double your
            chances of getting hired!
          </p>
        </div>
      </div>
    </div>
  );
};
