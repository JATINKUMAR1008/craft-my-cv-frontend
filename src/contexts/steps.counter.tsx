import { useStore } from "@/hooks/useStore";
import { createContext, useState } from "react";

interface StepsCounter {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const StepCounterContext = createContext<StepsCounter | null>(null);

export const StepCounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getCurrentStep } = useStore();
  const step = getCurrentStep();
  const [currentStep, setCurrentStep] = useState(step);

  return (
    <StepCounterContext.Provider
      value={{
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </StepCounterContext.Provider>
  );
};
