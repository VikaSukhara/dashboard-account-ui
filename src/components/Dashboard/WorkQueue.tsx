"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const mockData = [
  {
    initials: "SM",
    originator: "Sam Masters",
    clientLine1: "NAMEX Tech Solutions",
    clientLine2: "Cyber Liability",
    source: "Underwriter Referral",
    status: "New",
    statusColor: "bg-[#4298F3]",
    statusDot: "bg-[#4298F3]",
    created: "04/16/2025",
  },
  {
    initials: "AW",
    originator: "Annalise Willis",
    clientLine1: "Maritime Logistics Corp",
    clientLine2: "Marine Cargo",
    source: "Underwriter Referral",
    status: "New",
    statusColor: "bg-[#4298F3]",
    statusDot: "bg-[#4298F3]",
    created: "04/20/2025",
  },
  {
    initials: "PD",
    originator: "Patrick Devenport",
    clientLine1: "GreenField Energy Ltd",
    clientLine2: "Environmental",
    source: "Loss Control Request",
    status: "New",
    statusColor: "bg-[#4298F3]",
    statusDot: "bg-[#4298F3]",
    created: "04/16/2025",
  },
  {
    initials: "AK",
    originator: "Ana Killian",
    clientLine1: "NorthStar Financial Group",
    clientLine2: "D&O Liability",
    source: "Underwriter Referral",
    status: "Pending Review",
    statusColor: "bg-[#FFD066]",
    statusDot: "bg-[#FFD066]",
    created: "04/22/2025",
  },
  {
    initials: "AK",
    originator: "Ana Killian",
    clientLine1: "Alliance Healthcare Systems",
    clientLine2: "Medical Malpractice",
    source: "Email",
    status: "Completed",
    statusColor: "bg-[#22B573]",
    statusDot: "bg-[#22B573]",
    created: "04/28/2025",
  },
  {
    initials: "MK",
    originator: "Me",
    clientLine1: "QuantumTech Industries",
    clientLine2: "Product Liability",
    source: "Email",
    status: "Completed",
    statusColor: "bg-[#22B573]",
    statusDot: "bg-[#22B573]",
    created: "04/20/2025",
  },
];

const tabs = [
  { label: "Assigned to me", count: 12 },
  { label: "Pending Review", count: 8 },
  { label: "Referrals", count: 3 },
];

export function WorkQueue() {
  const [activeTab, setActiveTab] = useState("Assigned to me");
  const [tooltipVisibleIndex, setTooltipVisibleIndex] = useState<number | null>(
    null
  );

  const filteredData = mockData.filter((item) => {
    if (activeTab === "Assigned to me") {
      return true;
    } else if (activeTab === "Pending Review") {
      return item.status === "Pending Review";
    } else if (activeTab === "Referrals") {
      return (
        item.source === "Referral" || item.source === "Underwriter Referral"
      );
    }
    return true;
  });

  return (
    <div className="bg-[#1e2233] border border-[#43485A] rounded-2xl px-3 py-3 w-full max-w-[770px]">
      <h2 className="text-xl font-medium mb-2">Work Queue</h2>

      <div className="flex gap-3 mb-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={cn(
              "px-3 py-[4px] rounded-full text-[12px] transition-colors whitespace-nowrap",
              activeTab === tab.label
                ? "bg-[#4298F3] text-white shadow-sm"
                : "bg-[#181C2C] text-white hover:bg-[#3181DB]"
            )}
          >
            <span className={activeTab === tab.label ? "" : "text-white"}>
              {tab.label}
            </span>
            <span className="ml-1 opacity-80">({tab.count})</span>
          </button>
        ))}
      </div>

      <div className="overflow-x-auto lg:overflow-hidden max-w-full max-h-[400px] rounded-lg">
        <table className="min-w-[770px] w-full text-base text-left table-fixed">
          <thead className="text-white/60 uppercase tracking-wide text-xs bg-transparent border-b border-[#363C4A]">
            <tr className="bg-[#252a3d]">
              <th className="py-2 px-2 text-[10px] text-[#8694a8] w-[130px]">
                Originator
              </th>
              <th className="text-[10px] text-[#8694a8] w-[160px]">Client/Line</th>
              <th className="text-[10px] text-[#8694a8] w-[150px]">Type</th>
              <th className="text-[10px] text-[#8694a8] w-[100px]">Status</th>
              <th className="text-[10px] text-[#8694a8] w-[80px]">Created</th>
              <th className="w-[40px]"></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr
                key={idx}
                className={cn(
                  "border-b border-[#363C4A] last:border-none hover:bg-[#252B3D] transition",
                  idx === filteredData.length - 1 && "rounded-b-2xl",
                  idx % 2 === 1 && "bg-[#252a3d]"
                )}
              >
                <td className="py-[6px] px-2 pr-3 whitespace-nowrap flex items-center h-[49px] w-[130px] gap-2">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] bg-[#203885] text-white">
                    {row.initials}
                  </span>
                  <span className="text-[12px] text-white">{row.originator}</span>
                </td>
                <td className="py-[6px] w-[160px]">
                  <div className="text-[12px] text-white">{row.clientLine1}</div>
                  <div className="text-[12px] text-[#b3b3cc] w-[150px]">
                    {row.clientLine2}
                  </div>
                </td>
                <td className="py-[6px] text-[12px] text-white w-[150px]">
                  {row.source}
                </td>
                <td className="py-[6px] w-[100px]">
                  <span className="flex items-center gap-2">
                    <span className={cn("w-3 h-3 rounded-full", row.statusDot)} />
                    <span
                      className={cn(
                        "text-[10px]",
                        row.statusColor === "bg-[#FFD066]"
                          ? "text-[#FFD066]"
                          : row.statusColor === "bg-[#22B573]"
                          ? "text-[#22B573]"
                          : "text-[#4298F3]"
                      )}
                    >
                      {row.status}
                    </span>
                  </span>
                </td>
                <td className="py-[6px] text-[12px] text-white w-[80px]">
                  {row.created}
                </td>

                <td className="py-[6px] pr-2 text-right relative w-[40px]">
                  <span
                    className="w-5 h-5 flex rounded-full border border-white flex-col justify-center items-center hover:bg-[#363C4A] cursor-pointer transition relative"
                    onMouseEnter={() => setTooltipVisibleIndex(idx)}
                    onMouseLeave={() => setTooltipVisibleIndex(null)}
                  >
                    <svg width={10} height={10} fill="none">
                      <circle cx="5" cy="2" r="0.8" fill="#A3AED0" />
                      <circle cx="5" cy="5" r="0.8" fill="#A3AED0" />
                      <circle cx="5" cy="8" r="0.8" fill="#A3AED0" />
                    </svg>
                    {tooltipVisibleIndex === idx && (
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded bg-gray-300 text-xs text-black whitespace-nowrap shadow-lg z-10">
                        Details
                      </div>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
