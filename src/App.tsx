import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth";
import { AppProvider } from "./components/provider/app-provider";

const router = createRouter({
  routeTree,
  context: {
    authentication: undefined!,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <AppProvider>
      <Outlet />
    </AppProvider>
  );
}

export default App;

function Outlet() {
  const auth = useAuth();
  return (
    <RouterProvider
      router={router}
      context={{
        authentication: auth,
      }}
    />
  );
}
