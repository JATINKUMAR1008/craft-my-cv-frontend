import {
  Command,
  LayoutDashboardIcon,
  NetworkIcon,
  TrainIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  SidebarContent,
  SidebarFooter,
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { DocumentsSidebar } from "./documents-sidebar";
import { ToolBarSidebar } from "./tools-sidebar";
import { NavUser } from "../sidebar/nav-user";
import { useAuth } from "@/hooks/useAuth";

export const SidebarV2 = () => {
  const { user } = useAuth();
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Craft MY CV</span>
                  <span className="truncate text-xs">Premium</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={"lg"}
              className="flex items-center justify-start gap-2"
            >
              <LayoutDashboardIcon className="size-4" />
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={"lg"}
              className="flex items-center justify-start gap-2"
            >
              <NetworkIcon className="size-4" />
              Jobs
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={"lg"}
              className="flex items-center justify-start gap-2"
            >
              <TrainIcon className="size-4" />
              Job Tracker
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <DocumentsSidebar />
        <ToolBarSidebar />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user.first_name + " " + user.last_name,
            email: user.email,
            avatar: undefined!,
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
};
