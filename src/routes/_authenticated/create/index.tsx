import { CreationForm } from "@/components/create";
import { StepCounterProvider } from "@/contexts/steps.counter";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StepCounterProvider>
      <CreationForm />
    </StepCounterProvider>
  );
}
