import { BreadcrumbHeader } from "@/components/breadcrumbHeader";
import { SidebarV2 } from "@/components/sidebar_v2/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { createFileRoute, Outlet, useRouter } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard_v2/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  const {user} = useAuth()
  const path = useRouter().state.location.pathname.split("/");
  return (
    <SidebarProvider>
      <SidebarV2 />
      <SidebarInset className="border max-w-full">
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbHeader path={path} />
          </div>
        </header>
        <main className="w-full h-full px-10 py-10">
          {/* <div className="w-full flex ">
              <div>
                <h3 className="text-xl font-semibold">
                  Hi, {user.first_name + " " + user.last_name}
                </h3>
                <p className="text-md font-normal text-muted-foreground">
                  Welcome Back!, get ready for some roles.
                </p>
              </div>
          </div>
          <div className="w-full h-full">

          </div> */}
          <Outlet/>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
