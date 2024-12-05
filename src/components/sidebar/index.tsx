import React from "react";
import { Separator } from "../ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import {
  BookDashedIcon,
  ChevronsUpDown,
  CreditCard,
  FileUser,
  LayoutDashboard,
  LogOut,
  Mail,
  Settings,
  StickyNote,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Dropdown } from "react-day-picker";

export const Sidebar = () => {
  return (
    <div className="flex-1 border max-w-[250px] h-screen min-w-[250px] border-r border-separate relative">
      <div className="w-full h-fit flex flex-col">
        <h1 className="w-full text-center text-2xl font-semibold py-2">
          CraftMyCV
        </h1>
        <Separator />
        <NavOptions />
      </div>
      <div className="h-fit p-4 border-t border-separate border absolute bottom-0 w-full">
        <UserButton />
      </div>
    </div>
  );
};

const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="border justify-between w-full px-2 "
        >
          <div className="flex items-center">
            <Avatar className="size-6">
              <AvatarFallback>u</AvatarFallback>
            </Avatar>
            <span className="ml-2">User</span>
          </div>
          <ChevronsUpDown size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LogOut />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const NavOptions = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="py-2">
      <div className="flex items-center justify-between  space-x-4 px-4">
        <div className="flex items-center gap-2">
          <LayoutDashboard size={24} />
          <h4 className="text-sm font-semibold">Dashboard</h4>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant={"ghost"} size={"sm"} className="w-9 p-0">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2 px-4 flex w-full h-full relative">
        <Separator orientation="vertical" className="absolute" />
        <div className="space-y-2 ml-2">
          <Button
            variant={"ghost"}
            size={"sm"}
            className="w-full justify-start gap-2"
          >
            <StickyNote size={16} />
            Resumes
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="w-full justify-start gap-2"
          >
            <Mail size={16} />
            Cover Letters
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="w-full justify-start gap-2"
          >
            <FileUser size={16} />
            Job Applications
          </Button>
        </div>
      </CollapsibleContent>
      <Separator className="mt-2" />
    </Collapsible>
  );
};
