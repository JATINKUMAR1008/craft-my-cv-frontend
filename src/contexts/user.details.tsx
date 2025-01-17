import { User } from "@/types/user.types";
import { createContext, useState } from "react";

export interface UserContextType {
  user: User;
  setUser: (user: User) => void;
  isLogged: boolean;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const isLogged = !!user;
  return (
    <UserContext.Provider
      value={{
        user: user!,
        setUser,
        isLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
