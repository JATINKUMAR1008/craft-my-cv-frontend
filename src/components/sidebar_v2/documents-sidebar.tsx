import { url } from "inspector";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronRight, PaperclipIcon } from "lucide-react";

const items = [
  {
    title: "Resumes",
    url: "/documents/resumes",
  },
  {
    title: "Cover Letters",
    url: "/documents/cover-letters",
  },
  {
    title: "References",
    url: "/documents/references",
  },
];

export const DocumentsSidebar = () => {
  return (
    <SidebarGroup>
        <SidebarGroupLabel>
            Documents
        </SidebarGroupLabel>
        <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <a href={item.url}>
                            <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    </SidebarGroup>
  );
};
