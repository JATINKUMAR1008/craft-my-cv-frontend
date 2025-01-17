import { UserContext } from "@/contexts/user.details";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
