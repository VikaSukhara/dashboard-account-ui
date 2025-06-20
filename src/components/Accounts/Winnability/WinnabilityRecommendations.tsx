"use client";

import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export function WinnabilityRecommendations() {
  return (
    <div className="w-full bg-[#23283A] rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <RocketLaunchIcon className="w-[20px] h-[20px] text-[#31C491]" />
        <h2 className="text-lg font-semibold text-[#31C491]">
          AI-Powered Recommendations
        </h2>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 bg-transparent rounded-lg p-0">
          <div className="flex-1">
            <p className="text-white font-medium">
              Offer 5% premium discount in exchange for 3-year commitment
            </p>
            <p className="text-sm text-[#8a8b98]">
              Historical win rate increases 24% with multi-year commitments.
              Current pricing is 12% above market average. This approach would
              strengthen retention while maintaining adequate profitability.
            </p>
          </div>
          <button
            className="mt-2 md:mt-0 bg-[#31C491] text-[#181C2C] px-7 py-2 rounded-full
           hover:opacity-90 transition"
          >
            Apply
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 bg-transparent rounded-lg p-0">
          <div className="flex-1">
            <p className="text-white font-medium">
              Propose risk control services for cargo handling procedures
            </p>
            <p className="text-sm text-[#8a8b98]">
              Can potentially reduce loss ratio by 15–20% based on similar
              maritime accounts in your portfolio. Focus on loading/unloading
              operations.
            </p>
          </div>
          <button className="mt-2 md:mt-0 bg-[#31C491] text-[#181C2C] px-7 py-2 rounded-full hover:opacity-90 transition">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
