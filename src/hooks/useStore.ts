export enum StoreType {
  PERSONAL_INFORMATION = "PERSONAL INFORMATION",
  JOB_INFORMATION = "JOB INFORMATION",
  TEMPLATE_SELECTION = "TEMPLATE SELECTION",
  SKILLS = "SKILLS",
  PROJECTS = "PROJECTS",
}
export const useStore = () => {
  const storeFormData = (data: any, storeType: StoreType) => {
    console.log("@TYPE", storeType, "@DATA", data);
    localStorage.setItem(storeType, JSON.stringify(data));
  };
  const getStoredFormData = (storeType: StoreType) => {
    const data = localStorage.getItem(storeType);
    return data ? JSON.parse(data) : null;
  };
  const clearStoredFormData = (storeType: StoreType) => {
    localStorage.removeItem(storeType);
  };
  const setCurrentStep = (step: number) => {
    localStorage.setItem("CURRENT_STEP", step.toString());
  };
  const getCurrentStep = () => {
    const step = localStorage.getItem("CURRENT_STEP");
    return step ? parseInt(step) : 0;
  };

  return {
    storeFormData,
    getStoredFormData,
    clearStoredFormData,
    setCurrentStep,
    getCurrentStep,
  };
};

export type useStoreType = ReturnType<typeof useStore>;
