import { UserProvider } from "@/contexts/user.details";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
export function AppProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>{children}</UserProvider>
      <Toaster richColors />
    </QueryClientProvider>
  );
}
