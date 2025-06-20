"use client";

import { PortfolioGoals } from "@/components/Dashboard/PortfolioGoals";
import { QuickActions } from "@/components/Dashboard/QuickActions";
import { MarketIntelligence } from "@/components/Dashboard/MarketIntelligence";
import { MyAccounts } from "@/components/Dashboard/MyAccounts";
import { WorkQueue } from "@/components/Dashboard/WorkQueue";

export default function Dashboard() {
  return (
    <div className="max-w-[1200px]">
      <div
        className="
          grid 
          grid-cols-1 gap-6 
          md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto_auto] md:gap-4
          lg:grid-cols-[1fr_236px_236px] lg:grid-rows-1 lg:gap-4
        "
      >
        <div className="md:col-span-2 lg:col-span-1">
          <WorkQueue />
        </div>

        <div className="sm:flex sm:justify-center">
          <PortfolioGoals />
        </div>

        <div className="md:row-start-2 md:flex md:flex-col flex flex-col gap-6 lg:row-start-auto lg:col-start-3">
          <QuickActions />
          <MarketIntelligence />
        </div>

        <div className="md:col-span-2 md:row-start-3 lg:col-span-3 lg:row-start-auto lg:mt-0">
          <MyAccounts />
        </div>
      </div>
    </div>
  );
}
