import { useAuth } from "@/hooks/useAuth";
import { CompaniesAppliedTo } from "../dashboard/_components/companies-appied";
import { RecentDocuments } from "./_components/recent_docs";

export const DashboardV2Comp = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="w-full flex ">
        <div>
          <h3 className="text-xl font-semibold">
            Hi, {user.first_name + " " + user.last_name}
          </h3>
          <p className="text-md font-normal text-muted-foreground">
            Welcome Back!, get ready for some roles.
          </p>
        </div>
      </div>
      <div className="w-full h-full mt-10 space-y-10">
        <RecentDocuments/>
        <CompaniesAppliedTo />
      </div>
    </div>
  );
};
