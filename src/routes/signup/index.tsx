import { createFileRoute } from "@tanstack/react-router";
import { UserAuth } from "@/components/auth";
import { UserAuthForm } from "@/components/auth/_components/userForm";

export const Route = createFileRoute("/signup/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <UserAuth type="signup">
      <UserAuthForm />
    </UserAuth>
  );
}
