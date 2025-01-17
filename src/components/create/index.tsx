import { StoreType, useStore } from "@/hooks/useStore";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { PersonalInfoForm } from "./forms/personal-info";
import { JobInformationForm } from "./forms/job-infor";
import { useStepCounter } from "@/hooks/useStepsCounter";

const FormForStep = {
  [StoreType.PERSONAL_INFORMATION]: PersonalInfoForm,
  [StoreType.JOB_INFORMATION]: JobInformationForm,
};

const Steps = {
  0: StoreType.PERSONAL_INFORMATION,
  1: StoreType.JOB_INFORMATION,
} as const;

export const CreationForm = () => {
  const { currentStep } = useStepCounter();
  const stepNumber = currentStep as keyof typeof Steps;
  const step = Steps[stepNumber];
  const Form = FormForStep[step];
  return (
    <div className="w-screen h-screen p-10">
      <div className="w-full h-full border">
        <header className="p-4 w-full">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex items-center justify-between text-xs uppercase">
              {Object.values(StoreType).map((value, index) => (
                <span
                  key={index}
                  className={cn(
                    "bg-background flex items-center px-2 text-muted-foreground",
                    index === stepNumber
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <span className="size-5 rounded-full border flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="ml-2">{value}</span>
                </span>
              ))}
            </div>
          </div>
        </header>
        <Separator />
        <div className="w-full h-full">
          <Form />
        </div>
      </div>
    </div>
  );
};
