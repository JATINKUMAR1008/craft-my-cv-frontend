import { HammerIcon } from "lucide-react";

export const LOGO = () => {
  return (
    <div className="flex items-center w-full justify-center gap-2">
      <HammerIcon size={30} />
      <h1 className="text-2xl font-bold">Hammer</h1>
    </div>
  );
};
