import { UserAuth } from "@/components/auth";
import { UserLoginForm } from "@/components/auth/_components/userLoginForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signin/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <UserAuth type="signin">
      <UserLoginForm />
    </UserAuth>
  );
}
