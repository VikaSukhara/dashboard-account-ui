import AccountInfo from "@/components/Accounts/AccountInfo";

import { AccountStatus } from "@/components/Accounts/AccountStatus";
import { CommunicationAndPolicies } from "@/components/Accounts/CommunicationAndPolicies";
import { ComplianceDocs } from "@/components/Accounts/ComplianceDocs";
import { PerformanceMetrics } from "@/components/Accounts/PerformanceMetrics";
import { Policies } from "@/components/Accounts/Policies";
import { PoliciesTable } from "@/components/Accounts/PoliciesTable";
import { WinnabilityPanel } from "@/components/Accounts/Winnability/WinnabilityPanel";

export default function AccountPage() {
  return (
    <div className="w-full border-b border-gray-700 text-white flex flex-col gap-10">
      <AccountInfo />
      <PerformanceMetrics />
      <Policies />

      <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-10">
        <AccountStatus currentStep={5} />
        <ComplianceDocs />
      </div>

      <WinnabilityPanel />
      <CommunicationAndPolicies />
      <PoliciesTable />
    </div>
  );
}
