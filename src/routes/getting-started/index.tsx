import GettingStarted from "@/components/getting-started";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/getting-started/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <GettingStarted />;
}
