import { getUser } from "@/functions/auth/user";

import { createFileRoute, Outlet } from "@tanstack/react-router";


export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    console.log("beforeLoad");
    const user = await getUser();
    context.authentication.setUser(user);
  },
  component: RouteComponent,
});

function RouteComponent() {

  return (
    <div>
      <Outlet />
    </div>
  );
}
