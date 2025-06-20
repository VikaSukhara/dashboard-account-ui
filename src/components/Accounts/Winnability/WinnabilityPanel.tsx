"use client";

import WinnabilitySidebar from "./WinnabilitySidebar";
import { WinnabilityScore } from "./WinnabilityScore";
import { WinnabilityDetails } from "./WinnabilityDetails";
import { WinnabilityRecommendations } from "./WinnabilityRecommendations";

export function WinnabilityPanel() {
  return (
    <section>
      <h2 className="text-[28px] font-medium mb-2">Account Details</h2>

      <div className="md:bg-[#1e2233] border border-[#43485A] rounded-2xl px-0 py-8 w-full flex flex-col xl:flex-row  gap-4 shadow-lg text-white max-w-full mt-6">
        <WinnabilitySidebar />

        <div className="flex-1 px-4 flex flex-col gap-6">
          <div>
            <WinnabilityScore />
          </div>

          <div>
            <WinnabilityDetails />
          </div>

          <div>
            <WinnabilityRecommendations />
          </div>
        </div>
      </div>
    </section>
  );
}
