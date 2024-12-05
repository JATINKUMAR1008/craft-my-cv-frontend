
import { Button } from "../ui/button";
import { RecentSlider } from "./_components/recent-slider";
import { CompaniesAppliedTo } from "./_components/companies-appied";
import { Analytics } from "./_components/analytics";
import { Link } from "@tanstack/react-router";

export const Dashboard = () => {
  return (
    <div className="w-full 2xl:max-w-7xl max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-10 mx-auto h-full">
      <header className="p-2 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">Hi, Jatin</h1>
          <p className="text-md font-normal">
            Welcome Back!, get ready for some roles.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/getting-started  ">
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
