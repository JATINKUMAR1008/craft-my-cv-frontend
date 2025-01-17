import { Button } from "../ui/button";
import { RecentSlider } from "./_components/recent-slider";
import { CompaniesAppliedTo } from "./_components/companies-appied";
import { Analytics } from "./_components/analytics";
import { Link } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";

export const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="w-full max-w-[300px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-[1440px] mt-10 mx-auto h-full">
      <header className="p-2 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">
            Hi, {user.first_name + " " + user.last_name}
          </h1>
          <p className="text-md font-normal">
            Welcome Back!, get ready for some roles.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/getting-started">
            <Button variant={"outline"} size={"sm"}>
              Get Started
            </Button>
          </Link>
          <Button variant={"link"}>Recents</Button>
        </div>
      </header>
      <main className="mt-5 px-2">
        <RecentSlider />
        <CompaniesAppliedTo />
        <Analytics />
      </main>
    </div>
  );
};
