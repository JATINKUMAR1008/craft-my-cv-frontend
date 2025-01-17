import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";


const items = [
  {
    title: "Job Search",
    url: "/documents/resumes",
  },
  {
    title: "Job Matching",
    url: "/documents/cover-letters",
  },
  {
    title: "References",
    url: "/documents/references",
  },
];

export const ToolBarSidebar = () => {
  return (
    <SidebarGroup>
        <SidebarGroupLabel>
            Other Tools
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
